import ProjectImg from "../assets/mavericks.webp";

export default function SkillsProjectSection() {
    const skills = ["Linux", "Git", "Docker", "CI/CD", "React", "Python", "Flutter", "Figma (UI)"];
    const projectTags = ["React", "Automation", "UI"];

    return (
        <section className="min-h-screen flex flex-col lg:flex-row gap-8 px-6 items-center justify-center">

            {/* Project Column */}
            <div className="w-full lg:w-2/4 flex flex-col gap-4">
                <h2 className="text-2xl font-spacegrotesk text-green-500 mb-4">Featured Project</h2>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group">
                    <img
                        src={ProjectImg}
                        alt="Mavericks"
                        className="w-full aspect-16/9 object-cover transition-transform duration-500  group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">Mavericks</h3>
                        <p className="text-sm mb-2 text-gray-300">
                            Single showcase project (Fyndr placeholder)
                        </p>
                        <div className="flex gap-2 mb-2">
                            {projectTags.map((t) => (
                                <span
                                    key={t}
                                    className="text-black text-xs bg-green-500 px-2 py-1 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <a
                            href="https://github.com/shaderone"
                            className="text-sm border border-white/30 px-3 py-1 rounded-full transition hover:bg-white/10"
                        >
                            Code
                        </a>
                    </div>
                </div>
            </div>

            {/* Skills Column */}
            <div className="w-full lg:w-1/4 flex flex-col gap-6">
                <h2 className="text-2xl font-spacegrotesk text-green-500 mb-4">Skills</h2>
                <div className="grid grid-cols-1 gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center transition hover:scale-105"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
