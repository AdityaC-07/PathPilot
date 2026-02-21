"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { MOCK_DATA } from "@/lib/mockData";
import type { CareerRoadmapResponse } from "@/lib/api";
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

    useEffect(() => {
        const raw = sessionStorage.getItem("pp_profile");
        if (!raw) { router.replace("/generate"); return; }

        const parsed = JSON.parse(raw);
        setProfile(parsed);

        const background: string = parsed.field_of_study?.toLowerCase() || "technology";
        const roadmap = MOCK_DATA[background] || MOCK_DATA.technology;

        // Simulate a brief AI "thinking" delay
        const t = setTimeout(() => {
            setData(roadmap);
            setLoading(false);
        }, 1800);

        return () => clearTimeout(t);
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
