# BlueYield AI — Full Hackathon Prototype

BlueYield AI is a decision-intelligence prototype for marine agriculture.

It follows the project architecture:
Data → Processing → AI/ML → Decision Engine → Personalized Recommendation → User Experience.

## What is included

### Frontend
- Responsive dashboard
- Coastal site analysis form
- Activity recommendation
- Species recommendation
- Suitability score
- Environmental risk
- Yield estimate
- Economic potential
- GIS-style location view
- Regional-language UI placeholder
- Explainable recommendation cards

### Backend
- FastAPI REST API
- Random Forest activity classifier
- Rule/model-based species recommendation
- Suitability scoring
- Risk assessment
- Yield estimation
- Economic estimation
- Health endpoint

### Data
A small synthetic/demo dataset is included so the project works immediately.
It is NOT scientifically validated and must not be used for real farming decisions.

## Project structure

BlueYield-AI-Full-Project/
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── engine.py
│   │   └── schemas.py
│   ├── data/
│   │   └── marine_data.csv
│   ├── models/
│   └── requirements.txt
├── frontend/
│   ├── index.html
│   └── assets/
│       ├── style.css
│       └── app.js
├── scripts/
│   └── train_model.py
└── README.md

## Run

### 1. Open terminal

Go to the project folder.

### 2. Install backend packages

```bash
cd backend
pip install -r requirements.txt
cd ..
```

### 3. Train the demo model

```bash
python scripts/train_model.py
```

This creates the Random Forest model in `backend/models/`.

### 4. Start the API

```bash
cd backend
uvicorn app.main:app --reload
```

API:
http://127.0.0.1:8000

API documentation:
http://127.0.0.1:8000/docs

### 5. Start the frontend

Open a second terminal:

```bash
cd frontend
python -m http.server 5500
```

Open:
http://127.0.0.1:5500

The frontend automatically tries the backend at:
http://127.0.0.1:8000

## API

POST `/api/analyze`

Example:

```json
{
  "temperature": 26,
  "salinity": 34,
  "depth": 12,
  "ph": 8,
  "dissolved_oxygen": 6.2,
  "location": "Demo Coastal Site"
}
```

Response contains:
- recommended activity
- species
- suitability
- confidence
- risk
- yield
- economic potential
- explanation
- alternatives

## Important hackathon note

This is a complete working prototype, but the included data is synthetic. For a serious demonstration, replace it with validated oceanographic, weather, GIS, satellite, scientific/government and local economic datasets. Do not present synthetic model output as field-validated scientific prediction.
