import SpotifyHero from "./SpotifyHero";
import LandingIntro from "./LandingIntro";
import ScrollIndicator from "./ScrollIndicator";

export default function LandingSection({
    id,
    scrollTarget,
    scrollDirection = "down",
    scrollPosition = "bottom",
    profileImg,
    audioSrc,
    links,
    showIntro = true,
}) {
    return (
        <section id={id} className="min-h-screen flex flex-col items-center justify-center relative gap-12 px-6">
            {/* Spotify Music Hero always on top */}
            <SpotifyHero profileImg={profileImg} audioSrc={audioSrc} links={links} />

            {/* Landing intro */}
            {showIntro && (
                <div className={`mt-12 text-center`}>
                    <LandingIntro />
                </div>
            )}

            {/* Scroll indicator */}
            <ScrollIndicator
                targetId={scrollTarget}
                direction={scrollDirection}
                position={scrollPosition} // "top" for last landing, "bottom" for first landing
            />

        </section>
    );
}
