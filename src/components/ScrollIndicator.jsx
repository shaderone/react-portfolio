export default function ScrollIndicator({ targetId }) {
    const handleClick = () => {
        const el = document.getElementById(targetId);
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div
            className="absolute bottom-8 flex flex-col items-center cursor-pointer"
            onClick={handleClick}
        >
            <div className="w-3 h-3 rounded-full bg-green-500 animate-dot-bounce" />
            <div className="w-0.5 h-10 bg-green-500 rounded mt-2" />
        </div>
    );
}
