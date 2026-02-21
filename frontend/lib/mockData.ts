import type { CareerRoadmapResponse } from "./api";

export const MOCK_DATA: Record<string, CareerRoadmapResponse> = {
    arts: {
        target_role: "UX Designer / Creative Director",
        skill_gap_analysis: {
            existing_strengths: [
                "Visual communication & aesthetics",
                "Storytelling & narrative design",
                "Creative ideation & concept development",
                "Typography & colour theory",
            ],
            missing_critical_skills: [
                "Figma / Adobe XD prototyping",
                "User research & usability testing",
                "Design systems & component libraries",
                "Basic HTML/CSS for developer handoff",
                "Portfolio with 5+ case studies",
            ],
        },
        roadmap: {
            foundation: [
                "Complete Google UX Design Certificate (Coursera)",
                "Learn Figma end-to-end: frames, auto-layout, variants",
                "Study Human-Computer Interaction fundamentals",
                "Run 3 usability tests and document findings",
            ],
            intermediate: [
                "Build a design system for a real or concept product",
                "Conduct user interviews, synthesise into personas & journey maps",
                "Learn motion design in Figma (Smart Animate, prototypes)",
                "Collaborate on a project with a developer to understand constraints",
                "Publish 3 detailed case studies on Behance or your portfolio site",
            ],
            advanced: [
                "Specialise: Product Design, Brand Design, or Motion/3D",
                "Lead end-to-end design for a 0-to-1 product",
                "Study design metrics: conversion, retention, NPS",
                "Mentor junior designers and conduct design critiques",
                "Apply to design roles at agencies or product companies",
            ],
        },
        estimated_timeline_months: "8–12",
        recommended_certifications: [
            "Google UX Design Certificate – Coursera",
            "Interaction Design Foundation Membership",
            "Adobe Certified Professional – Visual Design",
            "Nielsen Norman Group UX Certificate",
        ],
        alternative_paths: [
            "Graphic Designer – brand identity, print, packaging",
            "Motion Designer – animation for film, apps, social media",
            "Content Strategist – editorial, brand voice, copywriting",
            "Art Director – advertising, editorial, campaign direction",
            "Game Designer – narrative, level, and character design",
        ],
    },

    commerce: {
        target_role: "Financial Analyst / Business Strategy Manager",
        skill_gap_analysis: {
            existing_strengths: [
                "Accounting & financial statement literacy",
                "Business law and market understanding",
                "MS Excel & basic data analysis",
                "Presentation and stakeholder communication",
            ],
            missing_critical_skills: [
                "Financial modelling (DCF, LBO, M&A)",
                "SQL for business analytics",
                "Power BI or Tableau dashboards",
                "Python for data automation",
                "CFA Level 1 or equivalent credentialing",
            ],
        },
        roadmap: {
            foundation: [
                "Master advanced Excel: VLOOKUP, pivot tables, VBA basics",
                "Study financial modelling from CFI or Wall Street Prep",
                "Learn SQL basics: SELECT, JOINs, aggregation",
                "Build a 3-statement financial model for a public company",
            ],
            intermediate: [
                "Earn CFA Level 1 or FMVA certification",
                "Build Power BI dashboards for financial KPIs",
                "Learn Python pandas for automating reports",
                "Complete a case competition or business simulation",
                "Shadow or intern in investment banking / corporate finance",
            ],
            advanced: [
                "Lead financial planning & analysis (FP&A) for a business unit",
                "Build M&A or venture capital deal models",
                "Study strategy frameworks: Porter's 5, BCG Matrix, OKRs",
                "Pursue MBA or CFA Level 2/3 for senior leadership track",
                "Build a track record of 2–3 measurable business outcomes",
            ],
        },
        estimated_timeline_months: "10–14",
        recommended_certifications: [
            "CFA Level 1 – CFA Institute",
            "FMVA – Corporate Finance Institute",
            "Google Data Analytics Certificate",
            "Power BI Data Analyst – Microsoft",
            "Bloomberg Market Concepts (BMC)",
        ],
        alternative_paths: [
            "Management Consultant – strategy projects across industries",
            "Product Manager – bridge business and technology teams",
            "Investment Banker – capital markets, M&A deal execution",
            "Entrepreneur – launch and operate your own venture",
            "Growth Marketer – data-driven revenue and user growth",
        ],
    },

    science: {
        target_role: "Data Scientist / Research Scientist",
        skill_gap_analysis: {
            existing_strengths: [
                "Strong mathematics and statistics foundation",
                "Scientific methodology and hypothesis testing",
                "Lab data collection and analysis",
                "Academic writing and research synthesis",
            ],
            missing_critical_skills: [
                "Python for data science (NumPy, Pandas, Matplotlib)",
                "Machine learning with Scikit-learn",
                "SQL for large dataset querying",
                "Cloud compute (AWS/GCP) for experiments",
                "Data storytelling and visualisation",
            ],
        },
        roadmap: {
            foundation: [
                "Learn Python via CS50P or Python for Everybody (Coursera)",
                "Master Pandas and NumPy for scientific data wrangling",
                "Study statistics in Python: hypothesis tests, regression, Bayesian inference",
                "Complete 2 exploratory data analysis projects and publish on GitHub",
            ],
            intermediate: [
                "Build ML pipelines with Scikit-learn and XGBoost",
                "Learn SQL and practise on real datasets (Mode, BigQuery public data)",
                "Create interactive dashboards with Plotly or Streamlit",
                "Publish 1 data science blog post or Kaggle notebook",
                "Contribute to an academic or open-source research project",
            ],
            advanced: [
                "Deep-dive into deep learning with PyTorch (NLP or CV specialisation)",
                "Run experiments at scale using cloud ML platforms",
                "Co-author a paper or present at a domain conference",
                "Master A/B testing and causal inference for product decisions",
                "Pursue a PhD or join a research lab if academia is the goal",
            ],
        },
        estimated_timeline_months: "9–15",
        recommended_certifications: [
            "IBM Data Science Professional Certificate – Coursera",
            "Deep Learning Specialization – DeepLearning.AI",
            "Google Advanced Data Analytics Certificate",
            "AWS Certified Machine Learning Specialty",
            "Kaggle Competitions Master (community recognition)",
        ],
        alternative_paths: [
            "Biostatistician – clinical trials, pharma, healthcare data",
            "Quantitative Analyst – financial risk and algorithmic trading",
            "Environmental Data Scientist – climate, geo-spatial analysis",
            "Academic Researcher – publish, teach, and advance knowledge",
            "ML Engineer – productionise models at scale",
        ],
    },

    engineering: {
        target_role: "Software / Systems Engineer",
        skill_gap_analysis: {
            existing_strengths: [
                "Problem-solving and analytical thinking",
                "Mathematics: calculus, linear algebra, discrete maths",
                "Engineering design principles and systems thinking",
                "Technical documentation and lab work",
            ],
            missing_critical_skills: [
                "Modern software engineering (Python/Go/Java)",
                "Data structures and algorithms (LeetCode-level)",
                "System design (distributed systems, APIs, databases)",
                "Cloud deployment (AWS / GCP / Azure)",
                "CI/CD pipelines and DevOps practices",
            ],
        },
        roadmap: {
            foundation: [
                "Pick one language deeply: Python or Java — study OOP, collections, I/O",
                "Complete 75 LeetCode Easy/Medium problems (arrays, trees, graphs)",
                "Build CRUD REST APIs using FastAPI or Spring Boot",
                "Learn Git, GitHub, pull requests, and code reviews",
            ],
            intermediate: [
                "Study system design: load balancers, caching, message queues, CAP theorem",
                "Learn Docker and deploy apps to AWS EC2 or GCP Cloud Run",
                "Build a full-stack project: backend API + React/Next.js frontend",
                "Set up a CI/CD pipeline using GitHub Actions",
                "Learn SQL and NoSQL databases (PostgreSQL, Redis, MongoDB)",
            ],
            advanced: [
                "Contribute to open-source projects at scale",
                "Study distributed systems deeply (MIT 6.824 lectures)",
                "Prepare for FAANG-level system design interviews",
                "Specialise: backend, ML infra, embedded, or cloud systems",
                "Build a product or tool used by real users (side project or startup)",
            ],
        },
        estimated_timeline_months: "10–16",
        recommended_certifications: [
            "AWS Solutions Architect Associate",
            "Google Cloud Professional Cloud Architect",
            "Meta Back-End Developer Certificate – Coursera",
            "Certified Kubernetes Administrator (CKA)",
            "Oracle Java SE Programmer Certification",
        ],
        alternative_paths: [
            "DevOps / Site Reliability Engineer – infra, automation, uptime",
            "Embedded Systems Engineer – firmware, IoT, real-time systems",
            "Cloud Architect – design enterprise cloud infrastructure",
            "Cybersecurity Engineer – penetration testing, secure design",
            "Technical Product Manager – bridge engineering and product",
        ],
    },

    technology: {
        target_role: "Machine Learning Engineer",
        skill_gap_analysis: {
            existing_strengths: [
                "Python programming",
                "SQL & data wrangling",
                "Statistics fundamentals",
                "Basic data visualisation",
            ],
            missing_critical_skills: [
                "Deep learning frameworks (PyTorch / TensorFlow)",
                "MLOps & model deployment pipelines",
                "Large-scale distributed training",
                "Feature engineering at scale",
                "System design for ML products",
            ],
        },
        roadmap: {
            foundation: [
                "Master NumPy, Pandas, and Scikit-learn for classical ML",
                "Complete a linear algebra & calculus refresher (3Blue1Brown series)",
                "Study core ML algorithms: regression, trees, SVM, clustering",
                "Build 2 end-to-end projects: price predictor + churn classifier",
            ],
            intermediate: [
                "Learn PyTorch — tensors, autograd, custom training loops",
                "Study CNNs, RNNs, Transformers with hands-on Kaggle competitions",
                "Containerise models with Docker; serve with FastAPI",
                "Deploy a model to AWS SageMaker or GCP Vertex AI",
                "Learn MLflow for experiment tracking and model registry",
            ],
            advanced: [
                "Fine-tune open-source LLMs (LLaMA, Mistral) using LoRA / QLoRA",
                "Design robust ML pipelines with Kubeflow or Airflow",
                "Study distributed training with PyTorch DDP / FSDP",
                "Contribute to an open-source ML project (Hugging Face, PyTorch)",
                "Build a production-grade ML system end-to-end and publish a case study",
            ],
        },
        estimated_timeline_months: "12–18",
        recommended_certifications: [
            "Google Professional ML Engineer",
            "AWS Certified ML Specialty",
            "Deep Learning Specialization – Coursera (DeepLearning.AI)",
            "MLOps Specialization – Coursera",
            "Hugging Face NLP Course (free)",
        ],
        alternative_paths: [
            "Data Scientist – focus on analysis, experimentation, and business insight",
            "AI Research Engineer – publish papers, work on novel model architectures",
            "ML Platform Engineer – build tooling and infrastructure for ML teams",
            "Applied AI Engineer – integrate LLM APIs into production products",
            "Computer Vision Engineer – specialise in image/video understanding",
        ],
    },
};

export type BackgroundKey = keyof typeof MOCK_DATA;
