import { useRef, useState, useEffect } from "react";
import { LuPlay, LuPause } from "react-icons/lu";


export default function SpotifyHero({ profileImg, audioSrc, links }) {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (playing) audioRef.current.pause();
        else audioRef.current.play();
        setPlaying(!playing);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        const update = () => setProgress(audio.currentTime / audio.duration || 0);
        audio.addEventListener("timeupdate", update);
        return () => audio.removeEventListener("timeupdate", update);
    }, []);

    return (
        <div className="relative w-full max-w-3xl bg-linear-to-tr from-gray-900 via-black to-gray-900 rounded-2xl p-6 flex items-center gap-5 border border-white/10 overflow-hidden">
            <audio ref={audioRef} src={audioSrc} />

            {playing && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-radial from-green-500/20 to-transparent animate-ripple pointer-events-none" />
            )}

            <img
                src={profileImg}
                alt="Profile"
                onClick={togglePlay}
                className="w-20 h-20 rounded-lg object-cover cursor-pointer z-10"
            />

            <div className="flex-1 flex flex-col gap-1">
                <h1 className="font-spacegrotesk text-xl md:text-2xl text-green-500">
                    Sharon
                </h1>
                <p className="text-gray-400 text-sm">
                    MCA Student | DevOps • Automation • UI
                </p>

                <div className="flex flex-wrap gap-2 mt-2">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${link.primary ? "bg-green-500 text-black" : "border border-gray-500 text-white"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
                    <div
                        className="h-full bg-green-500 transition-all duration-200"
                        style={{ width: `${progress * 100}%` }}
                    />
                </div>
            </div>

            <button
                onClick={togglePlay}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-lg"
            >
                {playing ? <LuPause /> : <LuPlay />}
            </button>
        </div>
    );
}
