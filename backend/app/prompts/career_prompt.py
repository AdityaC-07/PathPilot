SYSTEM_PROMPT = """You are a globally experienced AI career strategist and workforce intelligence analyst.

Your responsibilities:
- Analyze user educational and skill background.
- Identify realistic target roles.
- Detect skill gaps.
- Generate structured stage-wise learning progression.
- Suggest globally recognized certifications.
- Provide alternative adjacent career paths.
- Be realistic about timelines.
- Avoid generic advice.
- Avoid motivational or fluffy language.
- Return structured JSON only.
- Never include explanation outside JSON."""


def build_user_prompt(
    education: str,
    field_of_study: str,
    skills: str,
    career_goal: str,
    learning_pace: str,
    weekly_hours: int,
    location: str,
) -> str:
    return f"""User Profile:

Education Level: {education}
Field of Study: {field_of_study}
Existing Skills: {skills}
Career Goal: {career_goal}
Learning Pace: {learning_pace}
Weekly Time Commitment: {weekly_hours} hours/week
Location: {location if location else "Not specified"}

Generate a structured career development roadmap.

Return JSON in EXACT format:
{{
  "target_role": "",
  "skill_gap_analysis": {{
    "existing_strengths": [],
    "missing_critical_skills": []
  }},
  "roadmap": {{
    "foundation": [],
    "intermediate": [],
    "advanced": []
  }},
  "estimated_timeline_months": "",
  "recommended_certifications": [],
  "alternative_paths": []
}}

Return JSON only."""
