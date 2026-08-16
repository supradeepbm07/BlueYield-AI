from pathlib import Path
import joblib
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
MODEL_PATH = ROOT / "models" / "activity_model.pkl"
ENCODER_PATH = ROOT / "models" / "activity_encoder.pkl"

FEATURES = ["temperature", "salinity", "depth", "ph", "dissolved_oxygen"]

def load_model():
    if not MODEL_PATH.exists() or not ENCODER_PATH.exists():
        return None, None
    return joblib.load(MODEL_PATH), joblib.load(ENCODER_PATH)

def calculate_suitability(t, s, d, ph, o):
    score = 100.0

    # Prototype preference ranges, not scientific thresholds.
    score -= min(25, abs(t - 26) * 3)
    score -= min(20, abs(s - 34) * 2)
    score -= min(18, abs(d - 12) * 1.1)
    score -= min(15, abs(ph - 8.0) * 12)
    score -= min(18, abs(o - 6.3) * 5)

    return int(max(20, min(96, round(score))))

def choose_species(activity, t, s):
    if activity == "Seaweed":
        if t >= 25 and 30 <= s <= 36:
            return "Kappaphycus alvarezii"
        return "Ulva"
    if t >= 27:
        return "Green Mussel"
    return "Oyster"

def calculate_risk(score, t, s, ph, o):
    violations = 0
    if not 20 <= t <= 31: violations += 1
    if not 28 <= s <= 36: violations += 1
    if not 7.5 <= ph <= 8.5: violations += 1
    if o < 5: violations += 1

    if score >= 75 and violations <= 1:
        return "LOW"
    if score >= 55:
        return "MODERATE"
    return "HIGH"

def analyze(payload):
    t, s, d, ph, o = (
        payload.temperature,
        payload.salinity,
        payload.depth,
        payload.ph,
        payload.dissolved_oxygen
    )

    model, encoder = load_model()

    row = pd.DataFrame([{
        "temperature": t,
        "salinity": s,
        "depth": d,
        "ph": ph,
        "dissolved_oxygen": o
    }])

    if model is not None:
        encoded = model.predict(row)[0]
        activity = encoder.inverse_transform([encoded])[0]
        confidence = int(max(model.predict_proba(row)[0]) * 100)
    else:
        activity = "Seaweed" if calculate_suitability(t,s,d,ph,o) >= 60 else "Shellfish"
        confidence = 70

    suitability = calculate_suitability(t, s, d, ph, o)
    confidence = min(96, max(55, confidence + (suitability - 70) // 8))
    species = choose_species(activity, t, s)
    risk = calculate_risk(suitability, t, s, ph, o)

    yield_t = round(max(2.0, suitability / 100 * 5.8), 1)
    annual_revenue = int(yield_t * 1000 * 90 * 2)

    alternative = "Shellfish" if activity == "Seaweed" else "Seaweed"
    alternative_score = max(40, min(78, suitability - 15))

    explanation = []
    if abs(t - 26) <= 4:
        explanation.append("Temperature is close to the prototype preferred range.")
    else:
        explanation.append("Temperature differs from the prototype preferred range.")

    if abs(s - 34) <= 3:
        explanation.append("Salinity is compatible with the prototype activity profile.")
    else:
        explanation.append("Salinity should be validated carefully before cultivation.")

    if o >= 5.5:
        explanation.append("Dissolved oxygen is acceptable in this prototype assessment.")
    else:
        explanation.append("Dissolved oxygen is a potential risk factor.")

    explanation.append("Depth and pH are included in the site suitability score.")
    explanation.append("Validate seasonal conditions, permits, infrastructure and market access.")

    return {
        "location": payload.location,
        "activity": activity,
        "species": species,
        "suitability": suitability,
        "confidence": confidence,
        "risk": risk,
        "yield_t_per_ha_cycle": yield_t,
        "annual_revenue_inr": annual_revenue,
        "alternative_activity": alternative,
        "alternative_score": alternative_score,
        "explanation": explanation
    }
