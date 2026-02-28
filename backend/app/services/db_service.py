import sqlite3
import bcrypt
from datetime import datetime
from pathlib import Path
import logging

logger = logging.getLogger(__name__)

# Database file location
DB_PATH = Path(__file__).parent.parent.parent / "users.db"


def get_db_connection():
    """Get a database connection"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row  # Access columns by name
    return conn


def init_database():
    """Initialize the database with users table"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            full_name TEXT NOT NULL,
            created_at TEXT NOT NULL,
            last_login TEXT
        )
    """)
    
    conn.commit()
    conn.close()
    logger.info("Database initialized successfully")


def create_user(email: str, password: str, full_name: str) -> dict:
    """Create a new user with hashed password"""
    try:
        # Hash the password
        password_hash = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
        
        conn = get_db_connection()
        cursor = conn.cursor()
        
        created_at = datetime.utcnow().isoformat()
        
        cursor.execute(
            "INSERT INTO users (email, password_hash, full_name, created_at) VALUES (?, ?, ?, ?)",
            (email, password_hash, full_name, created_at)
        )
        
        user_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        logger.info(f"User created successfully: {email}")
        return {
            "id": user_id,
            "email": email,
            "full_name": full_name,
            "created_at": created_at
        }
    except sqlite3.IntegrityError:
        raise ValueError("Email already exists")
    except Exception as e:
        logger.error(f"Error creating user: {e}")
        raise


def verify_user(email: str, password: str) -> dict:
    """Verify user credentials and return user data"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT * FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    
    if not user:
        conn.close()
        raise ValueError("Invalid email or password")
    
    # Verify password
    if not bcrypt.checkpw(password.encode('utf-8'), user['password_hash']):
        conn.close()
        raise ValueError("Invalid email or password")
    
    # Update last login
    last_login = datetime.utcnow().isoformat()
    cursor.execute("UPDATE users SET last_login = ? WHERE id = ?", (last_login, user['id']))
    conn.commit()
    conn.close()
    
    logger.info(f"User logged in successfully: {email}")
    return {
        "id": user['id'],
        "email": user['email'],
        "full_name": user['full_name'],
        "created_at": user['created_at'],
        "last_login": last_login
    }


def get_user_by_id(user_id: int) -> dict:
    """Get user by ID"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT id, email, full_name, created_at, last_login FROM users WHERE id = ?", (user_id,))
    user = cursor.fetchone()
    conn.close()
    
    if not user:
        raise ValueError("User not found")
    
    return {
        "id": user['id'],
        "email": user['email'],
        "full_name": user['full_name'],
        "created_at": user['created_at'],
        "last_login": user['last_login']
    }


def get_user_by_email(email: str) -> dict:
    """Get user by email"""
    conn = get_db_connection()
    cursor = conn.cursor()
    
    cursor.execute("SELECT id, email, full_name, created_at, last_login FROM users WHERE email = ?", (email,))
    user = cursor.fetchone()
    conn.close()
    
    if not user:
        raise ValueError("User not found")
    
    return {
        "id": user['id'],
        "email": user['email'],
        "full_name": user['full_name'],
        "created_at": user['created_at'],
        "last_login": user['last_login']
    }
