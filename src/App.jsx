import { useState, useRef, useEffect } from "react";
import LandingSection from "./components/LandingSection";
import MainSection from "./components/MainSection";
import Track from "./assets/softcore.mp3";
import Profile from "./assets/profile.jpg";

export default function App() {
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

    const updateProgress = () =>
      setProgress(audio.currentTime / audio.duration || 0);

    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* SINGLE AUDIO ELEMENT */}
      <audio ref={audioRef} src={Track} />

      {/* FIRST LANDING SECTION */}
      <LandingSection
        id="landing-top"
        profileImg={Profile}
        playing={playing}
        togglePlay={togglePlay}
        progress={progress}
        scrollTarget="main-section"
        scrollIndicatorPosition="bottom"
      />

      {/* MAIN SECTION: Skills + Project + Fun Facts + Books */}
      <MainSection id="main-section" />

      {/* SECOND LANDING SECTION */}
      <LandingSection
        id="landing-bottom"
        profileImg={Profile}
        playing={playing}
        togglePlay={togglePlay}
        progress={progress}
        scrollTarget="landing-top"
        scrollIndicatorPosition="top"
      />
    </div>
  );
}
