from pydantic import BaseModel, Field

class AnalysisRequest(BaseModel):
    temperature: float = Field(..., ge=0, le=50)
    salinity: float = Field(..., ge=0, le=50)
    depth: float = Field(..., ge=0, le=500)
    ph: float = Field(..., ge=4, le=12)
    dissolved_oxygen: float = Field(..., ge=0, le=20)
    location: str = "Selected Coastal Site"

class AnalysisResponse(BaseModel):
    location: str
    activity: str
    species: str
    suitability: int
    confidence: int
    risk: str
    yield_t_per_ha_cycle: float
    annual_revenue_inr: int
    alternative_activity: str
    alternative_score: int
    explanation: list[str]
