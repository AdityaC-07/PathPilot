# PathPilot – Frontend

Next.js 14 (App Router) frontend for PathPilot, the AI career roadmap generator.

**Built for AMD Slingshot Hackathon 2026 - AI in Education & Skilling Theme**

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Axios

## AMD Integration Features

- AMD Slingshot branding and acknowledgment
- AMD technology showcase section
- Performance metrics highlighting ROCm acceleration benefits
- Footer with AMD Slingshot information

## Local Development

```bash
cd frontend
npm install
# Set the backend URL (defaults to http://localhost:8000)
# Already set in .env.local

npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page |
| `/generate` | Career profile form |
| `/results` | AI-generated roadmap display |

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_API_URL` | Backend API base URL (e.g. `https://your-api.onrender.com`) |

## Deployment (Vercel)

1. Push this `frontend/` folder to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Set `NEXT_PUBLIC_API_URL` to your deployed backend URL.
4. Set root directory to `frontend/`.
5. Deploy.
