import SpotifyHero from "./components/SpotifyHero";
import LandingIntro from "./components/LandingIntro";
import ScrollIndicator from "./components/ScrollIndicator";

import Profile from "./assets/profile.jpg";
import Track from "./assets/softcore.mp3";

export default function App() {
  const links = [
    { label: "Resume", href: "https://shaderone.github.io/mern-training-rit/Day-1/resume/index.html", primary: true },
    { label: "GitHub", href: "https://github.com/shaderone", primary: false },
    { label: "LinkedIn", href: "https://linkedin.com/in/shaderone", primary: false },
    { label: "Behance", href: "https://www.behance.net/shaderone", primary: false },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative">
      <SpotifyHero profileImg={Profile} audioSrc={Track} links={links} />
      <LandingIntro />
      <ScrollIndicator targetId="skills-section" />
    </div>
  );
}
