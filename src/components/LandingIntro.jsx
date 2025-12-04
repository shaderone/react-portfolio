export default function LandingIntro() {
    const lines = [
        "I design, code, and build",
        "solutions that blend technology",
        "with sleek, thoughtful UI."
    ];

    return (
        <div className="text-center mt-12 flex flex-col gap-2">
            {lines.map((line, idx) => (
                <h1
                    key={idx}
                    className="text-4xl md:text-5xl font-spacegrotesk text-green-500 opacity-0 animate-fade-slide"
                    style={{ animationDelay: `${idx * 0.2}s` }}
                >
                    {line}
                </h1>
            ))}
        </div>
    );
}
