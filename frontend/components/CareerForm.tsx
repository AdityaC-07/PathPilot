"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SELECT_CLASS =
    "w-full border rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer pr-10";

const getSelectStyle = (hasError: boolean) =>
    `${SELECT_CLASS} ${hasError
        ? "border-red-400 focus:ring-red-300 bg-red-50 text-red-700"
        : "border-[var(--border)] focus:ring-[var(--accent)] bg-[var(--card)] text-[var(--text-primary)] hover:border-[var(--accent)]"
    }`;

interface FormState {
    education: string;
    field_of_study: string;
    skills: string;
    career_goal: string;
    learning_pace: string;
    weekly_hours: string;
    location: string;
}

const FIELDS: {
    id: keyof FormState;
    label: string;
    type?: string;
    options: { value: string; label: string }[];
}[] = [
        {
            id: "education",
            label: "Current Education Level",
            type: "select",
            options: [
                { value: "", label: "Select your education level…" },
                { value: "High School", label: "High School" },
                { value: "Bachelor's Degree", label: "Bachelor's Degree" },
                { value: "Master's Degree", label: "Master's Degree" },
                { value: "PhD / Doctorate", label: "PhD / Doctorate" },
                { value: "Self-Taught / Bootcamp", label: "Self-Taught / Bootcamp" },
            ]
        },
        {
            id: "field_of_study",
            label: "Background / Field of Study",
            type: "select",
            options: [
                { value: "", label: "Select your background…" },
                { value: "arts", label: "Arts, Design & Humanities" },
                { value: "commerce", label: "Commerce, Business & Finance" },
                { value: "science", label: "Pure Science & Mathematics" },
                { value: "engineering", label: "Engineering (Non-CS)" },
                { value: "technology", label: "Computer Science & Technology" },
            ]
        },
        {
            id: "skills",
            label: "Current Skills (comma-separated)",
            type: "text",
            options: []
        },
        {
            id: "career_goal",
            label: "Primary Career Goal",
            type: "select",
            options: [
                { value: "", label: "Select your career goal…" },
                { value: "Gain foundational knowledge", label: "Gain foundational knowledge" },
                { value: "Upskill in current profession", label: "Upskill in current profession" },
                { value: "Transition into a new field entirely", label: "Transition into a new field entirely" },
            ]
        },
        {
            id: "learning_pace",
            label: "Preferred Learning Pace",
            type: "select",
            options: [
                { value: "", label: "How fast can you learn?" },
                { value: "slow", label: "Slow — 1–2 hrs/day, relaxed pace" },
                { value: "moderate", label: "Moderate — 2–4 hrs/day, steady grind" },
                { value: "fast", label: "Fast — 5+ hrs/day, intensive mode" },
            ]
        },
        {
            id: "weekly_hours",
            label: "Available Weekly Hours",
            type: "select",
            options: [
                { value: "", label: "Hours per week you can commit…" },
                { value: "5", label: "5 Hours" },
                { value: "10", label: "10 Hours" },
                { value: "20", label: "20 Hours" },
                { value: "30", label: "30 Hours" },
                { value: "40", label: "40+ Hours" },
            ]
        },
        {
            id: "location",
            label: "Target Job Location",
            type: "select",
            options: [
                { value: "", label: "Select your location…" },
                { value: "India", label: "India" },
                { value: "United States", label: "United States" },
                { value: "United Kingdom", label: "United Kingdom" },
                { value: "Germany", label: "Germany" },
                { value: "Canada", label: "Canada" },
                { value: "Australia", label: "Australia" },
                { value: "Singapore", label: "Singapore" },
                { value: "UAE / Middle East", label: "UAE / Middle East" },
                { value: "Remote / Global", label: "Remote / Global" },
            ],
        },
    ];

export default function CareerForm() {
    const router = useRouter();
    const [form, setForm] = useState<FormState>({
        education: "",
        field_of_study: "",
        skills: "",
        career_goal: "",
        learning_pace: "",
        weekly_hours: "",
        location: "",
    });
    const [errors, setErrors] = useState<Partial<FormState>>({});
    const [submitting, setSubmitting] = useState(false);

    const validate = () => {
        const errs: Partial<FormState> = {};
        FIELDS.forEach((f) => {
            // Skip validation for skills (optional field)
            if (f.id === "skills") return;
            if (!form[f.id]) errs[f.id] = "Please select an option";
        });
        setErrors(errs);
        return Object.keys(errs).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        setSubmitting(true);
        sessionStorage.setItem("pp_profile", JSON.stringify(form));
        router.push("/results");
    };

    const completed = Object.values(form).filter(Boolean).length;
    const progress = Math.round((completed / FIELDS.length) * 100);

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Progress */}
            <div className="mb-2">
                <div className="flex justify-between text-xs mb-1.5">
                    <span style={{ color: "var(--text-muted)" }} className="font-medium">
                        Profile completion
                    </span>
                    <span style={{ color: "var(--accent)" }} className="font-bold">
                        {progress}%
                    </span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--border)" }}>
                    <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${progress}%`, background: "var(--accent)" }}
                    />
                </div>
            </div>

            {FIELDS.map((field) => (
                <div key={field.id}>
                    <label
                        htmlFor={field.id}
                        className="block text-xs font-bold uppercase tracking-widest mb-1.5"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        {field.label}
                        {field.id === "skills" && (
                            <span className="text-xs font-normal ml-2" style={{ color: "var(--text-muted)" }}>
                                (Optional)
                            </span>
                        )}
                    </label>
                    {field.type === "text" ? (
                        <input
                            type="text"
                            id={field.id}
                            value={form[field.id]}
                            onChange={(e) => {
                                setForm((p) => ({ ...p, [field.id]: e.target.value }));
                                setErrors((p) => ({ ...p, [field.id]: undefined }));
                            }}
                            placeholder="e.g. Python, JavaScript, Data Analysis"
                            className={getSelectStyle(!!errors[field.id])}
                        />
                    ) : (
                        <select
                            id={field.id}
                            value={form[field.id]}
                            onChange={(e) => {
                                setForm((p) => ({ ...p, [field.id]: e.target.value }));
                                setErrors((p) => ({ ...p, [field.id]: undefined }));
                            }}
                            className={getSelectStyle(!!errors[field.id])}
                        >
                            {field.options.map((opt) => (
                                <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>
                    )}
                    {errors[field.id] && (
                        <p className="text-red-500 text-xs mt-1 font-medium">{errors[field.id]}</p>
                    )}
                </div>
            ))}

            <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl text-white text-sm font-bold tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-50 mt-2"
                style={{ background: "var(--accent)" }}
            >
                {submitting ? "Generating…" : "Generate My Career Roadmap →"}
            </button>
        </form>
    );
}
