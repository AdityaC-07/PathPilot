import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import UserProfileRequest, CareerRoadmapResponse
from app.services.ai_service import generate_career_roadmap
from app.config import FRONTEND_ORIGIN

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="PathPilot API",
    description="AI-powered career roadmap generator",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN, "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "PathPilot API"}


@app.post("/generate", response_model=CareerRoadmapResponse)
async def generate(profile: UserProfileRequest):
    try:
        logger.info(f"Generating roadmap for career goal: {profile.career_goal}")
        result = generate_career_roadmap(profile)
        return result
    except RuntimeError as e:
        logger.error(f"Error generating roadmap: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred.")
