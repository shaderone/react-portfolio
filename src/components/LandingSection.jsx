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
            <div className="relative flex items-center gap-5 w-full max-w-[780px] p-[22px] rounded-[22px] 
  bg-[linear-gradient(135deg,#1b1b1b,#0a0a0a)] 
  border border-white/10 backdrop-blur-xl overflow-hidden">

                {/* Ripple */}
                {playing && (
                    <div className="pointer-events-none absolute inset-0 rounded-[22px]
      bg-[radial-gradient(circle,rgba(29,185,84,0.25)_0%,transparent_70%)]
      animate-[ripple_1.5s_infinite]">
                    </div>
                )}

                {/* Album Art */}
                <img
                    src={profileImg}
                    onClick={togglePlay}
                    alt="Profile"
                    className="w-[78px] h-[78px] rounded-[14px] object-cover cursor-pointer z-10"
                />

                {/* Center Content */}
                <div className="flex-1 flex flex-col gap-2 z-10">
                    <h1 className="font-['Space_Grotesk'] text-[28px] leading-none">
                        Sharon
                    </h1>

                    <p className="text-[14px] text-gray-400">
                        MCA Student | DevOps • Automation • UI
                    </p>

                    {/* Links */}
                    <div className="flex gap-2 flex-wrap mt-1">
                        <a
                            href="https://shaderone.github.io/mern-training-rit/Day-1/resume/index.html"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#1DB954] text-black px-4 py-1.5 rounded-full text-sm"
                        >
                            Resume
                        </a>

                        {[
                            ['GitHub', 'https://github.com/shaderone'],
                            ['LinkedIn', 'https://linkedin.com/in/shaderone'],
                            ['Behance', 'https://www.behance.net/shaderone'],
                        ].map(([label, link]) => (
                            <a
                                key={label}
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                                className="border border-white/30 text-white px-4 py-1.5 rounded-full text-sm"
                            >
                                {label}
                            </a>
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-[6px] bg-[#222] rounded-full overflow-hidden mt-1">
                        <div
                            className="h-full bg-[#1DB954] transition-[width] duration-200"
                            style={{ width: `${progress * 100}%` }}
                        />
                    </div>
                </div>

                <button
                    onClick={togglePlay}
                    className="
    w-12 h-12 rounded-full 
    flex items-center justify-center 
    bg-[#1DB954] text-black
    hover:scale-105 transition
    z-10
  "
                >
                    {playing ? (
                        // Pause Icon
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                            <rect x="6" y="4" width="4" height="16" />
                            <rect x="14" y="4" width="4" height="16" />
                        </svg>
                    ) : (
                        // Play Icon
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="black">
                            <polygon points="5,3 19,12 5,21" />
                        </svg>
                    )}
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
