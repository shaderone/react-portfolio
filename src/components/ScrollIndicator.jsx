export default function ScrollIndicator({ targetId, direction = "down", position = "bottom" }) {
    const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    const isUp = direction === "up";

    return (
        <div
            onClick={() => scrollTo(targetId)}
            className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer ${position === "top" ? "top-6" : "bottom-6"
                }`}
        >
            {isUp ? (
                <>
                    <div className="w-1 h-10 bg-green-500 rounded" />
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce mt-1" />
                </>
            ) : (
                <>
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-bounce mb-1" />
                    <div className="w-1 h-10 bg-green-500 rounded" />
                </>
            )}
        </div>
    );
}
