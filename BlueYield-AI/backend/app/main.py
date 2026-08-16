from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from .schemas import AnalysisRequest, AnalysisResponse
from .engine import analyze


app = FastAPI(
    title="BlueYield AI API",
    version="1.0.0",
    description="Marine agriculture decision intelligence prototype."
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

PROJECT_ROOT = Path(__file__).resolve().parents[2]
FRONTEND_DIR = PROJECT_ROOT / "frontend"


# Serve CSS, JavaScript, images, etc.
app.mount(
    "/assets",
    StaticFiles(directory=FRONTEND_DIR / "assets"),
    name="assets"
)


@app.get("/")
def home():
    return FileResponse(FRONTEND_DIR / "index.html")


@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "blueyield-api"
    }


@app.post("/api/analyze", response_model=AnalysisResponse)
def run_analysis(request: AnalysisRequest):
    return analyze(request)
