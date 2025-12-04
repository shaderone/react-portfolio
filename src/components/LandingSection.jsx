import ScrollIndicator from "./ScrollIndicator";

export default function LandingSection({
    id,
    profileImg,
    playing,
    togglePlay,
    progress,
    scrollTarget,
    scrollIndicatorPosition,
}) {
    return (
        <section
            id={id}
            className="relative flex flex-col justify-center items-center h-screen gap-10"
        >
            {/* Music Component */}
            <div className="flex items-center gap-6 bg-gray-900 rounded-2xl p-6 max-w-3xl w-full relative">
                {playing && (
                    <div className="absolute inset-0 rounded-2xl bg-green-500 opacity-20 animate-pulse pointer-events-none"></div>
                )}
                <img
                    src={profileImg}
                    onClick={togglePlay}
                    alt="Profile"
                    className="w-20 h-20 rounded-lg object-cover cursor-pointer z-10"
                />
                <div className="flex-1 flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-green-500">Sharon</h1>
                    <p className="text-gray-400 text-sm">
                        MCA Student | DevOps • Automation • UI
                    </p>
                    <div className="flex gap-3 flex-wrap mt-2">
                        <a
                            href="https://shaderone.github.io/mern-training-rit/Day-1/resume/index.html"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-green-500 text-black px-4 py-2 rounded-full text-sm"
                        >
                            Resume
                        </a>
                        <a
                            href="https://github.com/shaderone"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-gray-500 px-4 py-2 rounded-full text-sm"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/shaderone"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-gray-500 px-4 py-2 rounded-full text-sm"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://www.behance.net/shaderone"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-gray-500 px-4 py-2 rounded-full text-sm"
                        >
                            Behance
                        </a>
                    </div>
                    <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                        <div
                            className="h-1 bg-green-500 transition-all duration-200"
                            style={{ width: `${progress * 100}%` }}
                        ></div>
                    </div>
                </div>
                <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black text-lg"
                >
                    {playing ? "❚❚" : "▶"}
                </button>
            </div>

            {/* Self Intro */}
            <div className="text-center space-y-2">
                <h1 className="text-3xl md:text-4xl text-green-500 font-bold animate-fadeSlideUp">
                    I design, code, and build
                </h1>
                <h1 className="text-3xl md:text-4xl text-green-500 font-bold animate-fadeSlideUp delay-200">
                    solutions that blend technology
                </h1>
                <h1 className="text-3xl md:text-4xl text-green-500 font-bold animate-fadeSlideUp delay-400">
                    with sleek, thoughtful UI.
                </h1>
            </div>

            {/* Scroll Indicator */}
            <ScrollIndicator targetId={scrollTarget} position={scrollIndicatorPosition} />
        </section>
    );
}
