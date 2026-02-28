import logging
from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from app.models import (
    UserProfileRequest, CareerRoadmapResponse,
    SignUpRequest, SignInRequest, AuthResponse, UserResponse
)
from app.services.ai_service import generate_career_roadmap
from app.services.db_service import init_database, create_user, verify_user, get_user_by_id
from app.services.auth_service import create_access_token, verify_token
from app.config import FRONTEND_ORIGIN, AMD_ROCM_AVAILABLE
from typing import Optional

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

# Initialize database on startup
@app.on_event("startup")
async def startup_event():
    init_database()
    logger.info("Database initialized")


# Auth dependency
async def get_current_user(authorization: Optional[str] = Header(None)) -> dict:
    """Dependency to get current user from JWT token"""
    if not authorization:
        raise HTTPException(status_code=401, detail="Authorization header missing")
    
    try:
        scheme, token = authorization.split()
        if scheme.lower() != "bearer":
            raise HTTPException(status_code=401, detail="Invalid authentication scheme")
    except ValueError:
        raise HTTPException(status_code=401, detail="Invalid authorization header")
    
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    
    try:
        user = get_user_by_id(payload['user_id'])
        return user
    except ValueError:
        raise HTTPException(status_code=401, detail="User not found")


@app.get("/health")
async def health_check():
    return {
        "status": "ok",
        "service": "PathPilot API",
        "amd_rocm_available": AMD_ROCM_AVAILABLE,
        "amd_slingshot": True
    }


# Auth Endpoints
@app.post("/auth/signup", response_model=AuthResponse)
async def signup(signup_data: SignUpRequest):
    """Create a new user account"""
    try:
        user = create_user(
            email=signup_data.email,
            password=signup_data.password,
            full_name=signup_data.full_name
        )
        
        # Create access token
        token = create_access_token(user['id'], user['email'])
        
        return AuthResponse(
            access_token=token,
            user=user
        )
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"Signup error: {e}")
        raise HTTPException(status_code=500, detail="Failed to create account")


@app.post("/auth/signin", response_model=AuthResponse)
async def signin(signin_data: SignInRequest):
    """Sign in with email and password"""
    try:
        user = verify_user(
            email=signin_data.email,
            password=signin_data.password
        )
        
        # Create access token
        token = create_access_token(user['id'], user['email'])
        
        return AuthResponse(
            access_token=token,
            user=user
        )
    except ValueError as e:
        raise HTTPException(status_code=401, detail=str(e))
    except Exception as e:
        logger.error(f"Signin error: {e}")
        raise HTTPException(status_code=500, detail="Failed to sign in")


@app.get("/auth/me", response_model=UserResponse)
async def get_me(current_user: dict = Depends(get_current_user)):
    """Get current user profile"""
    return UserResponse(**current_user)


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
async def generate(profile: UserProfileRequest, current_user: dict = Depends(get_current_user)):
    """Generate career roadmap (requires authentication)"""
    try:
        logger.info(f"Generating roadmap for user {current_user['email']}, career goal: {profile.career_goal}")
        result = generate_career_roadmap(profile)
        return result
    except RuntimeError as e:
        logger.error(f"Error generating roadmap: {e}")
        raise HTTPException(status_code=500, detail=str(e))
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred.")
