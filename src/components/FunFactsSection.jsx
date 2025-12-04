import Alchemist from "../assets/alchemist.jpg";
import PsychologyOfMoney from "../assets/pof.jpg";
import PridePrejudice from "../assets/pride.webp";

export default function FunFactsSection() {
    const funFacts = ["Fast typist", "Into automotive tech", "Creative problem solver"];
    const books = [
        { img: Alchemist, title: "The Alchemist", author: "Paulo Coelho" },
        { img: PsychologyOfMoney, title: "Psychology of Money", author: "Morgan Housel" },
        { img: PridePrejudice, title: "Pride & Prejudice", author: "Jane Austen" },
    ];

    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center gap-12 px-6"
        >
            <h2 className="text-2xl font-spacegrotesk text-green-500 mb-6">Fun Facts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
                {funFacts.map((fact) => (
                    <div
                        key={fact}
                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-center"
                    >
                        {fact}
                    </div>
                ))}
            </div>

            <h3 className="text-xl font-spacegrotesk text-green-500 mt-8 mb-4">Books I’ve Read</h3>
            <div className="flex flex-wrap gap-6 justify-center">
                {books.map((b) => (
                    <div
                        key={b.title}
                        className="w-40 text-center bg-white/5 border border-white/10 rounded-xl p-3"
                    >
                        <img
                            src={b.img}
                            alt={b.title}
                            className="w-full h-48 object-cover rounded-lg mb-2"
                        />
                        <p className="font-semibold text-sm">{b.title}</p>
                        <p className="text-xs text-gray-400">{b.author}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
