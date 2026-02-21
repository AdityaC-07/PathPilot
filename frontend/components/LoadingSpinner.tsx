export default function LoadingSpinner() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 py-12">
            <div className="relative w-16 h-16">
                <div
                    className="absolute inset-0 rounded-full border-4"
                    style={{ borderColor: "var(--border)" }}
                />
                <div
                    className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
                    style={{ borderTopColor: "var(--accent)" }}
                />
                <div
                    className="absolute inset-2 rounded-full border-4 border-transparent animate-spin"
                    style={{
                        borderTopColor: "var(--accent-light)",
                        animationDuration: "0.6s",
                        animationDirection: "reverse",
                    }}
                />
                <div
                    className="absolute inset-4 rounded-full border-4 border-transparent animate-spin"
                    style={{
                        borderTopColor: "var(--accent-dark)",
                        animationDuration: "1s",
                    }}
                />
            </div>
            <div className="text-center space-y-2">
                <p className="font-bold text-base" style={{ color: "var(--text-primary)" }}>
                    Analysing your profile…
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                    Charting optimal pathways
                </p>
            </div>
        </div>
    );
}
