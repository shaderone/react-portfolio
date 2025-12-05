import ProjectImg from "../assets/graph.jpg";
import Alchemist from "../assets/alchemist.jpg";
import PsychologyOfMoney from "../assets/pof.jpg";
import PridePrejudice from "../assets/pride.webp";

export default function MainSection({ id }) {
    return (
        <section id={id} className="min-h-screen flex flex-col justify-center items-center gap-5 px-6 py-12">
            {/* Skills + Featured Project */}
            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">

                <div className="md:w-1/4 flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-green-500 mb-4">Skills</h2>
                    <div className="flex flex-col gap-3">
                        {["Linux", "Git", "Docker", "CI/CD", "React", "Python", "Flutter", "Figma (UI)"].map((skill) => (
                            <div key={skill} className="px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 text-center">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>


                <div className="md:w-3/4 flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-green-500 mb-4">Featured Project</h2>
                    <div className="group relative overflow-hidden rounded-2xl border border-gray-700">
                        <img
                            src={ProjectImg}
                            alt="Mavericks"
                            className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-102"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="text-lg font-bold">WevN</h3>
                            <p className="text-sm text-gray-300 mb-2">
                                Visual knowledge Exploration Platform with RAG
                            </p>
                            <div className="flex gap-2 mb-2">
                                <span className="bg-green-500 text-black px-2 py-1 text-xs rounded-full">React</span>
                                <span className="bg-green-500 text-black px-2 py-1 text-xs rounded-full">RAG</span>
                                <span className="bg-green-500 text-black px-2 py-1 text-xs rounded-full">UI</span>
                            </div>
                            <a
                                href="https://github.com/shaderone"
                                className="px-3 py-1 border border-gray-500 rounded-full text-sm"
                            >
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fun Facts + Books */}
            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 mt-12">
                {/* Fun Facts */}
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-green-500">Fun Facts</h2>
                    <div className="flex flex-col gap-3">
                        {["Fast typist", "Into automotive tech", "Creative problem solver"].map((f) => (
                            <div key={f} className="px-4 py-3 bg-gray-900 rounded-lg border border-gray-700 text-center">
                                {f}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Books */}
                <div className="md:w-1/2 flex flex-col gap-4">
                    <h2 className="text-xl font-bold text-green-500">Books I’ve Read</h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {[
                            { img: Alchemist, title: "The Alchemist", author: "Paulo Coelho" },
                            { img: PsychologyOfMoney, title: "Psychology of Money", author: "Morgan Housel" },
                            { img: PridePrejudice, title: "Pride & Prejudice", author: "Jane Austen" },
                        ].map((b) => (
                            <div key={b.title} className="w-40 flex flex-col items-center gap-2">
                                <img src={b.img} alt={b.title} className="w-full h-50 object-cover rounded-lg" />
                                <p className="text-sm font-semibold">{b.title}</p>
                                <p className="text-xs text-gray-400">{b.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
