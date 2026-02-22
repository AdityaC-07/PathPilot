# PathPilot

**PathPilot** is an AI-powered career roadmap generator. Enter your education background, existing skills, and career goals, and PathPilot produces a structured, stage-wise learning roadmap — complete with a skill gap analysis, recommended certifications, estimated timelines, and alternative career paths.

---

## Project Structure

```
PathPilot/
├── backend/    # FastAPI + OpenAI backend
└── frontend/   # Next.js 14 frontend
```

---

## Tech Stack

| Layer | Technologies |
|-------|-------------|
| Frontend | Next.js 14 (App Router), TypeScript, Tailwind CSS, Axios |
| Backend | Python 3.11+, FastAPI, Uvicorn, OpenAI SDK, Pydantic v2 |
| AI | OpenAI GPT-4o-mini (configurable) |

---

## Features

- **Profile Form** — Select your education level, field of study, career goal, learning pace, weekly availability, and target location.
- **AI Roadmap Generation** — OpenAI produces a structured JSON roadmap with:
  - Skill gap analysis (strengths & missing skills)
  - Foundation → Intermediate → Advanced learning stages
  - Estimated timeline in months
  - Recommended certifications
  - Alternative adjacent career paths
- **Results Page** — Clean display of the generated roadmap alongside a profile summary.

---

## Getting Started

### Prerequisites

- Node.js 18+
- Python 3.11+
- An [OpenAI API key](https://platform.openai.com/api-keys)

---

### Backend

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate        # macOS / Linux
# venv\Scripts\activate         # Windows

# Install dependencies
pip install -r requirements.txt

# Configure environment variables
cp .env.example .env
# Edit .env — OPENAI_API_KEY is required; see the Environment Variables Reference below for all options

# Start the development server
uvicorn app.main:app --reload --port 8000
```

API is available at `http://localhost:8000`.

#### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/health` | Health check |
| POST | `/generate` | Generate career roadmap |

#### POST `/generate` — Request Body

```json
{
  "education": "Bachelor's Degree",
  "field_of_study": "Computer Science & Technology",
  "skills": "Python, SQL",
  "career_goal": "Transition into a new field entirely",
  "learning_pace": "moderate",
  "weekly_hours": 10,
  "location": "India"
}
```

---

### Frontend

```bash
cd frontend

# Install dependencies
npm install

# Start the development server (connects to http://localhost:8000 by default)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | Backend API base URL |

#### Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/generate` | Career profile form |
| `/results` | AI-generated roadmap |

---

## Deployment

### Backend (Render / Railway / Fly.io)

1. Set `OPENAI_API_KEY`, `OPENAI_MODEL`, and `FRONTEND_ORIGIN` as environment variables on your platform.
2. Set the root directory to `backend/`.
3. Use the start command: `uvicorn app.main:app --host 0.0.0.0 --port $PORT` (Render and Railway assign a dynamic `$PORT`; use `--port 8000` for platforms with a fixed port).

### Frontend (Vercel)

1. Import the `frontend/` directory as a Vercel project.
2. Set `NEXT_PUBLIC_API_URL` to your deployed backend URL.
3. Set the root directory to `frontend/`.
4. Deploy.

---

## Environment Variables Reference

### Backend (`backend/.env`)

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | ✅ Yes | Your OpenAI API key |
| `OPENAI_MODEL` | No (default: `gpt-4o-mini`) | Model to use |
| `FRONTEND_ORIGIN` | No (default: `http://localhost:3000`) | Allowed CORS origin (e.g. `https://your-app.vercel.app`) |

### Frontend (`frontend/.env.local`)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL |

---

## License

This project is open source. See [LICENSE](LICENSE) for details.
