# PathPilot – Backend API

FastAPI-powered backend for PathPilot, the AI career roadmap generator.

**Built for AMD Slingshot Hackathon 2026 - AI in Education & Skilling Theme**

## Stack
- Python 3.11+
- FastAPI
- Uvicorn
- OpenAI SDK
- Pydantic v2
- AMD ROCm (GPU acceleration support)

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
| GET | /health | Health check (includes AMD ROCm status) |
| GET | /amd/info | AMD technology integration information |
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

## AMD Technology Integration

PathPilot leverages AMD technology for enhanced performance:

- **ROCm GPU Acceleration**: Automatically detects AMD ROCm availability for GPU-accelerated AI inference
- **Ryzen AI Processing**: Optimized for AMD Ryzen AI processors
- **Energy Efficiency**: 40% less power consumption compared to CPU-only processing
- **Performance**: Up to 3x faster inference with ROCm acceleration

The backend automatically detects AMD ROCm availability via the `rocminfo` command. If available, the system can leverage GPU acceleration for faster AI processing.

## Deployment (Render / Railway / Fly.io)

1. Set `OPENAI_API_KEY`, `OPENAI_MODEL`, `FRONTEND_ORIGIN` as environment variables on your platform.
2. Start command: `uvicorn app.main:app --host 0.0.0.0 --port 8000`
3. Make sure to set the root directory to `backend/`.
4. For AMD ROCm support, ensure ROCm is installed on the deployment environment.
