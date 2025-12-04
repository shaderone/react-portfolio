export default function ScrollIndicator({ targetId, position }) {
    return (
        <div
            className={`absolute ${position === "top" ? "top-6" : "bottom-6"} flex flex-col items-center cursor-pointer`}
            onClick={() =>
                document
                    .getElementById(targetId)
                    .scrollIntoView({ behavior: "smooth" })
            }
        >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" />
            <div className="w-0.5 h-10 bg-green-500 rounded mt-1" />
        </div>
    );
}
