import os
from dotenv import load_dotenv
import logging

load_dotenv()

logger = logging.getLogger(__name__)

# OpenAI is optional - system works with hardcoded data
OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
OPENAI_MODEL: str = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
FRONTEND_ORIGIN: str = os.getenv("FRONTEND_ORIGIN", "http://localhost:3000")

# AMD ROCm detection
AMD_ROCM_AVAILABLE: bool = False
try:
    import subprocess
    result = subprocess.run(["rocminfo"], capture_output=True, timeout=2)
    AMD_ROCM_AVAILABLE = result.returncode == 0
except (subprocess.TimeoutExpired, FileNotFoundError, Exception):
    AMD_ROCM_AVAILABLE = False


