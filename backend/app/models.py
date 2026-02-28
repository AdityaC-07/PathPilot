from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional


# Auth Models
class SignUpRequest(BaseModel):
    email: EmailStr = Field(..., description="User's email address")
    password: str = Field(..., min_length=6, description="User's password (minimum 6 characters)")
    full_name: str = Field(..., min_length=1, description="User's full name")


class SignInRequest(BaseModel):
    email: EmailStr = Field(..., description="User's email address")
    password: str = Field(..., description="User's password")


class AuthResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


class UserResponse(BaseModel):
    id: int
    email: str
    full_name: str
    created_at: str


# Career Roadmap Models
class UserProfileRequest(BaseModel):
    education: str = Field(..., description="Highest education level of the user")
    field_of_study: str = Field(..., description="User's field/area of study")
    skills: str = Field(..., description="Comma-separated list of current skills")
    career_goal: str = Field(..., description="User's stated career goal or target role")
    learning_pace: str = Field(..., description="slow | moderate | fast")
    weekly_hours: int = Field(..., description="Weekly hours user can commit to learning")
    location: Optional[str] = Field(default="", description="User's geographic location (optional)")


class SkillGapAnalysis(BaseModel):
    existing_strengths: List[str]
    missing_critical_skills: List[str]


class Roadmap(BaseModel):
    foundation: List[str]
    intermediate: List[str]
    advanced: List[str]


class CareerRoadmapResponse(BaseModel):
    target_role: str
    skill_gap_analysis: SkillGapAnalysis
    roadmap: Roadmap
    estimated_timeline_months: str
    recommended_certifications: List[str]
    alternative_paths: List[str]
