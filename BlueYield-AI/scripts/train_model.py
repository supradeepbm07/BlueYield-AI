from pathlib import Path
import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "backend" / "data" / "marine_data.csv"
MODELS = ROOT / "backend" / "models"
MODELS.mkdir(parents=True, exist_ok=True)

df = pd.read_csv(DATA)

FEATURES = [
    "temperature",
    "salinity",
    "depth",
    "ph",
    "dissolved_oxygen"
]

X = df[FEATURES]

encoder = LabelEncoder()
y = encoder.fit_transform(df["activity"])

model = RandomForestClassifier(
    n_estimators=200,
    random_state=42,
    max_depth=8
)
model.fit(X, y)

joblib.dump(model, MODELS / "activity_model.pkl")
joblib.dump(encoder, MODELS / "activity_encoder.pkl")

print("BlueYield demo model trained.")
print("Activities:", list(encoder.classes_))
