import Navbar from "@/components/Navbar";
import CareerForm from "@/components/CareerForm";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Generate Roadmap – PathPilot",
    description: "Fill in your profile to get an AI-generated career roadmap.",
};

export default function GeneratePage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
            <Navbar />

            <main className="flex-1 flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-2xl">
                    {/* Header */}
                    <div className="mb-8 text-center">
                        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                            Step 1 of 2
                        </p>
                        <h1 className="text-3xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                            Build Your Profile
                        </h1>
                        <p className="mt-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                            Select your background to generate your tailored career roadmap.
                        </p>
                    </div>

                    {/* Form container */}
                    <div
                        className="rounded-3xl border p-8 shadow-2xl"
                        style={{ background: "var(--card)", borderColor: "var(--border)" }}
                    >
                        <CareerForm />
                    </div>

                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="text-xs font-semibold hover:underline"
                            style={{ color: "var(--text-muted)" }}
                        >
                            ← Cancel and go back
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
