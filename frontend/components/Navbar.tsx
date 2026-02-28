"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Check if user is logged in
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user");
        setUser(null);
        router.push("/auth");
    };

    return (
        <nav
            className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between border-b backdrop-blur-md"
            style={{ background: "rgba(17, 17, 17, 0.95)", borderColor: "var(--border)" }}
        >
            <Link href="/" className="flex items-center gap-2.5 group">
                <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ color: "var(--accent)" }}
                >
                    {/* Replaced emoji with a clean SVG tech-tree / spark icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <span className="text-white font-bold text-xl tracking-tight">PATHPILOT</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
                <Link href="/" className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors">
                    Home
                </Link>
                <Link href="/generate" className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors">
                    Solutions
                </Link>
                <Link href="/generate" className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors">
                    Services
                </Link>
                <Link href="/generate" className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors">
                    About
                </Link>
                <Link href="/generate" className="text-sm font-bold text-white hover:text-[var(--accent)] transition-colors">
                    Contact
                </Link>
            </div>

            {user ? (
                <div className="flex items-center gap-4">
                    <span className="text-white text-sm font-medium">
                        {user.full_name}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:bg-[var(--accent)] hover:text-white"
                        style={{
                            color: "var(--accent)",
                            border: "1px solid var(--accent)",
                        }}
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <Link
                    href="/auth"
                    className="px-6 py-2.5 rounded-lg text-sm font-bold transition-all hover:bg-[var(--accent)] hover:text-white"
                    style={{
                        color: "var(--accent)",
                        border: "1px solid var(--accent)",
                    }}
                >
                    Sign In
                </Link>
            )}
        </nav>
    );
}
