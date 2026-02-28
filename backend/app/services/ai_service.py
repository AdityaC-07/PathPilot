import logging
from app.models import UserProfileRequest, CareerRoadmapResponse, SkillGapAnalysis, Roadmap

logger = logging.getLogger(__name__)

# Hardcoded mock data for different backgrounds
MOCK_ROADMAPS = {
    "arts": {
        "target_role": "UX Designer / Creative Director",
        "skill_gap_analysis": {
            "existing_strengths": [
                "Visual communication & aesthetics",
                "Storytelling & narrative design",
                "Creative ideation & concept development",
                "Typography & colour theory",
            ],
            "missing_critical_skills": [
                "Figma / Adobe XD prototyping",
                "User research & usability testing",
                "Design systems & component libraries",
                "Basic HTML/CSS for developer handoff",
                "Portfolio with 5+ case studies",
            ],
        },
        "roadmap": {
            "foundation": [
                "Complete Google UX Design Certificate (Coursera)",
                "Learn Figma end-to-end: frames, auto-layout, variants",
                "Study Human-Computer Interaction fundamentals",
                "Run 3 usability tests and document findings",
            ],
            "intermediate": [
                "Build a design system for a real or concept product",
                "Conduct user interviews, synthesise into personas & journey maps",
                "Learn motion design in Figma (Smart Animate, prototypes)",
                "Collaborate on a project with a developer to understand constraints",
                "Publish 3 detailed case studies on Behance or your portfolio site",
            ],
            "advanced": [
                "Specialise: Product Design, Brand Design, or Motion/3D",
                "Lead end-to-end design for a 0-to-1 product",
                "Study design metrics: conversion, retention, NPS",
                "Mentor junior designers and conduct design critiques",
                "Apply to design roles at agencies or product companies",
            ],
        },
        "estimated_timeline_months": "8–12",
        "recommended_certifications": [
            "Google UX Design Certificate – Coursera",
            "Interaction Design Foundation Membership",
            "Adobe Certified Professional – Visual Design",
            "Nielsen Norman Group UX Certificate",
        ],
        "alternative_paths": [
            "Graphic Designer – brand identity, print, packaging",
            "Motion Designer – animation for film, apps, social media",
            "Content Strategist – editorial, brand voice, copywriting",
            "Art Director – advertising, editorial, campaign direction",
            "Game Designer – narrative, level, and character design",
        ],
    },
    "commerce": {
        "target_role": "Financial Analyst / Business Strategy Manager",
        "skill_gap_analysis": {
            "existing_strengths": [
                "Accounting & financial statement literacy",
                "Business law and market understanding",
                "MS Excel & basic data analysis",
                "Presentation and stakeholder communication",
            ],
            "missing_critical_skills": [
                "Financial modelling (DCF, LBO, M&A)",
                "SQL for business analytics",
                "Power BI or Tableau dashboards",
                "Python for data automation",
                "CFA Level 1 or equivalent credentialing",
            ],
        },
        "roadmap": {
            "foundation": [
                "Master advanced Excel: VLOOKUP, pivot tables, VBA basics",
                "Study financial modelling from CFI or Wall Street Prep",
                "Learn SQL basics: SELECT, JOINs, aggregation",
                "Build a 3-statement financial model for a public company",
            ],
            "intermediate": [
                "Earn CFA Level 1 or FMVA certification",
                "Build Power BI dashboards for financial KPIs",
                "Learn Python pandas for automating reports",
                "Complete a case competition or business simulation",
                "Shadow or intern in investment banking / corporate finance",
            ],
            "advanced": [
                "Lead financial planning & analysis (FP&A) for a business unit",
                "Build M&A or venture capital deal models",
                "Study strategy frameworks: Porter's 5, BCG Matrix, OKRs",
                "Pursue MBA or CFA Level 2/3 for senior leadership track",
                "Build a track record of 2–3 measurable business outcomes",
            ],
        },
        "estimated_timeline_months": "10–14",
        "recommended_certifications": [
            "CFA Level 1 – CFA Institute",
            "FMVA – Corporate Finance Institute",
            "Power BI Data Analyst – Microsoft",
            "SQL for Data Science – IBM or Coursera",
        ],
        "alternative_paths": [
            "Management Consultant – strategy, operations, digital transformation",
            "Product Manager – roadmaps, market fit, metrics",
            "Investment Banker – M&A, capital markets, equity research",
            "Data Analyst – business insights, forecasting, KPIs",
            "Entrepreneur – start and scale your own business",
        ],
    },
    "science": {
        "target_role": "Data Scientist / Research Analyst",
        "skill_gap_analysis": {
            "existing_strengths": [
                "Strong analytical and mathematical foundation",
                "Research methodology and critical thinking",
                "Statistical analysis fundamentals",
                "Scientific documentation and reporting",
            ],
            "missing_critical_skills": [
                "Python programming (NumPy, Pandas, Scikit-learn)",
                "Machine learning algorithms and model evaluation",
                "SQL and database management",
                "Data visualization (Matplotlib, Seaborn, Tableau)",
                "Real-world project portfolio",
            ],
        },
        "roadmap": {
            "foundation": [
                "Learn Python: basics, data structures, functions",
                "Master Pandas and NumPy for data manipulation",
                "Study SQL: queries, joins, aggregations",
                "Complete intro courses: statistics & probability",
            ],
            "intermediate": [
                "Build 3 end-to-end data science projects",
                "Learn ML algorithms: regression, classification, clustering",
                "Study feature engineering and model evaluation",
                "Create interactive dashboards with Tableau or Power BI",
                "Participate in Kaggle competitions",
            ],
            "advanced": [
                "Deep learning with TensorFlow or PyTorch",
                "Deploy ML models in production (Flask, FastAPI)",
                "Master A/B testing and experimental design",
                "Contribute to open-source data science projects",
                "Build strong portfolio with documented case studies",
            ],
        },
        "estimated_timeline_months": "9–14",
        "recommended_certifications": [
            "Google Data Analytics Certificate",
            "IBM Data Science Professional Certificate",
            "AWS Certified Machine Learning",
            "TensorFlow Developer Certificate",
        ],
        "alternative_paths": [
            "Bioinformatics Specialist – genomics, computational biology",
            "Research Scientist – academia, pharma, government labs",
            "Quantitative Analyst – finance, trading algorithms",
            "ML Engineer – model deployment, MLOps",
            "Business Intelligence Analyst – insights, reporting, metrics",
        ],
    },
    "engineering": {
        "target_role": "Solutions Architect / Technical Project Manager",
        "skill_gap_analysis": {
            "existing_strengths": [
                "Strong problem-solving & systems thinking",
                "Technical fundamentals and mathematics",
                "Project planning and documentation",
                "Teamwork and cross-functional collaboration",
            ],
            "missing_critical_skills": [
                "Cloud platforms (AWS, Azure, GCP)",
                "Software architecture patterns",
                "Agile/Scrum methodologies",
                "Basic programming (Python or JavaScript)",
                "DevOps and CI/CD pipelines",
            ],
        },
        "roadmap": {
            "foundation": [
                "Learn Python or JavaScript fundamentals",
                "Study cloud computing basics: AWS or Azure fundamentals",
                "Complete Agile/Scrum certification course",
                "Practice system design principles",
            ],
            "intermediate": [
                "Earn AWS Solutions Architect or Azure certification",
                "Build full-stack applications with modern frameworks",
                "Study microservices and API design",
                "Learn Docker and Kubernetes basics",
                "Lead a technical project from inception to delivery",
            ],
            "advanced": [
                "Design enterprise-scale distributed systems",
                "Master DevOps: CI/CD, monitoring, infrastructure as code",
                "Study security best practices and compliance",
                "Mentor engineers and conduct architecture reviews",
                "Obtain senior cloud or architecture certifications",
            ],
        },
        "estimated_timeline_months": "10–15",
        "recommended_certifications": [
            "AWS Solutions Architect Associate/Professional",
            "Azure Solutions Architect Expert",
            "PMP – Project Management Professional",
            "Certified ScrumMaster (CSM)",
        ],
        "alternative_paths": [
            "DevOps Engineer – automation, cloud infrastructure",
            "Technical Program Manager – large-scale initiatives",
            "Site Reliability Engineer – uptime, performance, scaling",
            "Product Manager (Technical) – roadmaps, specs, delivery",
            "Engineering Manager – team leadership, hiring, culture",
        ],
    },
    "technology": {
        "target_role": "Full-Stack Developer / Software Engineer",
        "skill_gap_analysis": {
            "existing_strengths": [
                "Programming fundamentals and logic",
                "Understanding of algorithms and data structures",
                "Version control (Git) basics",
                "Problem-solving mindset",
            ],
            "missing_critical_skills": [
                "Modern frontend frameworks (React, Vue, Angular)",
                "Backend development (Node.js, Python, Java)",
                "Database design and optimization",
                "API design and RESTful services",
                "Production deployment and monitoring",
            ],
        },
        "roadmap": {
            "foundation": [
                "Master JavaScript ES6+ and TypeScript",
                "Learn React or Vue.js for frontend",
                "Study Node.js or Python for backend",
                "Complete tutorials: build 3 full-stack projects",
            ],
            "intermediate": [
                "Learn SQL and NoSQL databases (PostgreSQL, MongoDB)",
                "Build RESTful APIs with authentication",
                "Study testing: unit, integration, E2E",
                "Deploy applications to cloud (Vercel, AWS, Heroku)",
                "Contribute to open-source projects",
            ],
            "advanced": [
                "Master system design and scalability patterns",
                "Learn microservices architecture",
                "Study performance optimization and caching",
                "Build CI/CD pipelines",
                "Lead feature development for production apps",
            ],
        },
        "estimated_timeline_months": "8–12",
        "recommended_certifications": [
            "AWS Certified Developer Associate",
            "Meta Frontend Developer Certificate",
            "Google Cloud Professional Developer",
            "MongoDB Developer Certification",
        ],
        "alternative_paths": [
            "Frontend Specialist – UI/UX engineering, accessibility",
            "Backend Engineer – APIs, databases, server architecture",
            "Mobile Developer – iOS, Android, React Native",
            "DevOps Engineer – infrastructure, automation, monitoring",
            "Technical Lead – architecture, code review, mentorship",
        ],
    },
}


def generate_career_roadmap(profile: UserProfileRequest) -> CareerRoadmapResponse:
    """Generate career roadmap based on user profile using hardcoded data"""
    
    # Map field_of_study to appropriate roadmap
    background = profile.field_of_study.lower() if profile.field_of_study else "technology"
    
    # Get the appropriate roadmap or default to technology
    roadmap_data = MOCK_ROADMAPS.get(background, MOCK_ROADMAPS["technology"])
    
    logger.info(f"Generating roadmap for background: {background}, career goal: {profile.career_goal}")
    
    return CareerRoadmapResponse(
        target_role=roadmap_data["target_role"],
        skill_gap_analysis=SkillGapAnalysis(
            existing_strengths=roadmap_data["skill_gap_analysis"]["existing_strengths"],
            missing_critical_skills=roadmap_data["skill_gap_analysis"]["missing_critical_skills"],
        ),
        roadmap=Roadmap(
            foundation=roadmap_data["roadmap"]["foundation"],
            intermediate=roadmap_data["roadmap"]["intermediate"],
            advanced=roadmap_data["roadmap"]["advanced"],
        ),
        estimated_timeline_months=roadmap_data["estimated_timeline_months"],
        recommended_certifications=roadmap_data["recommended_certifications"],
        alternative_paths=roadmap_data["alternative_paths"],
    )

