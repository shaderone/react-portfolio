import LandingSection from "./components/LandingSection";
import SkillsProjectSection from "./components/SkillsProjectSection";
import FunFactsSection from "./components/FunFactsSection";

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
      {/* ===== First Landing Page ===== */}
      <LandingSection
        id="landing-top"          // add this ID
        scrollTarget="main-section"
        profileImg={Profile}
        audioSrc={Track}
        links={links}
        scrollDirection="down"
        scrollPosition="bottom"
        showIntro={true}
      />

      {/* ===== Skills + Featured Project Section ===== */}
      <section id="main-section">
        <SkillsProjectSection />
      </section>

      {/* ===== Fun Facts + Books Section ===== */}
      <FunFactsSection />

      {/* ===== Final Landing Page ===== */}
      <LandingSection
        id="landing-bottom"       // add this ID
        scrollTarget="landing-top" // scrolls back to first landing
        profileImg={Profile}
        audioSrc={Track}
        links={links}
        scrollDirection="up"
        scrollPosition="top"
        showIntro={true}
      />
    </div>
  );
}
