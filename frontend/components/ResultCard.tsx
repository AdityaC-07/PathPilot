import type { CareerRoadmapResponse } from "@/lib/api";

interface Props { data: CareerRoadmapResponse; }

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div
            className="rounded-3xl border p-6 sm:p-8"
            style={{ background: "var(--card)", borderColor: "var(--border)", boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}
        >
            <h3 className="font-black text-lg mb-6 flex items-center gap-3" style={{ color: "var(--text-primary)" }}>
                <div className="w-1.5 h-6 rounded-full" style={{ background: "var(--accent)" }} /> {title}
            </h3>
            {children}
        </div>
    );
}

function Tag({ text, variant }: { text: string; variant: "solid" | "outline" | "dim" | "accent" }) {
    const styles = {
        solid: { background: "var(--border)", color: "var(--text-primary)", border: "1px solid transparent" },
        outline: { background: "transparent", color: "var(--text-secondary)", border: "1px solid var(--border)" },
        dim: { background: "rgba(255, 69, 0, 0.05)", color: "var(--accent-light)", border: "1px solid rgba(255, 69, 0, 0.2)" },
        accent: { background: "var(--accent)", color: "white", border: "1px solid var(--accent-light)" },
    }[variant];
    return (
        <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold" style={styles}>
            {text}
        </span>
    );
}

function StageRow({ dot, label, items }: { dot: string; label: string; items: string[] }) {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full mt-1 shrink-0 grid place-items-center" style={{ background: "rgba(255,69,0,0.1)" }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: dot }} />
                </div>
                <div className="flex-1 w-px mt-2" style={{ background: "var(--border)" }} />
            </div>
            <div className="pb-8 flex-1">
                <span
                    className="inline-block text-xs font-black uppercase tracking-widest mb-3 px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(255,69,0,0.08)", color: dot, border: `1px solid rgba(255,69,0,0.2)` }}
                >
                    {label}
                </span>
                <ul className="space-y-2.5">
                    {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--text-muted)" }} />
                            <span className="text-white/80">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default function ResultCard({ data }: Props) {
    return (
        <div className="space-y-6">
            {/* Target Role Hero */}
            <div className="rounded-3xl p-8 sm:p-10 relative overflow-hidden" style={{ background: "var(--card)", borderColor: "var(--accent)", borderWidth: "1px" }}>
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none" style={{ background: "var(--accent)" }} />
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--accent)" }}>
                    TARGET ROLE
                </p>
                <h2 className="text-white text-3xl sm:text-4xl font-black leading-tight max-w-2xl">{data.target_role}</h2>
                <div className="flex items-center gap-3 mt-6">
                    <span
                        className="text-sm font-bold px-4 py-2 rounded-lg"
                        style={{ background: "rgba(255,255,255,0.05)", color: "white", border: "1px solid var(--border)" }}
                    >
                        ⏳ Timeline: <span style={{ color: "var(--accent-light)" }}>{data.estimated_timeline_months} months</span>
                    </span>
                </div>
            </div>

            {/* Skill Gap */}
            <SectionCard title="Skill Gap Analysis">
                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--text-muted)" }}>
                            Existing Strengths
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {data.skill_gap_analysis.existing_strengths.map((s, i) => (
                                <Tag key={i} text={s} variant="outline" />
                            ))}
                        </div>
                    </div>
                    <div className="border-t pt-5" style={{ borderColor: "var(--border)" }}>
                        <p className="text-xs font-black uppercase tracking-widest mb-3" style={{ color: "var(--accent-light)" }}>
                            Skills to Acquire
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {data.skill_gap_analysis.missing_critical_skills.map((s, i) => (
                                <Tag key={i} text={s} variant="dim" />
                            ))}
                        </div>
                    </div>
                </div>
            </SectionCard>

            {/* Roadmap */}
            <SectionCard title="Learning Roadmap">
                <div className="pt-2">
                    <StageRow dot="var(--accent-light)" label="Foundation" items={data.roadmap.foundation} />
                    <StageRow dot="var(--accent)" label="Intermediate" items={data.roadmap.intermediate} />
                    <StageRow dot="var(--accent-dark)" label="Advanced" items={data.roadmap.advanced} />
                </div>
            </SectionCard>

            {/* Two-col row */}
            <div className="grid sm:grid-cols-2 gap-6">
                {/* Certs */}
                <SectionCard title="Certifications">
                    <div className="flex flex-wrap gap-2">
                        {data.recommended_certifications.map((cert, i) => (
                            <Tag key={i} text={cert} variant="dim" />
                        ))}
                    </div>
                </SectionCard>

                {/* Alt paths */}
                <SectionCard title="Alternative Paths">
                    <ul className="space-y-4">
                        {data.alternative_paths.map((path, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 text-sm pb-4 border-b last:border-0 last:pb-0"
                                style={{ color: "var(--text-secondary)", borderColor: "var(--border)" }}
                            >
                                <span
                                    className="w-5 h-5 rounded-md shrink-0 mt-0.5 flex items-center justify-center text-xs font-black"
                                    style={{ background: "rgba(255,255,255,0.05)", color: "var(--accent-light)" }}
                                >
                                    {i + 1}
                                </span>
                                <span className="leading-relaxed">{path}</span>
                            </li>
                        ))}
                    </ul>
                </SectionCard>
            </div>
        </div>
    );
}
