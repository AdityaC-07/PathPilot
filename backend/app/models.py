from pydantic import BaseModel, Field
from typing import List, Optional


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
