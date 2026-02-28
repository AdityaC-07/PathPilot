"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { generateRoadmap, type CareerRoadmapResponse } from "@/lib/api";
import LoadingSpinner from "@/components/LoadingSpinner";
import ResultCard from "@/components/ResultCard";

const BG_LABELS: Record<string, string> = {
    arts: "Arts, Design & Humanities",
    commerce: "Commerce, Business & Finance",
    science: "Pure Science & Mathematics",
    engineering: "Engineering",
    technology: "Computer Science & Technology",
};

export default function ResultsPage() {
    const router = useRouter();
    const [data, setData] = useState<CareerRoadmapResponse | null>(null);
    const [profile, setProfile] = useState<Record<string, string> | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchRoadmap = async () => {
            const raw = sessionStorage.getItem("pp_profile");
            const token = localStorage.getItem("auth_token");

            if (!raw) {
                router.replace("/generate");
                return;
            }

            if (!token) {
                router.replace("/auth");
                return;
            }

            const parsed = JSON.parse(raw);
            setProfile(parsed);

            try {
                // Call the actual API
                const result = await generateRoadmap(
                    {
                        education: parsed.education,
                        field_of_study: parsed.field_of_study,
                        skills: parsed.skills || "",
                        career_goal: parsed.career_goal,
                        learning_pace: parsed.learning_pace,
                        weekly_hours: parseInt(parsed.weekly_hours),
                        location: parsed.location,
                    },
                    token
                );

                setData(result);
                setLoading(false);
            } catch (err: unknown) {
                const error = err as { response?: { data?: { detail?: string } } };
                console.error("Error generating roadmap:", error);
                setError(
                    error.response?.data?.detail ||
                        "Failed to generate roadmap. Please try again."
                );
                setLoading(false);
            }
        };

        fetchRoadmap();
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
            <Navbar />

            <main className="flex-1 flex flex-col items-center p-6 sm:p-12 mb-20">
                <div className="w-full max-w-4xl">
                    {/* Header */}
                    <header className="mb-10 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                            Step 2 of 2
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                            Your Career Roadmap
                        </h1>
                    </header>

                    {/* Loading */}
                    {loading && (
                        <div
                            className="rounded-3xl border p-16 shadow-2xl flex items-center justify-center"
                            style={{ background: "var(--card)", borderColor: "var(--border)" }}
                        >
                            <LoadingSpinner />
                        </div>
                    )}

                    {/* Error */}
                    {error && !loading && (
                        <div
                            className="rounded-3xl border p-8 shadow-2xl"
                            style={{ background: "var(--card)", borderColor: "var(--border)" }}
                        >
                            <div className="text-center">
                                <p className="text-red-500 mb-4">{error}</p>
                                <Link
                                    href="/generate"
                                    className="inline-flex px-8 py-4 rounded-full border text-sm font-bold transition-all hover:bg-white/5"
                                    style={{ borderColor: "var(--accent)", color: "white" }}
                                >
                                    ← Try Again
                                </Link>
                            </div>
                        </div>
                    )}

                    {/* Results */}
                    {data && !loading && (
                        <div className="space-y-6">
                            {/* Profile Summary pill row */}
                            {profile && (
                                <div
                                    className="rounded-2xl border p-5 flex flex-wrap gap-3 items-center"
                                    style={{ background: "var(--card)", borderColor: "var(--border)" }}
                                >
                                    <span className="text-xs font-bold uppercase tracking-widest mr-2" style={{ color: "var(--text-muted)" }}>
                                        Profile:
                                    </span>
                                    {[
                                        { label: "Level", val: profile.education },
                                        { label: "Background", val: BG_LABELS[profile.field_of_study] || profile.field_of_study },
                                        { label: "Goal", val: profile.career_goal },
                                        { label: "Pace", val: `${profile.weekly_hours} hrs/week` },
                                        { label: "Location", val: profile.location },
                                    ].filter(p => p.val).map((p, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                                            style={{ background: "var(--bg)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                                        >
                                            <span style={{ color: "var(--text-muted)" }}>{p.label}:</span> {p.val}
                                        </span>
                                    ))}
                                </div>
                            )}

                            <ResultCard data={data} />

                            <div className="text-center mt-12">
                                <Link
                                    href="/generate"
                                    className="inline-flex px-8 py-4 rounded-full border text-sm font-bold transition-all hover:bg-white/5"
                                    style={{ borderColor: "var(--accent)", color: "white" }}
                                >
                                    ← Generate Another Roadmap
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
