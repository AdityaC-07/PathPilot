import json
import logging
from openai import OpenAI, OpenAIError
from app.config import OPENAI_API_KEY, OPENAI_MODEL
from app.prompts.career_prompt import SYSTEM_PROMPT, build_user_prompt
from app.models import UserProfileRequest, CareerRoadmapResponse, SkillGapAnalysis, Roadmap

logger = logging.getLogger(__name__)

# Only initialize client if API key is available
client = OpenAI(api_key=OPENAI_API_KEY) if OPENAI_API_KEY else None


def generate_career_roadmap(profile: UserProfileRequest) -> CareerRoadmapResponse:
    if not client or not OPENAI_API_KEY:
        raise RuntimeError(
            "OpenAI API key is not configured. Please set OPENAI_API_KEY in your environment variables."
        )
    
    user_prompt = build_user_prompt(
        education=profile.education,
        field_of_study=profile.field_of_study,
        skills=profile.skills,
        career_goal=profile.career_goal,
        learning_pace=profile.learning_pace,
        weekly_hours=profile.weekly_hours,
        location=profile.location or "",
    )

    try:
        response = client.chat.completions.create(
            model=OPENAI_MODEL,
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            response_format={"type": "json_object"},
            temperature=0.4,
            max_tokens=2000,
            timeout=60,
        )

        raw_content = response.choices[0].message.content
        if not raw_content:
            raise ValueError("Empty response from OpenAI.")

        data = json.loads(raw_content)

        return CareerRoadmapResponse(
            target_role=data.get("target_role", ""),
            skill_gap_analysis=SkillGapAnalysis(
                existing_strengths=data.get("skill_gap_analysis", {}).get("existing_strengths", []),
                missing_critical_skills=data.get("skill_gap_analysis", {}).get("missing_critical_skills", []),
            ),
            roadmap=Roadmap(
                foundation=data.get("roadmap", {}).get("foundation", []),
                intermediate=data.get("roadmap", {}).get("intermediate", []),
                advanced=data.get("roadmap", {}).get("advanced", []),
            ),
            estimated_timeline_months=str(data.get("estimated_timeline_months", "")),
            recommended_certifications=data.get("recommended_certifications", []),
            alternative_paths=data.get("alternative_paths", []),
        )

    except OpenAIError as e:
        logger.error(f"OpenAI API error: {e}")
        raise RuntimeError(f"OpenAI API error: {str(e)}")
    except json.JSONDecodeError as e:
        logger.error(f"Failed to parse JSON from OpenAI response: {e}")
        raise RuntimeError("Failed to parse AI response as JSON.")
    except Exception as e:
        logger.error(f"Unexpected error in ai_service: {e}")
        raise RuntimeError(f"Unexpected error: {str(e)}")
