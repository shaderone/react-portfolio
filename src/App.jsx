import SkillsProjectSection from "./components/SkillsProjectSection";
import FunFactsSection from "./components/FunFactsSection";
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
    <div className="bg-black text-white font-sans">
      {/* Landing */}
      <section className="min-h-screen flex flex-col items-center justify-center relative gap-12 px-6">
        <SpotifyHero profileImg={Profile} audioSrc={Track} links={links} />
        <LandingIntro />
        <ScrollIndicator targetId="main-section" />
      </section>

      {/* Main Section: Skills + Project */}
      <section id="main-section">
        <SkillsProjectSection />
      </section>

      {/* Fun Facts + Books */}
      <FunFactsSection />

    </div>
  );
}
