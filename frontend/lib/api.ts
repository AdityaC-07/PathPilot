import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

// Auth interfaces
export interface SignUpPayload {
  email: string;
  password: string;
  full_name: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    email: string;
    full_name: string;
    created_at: string;
  };
}

export interface User {
  id: number;
  email: string;
  full_name: string;
  created_at: string;
}

// Career roadmap interfaces
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

// Auth functions
export async function signUp(payload: SignUpPayload): Promise<AuthResponse> {
  const response = await axios.post<AuthResponse>(
    `${API_BASE}/auth/signup`,
    payload
  );
  return response.data;
}

export async function signIn(payload: SignInPayload): Promise<AuthResponse> {
  const response = await axios.post<AuthResponse>(
    `${API_BASE}/auth/signin`,
    payload
  );
  return response.data;
}

export async function getCurrentUser(token: string): Promise<User> {
  const response = await axios.get<User>(`${API_BASE}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

// Career roadmap function (now requires auth)
export async function generateRoadmap(
  payload: UserProfilePayload,
  token: string
): Promise<CareerRoadmapResponse> {
  const response = await axios.post<CareerRoadmapResponse>(
    `${API_BASE}/generate`,
    payload,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

