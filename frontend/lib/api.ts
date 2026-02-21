import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export interface UserProfilePayload {
  education: string;
  field_of_study: string;
  skills: string;
  career_goal: string;
  learning_pace: string;
  weekly_hours: number;
  location?: string;
}

export interface CareerRoadmapResponse {
  target_role: string;
  skill_gap_analysis: {
    existing_strengths: string[];
    missing_critical_skills: string[];
  };
  roadmap: {
    foundation: string[];
    intermediate: string[];
    advanced: string[];
  };
  estimated_timeline_months: string;
  recommended_certifications: string[];
  alternative_paths: string[];
}

export async function generateRoadmap(
  payload: UserProfilePayload
): Promise<CareerRoadmapResponse> {
  const response = await axios.post<CareerRoadmapResponse>(
    `${API_BASE}/generate`,
    payload
  );
  return response.data;
}
