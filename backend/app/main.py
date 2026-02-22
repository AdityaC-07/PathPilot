import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import UserProfileRequest, CareerRoadmapResponse
from app.services.ai_service import generate_career_roadmap
from app.config import FRONTEND_ORIGIN, AMD_ROCM_AVAILABLE

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
    return {
        "status": "ok",
        "service": "PathPilot API",
        "amd_rocm_available": AMD_ROCM_AVAILABLE,
        "amd_slingshot": True
    }


@app.get("/amd/info")
async def amd_info():
    """Get AMD technology integration information"""
    return {
        "amd_slingshot_participant": True,
        "theme": "AI in Education & Skilling",
        "rocm_available": AMD_ROCM_AVAILABLE,
        "features": [
            "ROCm GPU Acceleration",
            "Ryzen AI Processing",
            "Energy Efficient AI",
            "Open Innovation Platform"
        ],
        "performance_benefits": {
            "inference_speedup": "3x faster with ROCm",
            "energy_efficiency": "40% less power consumption",
            "on_device_capable": True
        }
    }


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
