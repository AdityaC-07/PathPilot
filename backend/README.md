# PathPilot – Backend API

FastAPI-powered backend for PathPilot, the AI career roadmap generator.

## Stack
- Python 3.11+
- FastAPI
- Uvicorn
- OpenAI SDK
- Pydantic v2

## Local Development

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # macOS/Linux

pip install -r requirements.txt

# Copy and fill in your API key
copy .env.example .env

uvicorn app.main:app --reload --port 8000
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| POST | /generate | Generate career roadmap |

### POST /generate – Request Body

```json
{
  "education": "Bachelor's",
  "field_of_study": "Computer Science",
  "skills": "Python, SQL",
  "career_goal": "Machine Learning Engineer",
  "learning_pace": "moderate",
  "weekly_hours": 10,
  "location": "India"
}
```

## Deployment (Render / Railway / Fly.io)

1. Set `OPENAI_API_KEY`, `OPENAI_MODEL`, `FRONTEND_ORIGIN` as environment variables on your platform.
2. Start command: `uvicorn app.main:app --host 0.0.0.0 --port 8000`
3. Make sure to set the root directory to `backend/`.
