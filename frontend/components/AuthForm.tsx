"use client";

import { useState } from "react";
import { signUp, signIn, SignUpPayload, SignInPayload } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    full_name: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let response;

      if (isSignUp) {
        const payload: SignUpPayload = {
          email: formData.email,
          password: formData.password,
          full_name: formData.full_name,
        };
        response = await signUp(payload);
      } else {
        const payload: SignInPayload = {
          email: formData.email,
          password: formData.password,
        };
        response = await signIn(payload);
      }

      // Store token in localStorage
      localStorage.setItem("auth_token", response.access_token);
      localStorage.setItem("user", JSON.stringify(response.user));

      // Redirect to generate page
      router.push("/generate");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { detail?: string } } };
      setError(
        error.response?.data?.detail || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "var(--bg)" }}>
      <div className="max-w-md w-full rounded-3xl border shadow-2xl p-8" style={{ background: "var(--card)", borderColor: "var(--border)" }}>
        <h2 className="text-3xl font-bold text-center mb-6" style={{ color: "var(--text-primary)" }}>
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div>
              <label
                htmlFor="full_name"
                className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                style={{ color: "var(--text-secondary)" }}
              >
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                required={isSignUp}
                className="w-full px-4 py-3 border rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 hover:border-[var(--accent)]"
                style={{ 
                  borderColor: "var(--border)", 
                  background: "var(--bg)", 
                  color: "var(--text-primary)",
                }}
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-widest mb-1.5"
              style={{ color: "var(--text-secondary)" }}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 hover:border-[var(--accent)]"
              style={{ 
                borderColor: "var(--border)", 
                background: "var(--bg)", 
                color: "var(--text-primary)",
              }}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-xs font-bold uppercase tracking-widest mb-1.5"
              style={{ color: "var(--text-secondary)" }}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className="w-full px-4 py-3 border rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 hover:border-[var(--accent)]"
              style={{ 
                borderColor: "var(--border)", 
                background: "var(--bg)", 
                color: "var(--text-primary)",
              }}
              placeholder="••••••••"
            />
            {isSignUp && (
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                Minimum 6 characters
              </p>
            )}
          </div>

          {error && (
            <div className="px-4 py-3 rounded-xl text-sm border" style={{ background: "rgba(239, 68, 68, 0.1)", borderColor: "rgba(239, 68, 68, 0.3)", color: "#ef4444" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl text-white text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            style={{ background: "var(--accent)" }}
          >
            {loading
              ? "Processing..."
              : isSignUp
              ? "Sign Up"
              : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError("");
            }}
            className="text-sm font-medium hover:underline transition-colors"
            style={{ color: "var(--accent)" }}
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
