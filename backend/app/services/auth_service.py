import jwt
from datetime import datetime, timedelta
from typing import Optional
import logging

logger = logging.getLogger(__name__)

# Secret key for JWT - In production, use environment variable
SECRET_KEY = "your-secret-key-change-this-in-production"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_HOURS = 24


def create_access_token(user_id: int, email: str) -> str:
    """Create a JWT access token"""
    expire = datetime.utcnow() + timedelta(hours=ACCESS_TOKEN_EXPIRE_HOURS)
    
    payload = {
        "user_id": user_id,
        "email": email,
        "exp": expire,
        "iat": datetime.utcnow()
    }
    
    token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)
    return token


def verify_token(token: str) -> Optional[dict]:
    """Verify JWT token and return payload"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload
    except jwt.ExpiredSignatureError:
        logger.warning("Token expired")
        return None
    except jwt.InvalidTokenError:
        logger.warning("Invalid token")
        return None


def decode_token(token: str) -> dict:
    """Decode token without verification (for debugging)"""
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM], options={"verify_signature": False})
        return payload
    except Exception as e:
        logger.error(f"Error decoding token: {e}")
        raise
