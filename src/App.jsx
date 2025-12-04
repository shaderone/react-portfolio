import Profile from './assets/profile.jpg';
import ProjectImg from './assets/mavericks.webp';
import Track from './assets/softcore.mp3';

// Book covers
import Alchemist from './assets/alchemist.jpg';
import PsychologyOfMoney from './assets/pof.jpg';
import PridePrejudice from './assets/pride.webp';

import { useRef, useState, useEffect } from 'react';

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

    const update = () => setProgress(audio.currentTime / audio.duration || 0);
    audio.addEventListener('timeupdate', update);
    return () => audio.removeEventListener('timeupdate', update);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div style={pageStyle}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&family=Space+Grotesk:wght@500;700&display=swap');

        @keyframes ripple {0%{transform:scale(0.8);opacity:0.3}50%{transform:scale(1.2);opacity:0.6}100%{transform:scale(0.8);opacity:0.3}}
        @keyframes fadeSlideUp {0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)}}
        @keyframes dotBounce {0%,100%{transform:translateY(0)}50%{transform:translateY(12px)}}
      `}</style>

      {/* ===== LANDING PAGE ===== */}
      <section style={landingSection}>
        {/* Spotify Hero */}
        <div style={spotifyHero}>
          <audio ref={audioRef} src={Track} />
          {playing && <div style={rippleStyle} />}
          <img src={Profile} onClick={togglePlay} alt="Profile" style={albumArt} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <h1 style={heroTitle}>Sharon</h1>
              <p style={heroSub}>MCA Student | DevOps • Automation • UI</p>
            </div>
            <div style={linkRow}>
              <a href="https://shaderone.github.io/mern-training-rit/Day-1/resume/index.html" target="_blank" rel="noreferrer" style={btnPrimary}>Resume</a>
              <a href="https://github.com/shaderone" target="_blank" rel="noreferrer" style={btnGhost}>GitHub</a>
              <a href="https://linkedin.com/in/shaderone" target="_blank" rel="noreferrer" style={btnGhost}>LinkedIn</a>
              <a href="https://www.behance.net/shaderone" target="_blank" rel="noreferrer" style={btnGhost}>Behance</a>
            </div>
            <div style={progressTrack}>
              <div style={{ ...progressFill, width: `${progress * 100}%` }} />
            </div>
          </div>
          <button onClick={togglePlay} style={spotifyPlayBtn}>{playing ? '❚❚' : '▶'}</button>
        </div>

        {/* Self Intro Visual */}
        <div style={introWrapper}>
          <h1 style={{ ...introLine, animationDelay: '0s' }}>I design, code, and build</h1>
          <h1 style={{ ...introLine, animationDelay: '0.2s' }}>solutions that blend technology</h1>
          <h1 style={{ ...introLine, animationDelay: '0.4s' }}>with sleek, thoughtful UI.</h1>
        </div>

        {/* Creative Scroll Indicator */}
        <div style={scrollIndicator} onClick={() => scrollTo('skills-section')}>
          <div style={scrollDot} />
          <div style={scrollLine} />
        </div>
      </section>

      {/* ===== SKILLS + PROJECT ===== */}
      <section id="skills-section" style={sectionBig}>
        <h2 style={sectionTitle}>Skills</h2>
        <div style={skillGrid}>
          {['Linux', 'Git', 'Docker', 'CI/CD', 'React', 'Python', 'Flutter', 'Figma (UI)'].map(s => <div key={s} style={skillChip}>{s}</div>)}
        </div>

        <h2 style={{ ...sectionTitle, marginTop: 50 }}>Featured Project</h2>
        <div style={projectCard}>
          <img src={ProjectImg} alt="Mavericks" style={projectImg} />
          <div style={projectOverlay} />
          <div style={projectBody}>
            <h3>Mavericks</h3>
            <p style={{ fontSize: 14, color: '#bbb', marginBottom: 12 }}>Single showcase project (Fyndr placeholder).</p>
            <div style={tagRow}>
              <span style={tag}>React</span>
              <span style={tag}>Automation</span>
              <span style={tag}>UI</span>
            </div>
            <a href="https://github.com/shaderone" style={btnGhost}>Code</a>
          </div>
        </div>
      </section>

      {/* ===== FUN FACTS + BOOKS ===== */}
      <section style={sectionBig}>
        <h2 style={sectionTitle}>Fun Facts</h2>
        <div style={skillGrid}>
          {['Fast typist', 'Into automotive tech', 'Creative problem solver'].map(f => <div key={f} style={skillChip}>{f}</div>)}
        </div>

        <h3 style={{ marginTop: 40, marginBottom: 12 }}>Books I’ve Read</h3>
        <div style={bookShelf}>
          {[{ img: Alchemist, title: 'The Alchemist', author: 'Paulo Coelho' },
          { img: PsychologyOfMoney, title: 'Psychology of Money', author: 'Morgan Housel' },
          { img: PridePrejudice, title: 'Pride & Prejudice', author: 'Jane Austen' }
          ].map(b => (
            <div key={b.title} style={bookCard}>
              <img src={b.img} alt={b.title} style={bookImg} />
              <p style={bookTitle}>{b.title}</p>
              <p style={bookAuthor}>{b.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={footer}>
        <p>Contact me: <a href="mailto:sharon@example.com" style={footerLink}>sharon@example.com</a></p>
        <p>
          <a href="https://github.com/shaderone" style={footerLink}>GitHub</a> |
          <a href="https://linkedin.com/in/shaderone" style={footerLink}> LinkedIn</a> |
          <a href="https://shaderone.github.io/mern-training-rit/Day-1/resume/index.html" style={footerLink}> Resume</a>
        </p>
      </footer>
    </div>
  );
}

/* ===== STYLES ===== */
const pageStyle = { minHeight: '100vh', background: '#0A0A0A', color: '#fff', padding: '28px', fontFamily: 'Inter, sans-serif' };

/* LANDING */
const landingSection = { height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', gap: 40 };
const introWrapper = { textAlign: 'center' };
const introLine = { fontSize: 36, color: '#1DB954', fontFamily: 'Space Grotesk, sans-serif', opacity: 0, animation: 'fadeSlideUp 1s ease forwards' };
const scrollIndicator = { position: 'absolute', bottom: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' };
const scrollDot = { width: 10, height: 10, borderRadius: '50%', background: '#1DB954', animation: 'dotBounce 1s infinite' };
const scrollLine = { width: 2, height: 40, background: '#1DB954', borderRadius: 1, marginTop: 4 };

/* SPOTIFY HERO */
const spotifyHero = { width: '100%', maxWidth: 780, background: 'linear-gradient(135deg, #1b1b1b, #0a0a0a)', borderRadius: 22, padding: 22, display: 'flex', alignItems: 'center', gap: 18, border: '1px solid rgba(255,255,255,0.12)', position: 'relative', overflow: 'hidden' };
const rippleStyle = { position: 'absolute', inset: 0, borderRadius: 22, background: 'radial-gradient(circle, rgba(29,185,84,0.2) 0%, transparent 70%)', animation: 'ripple 1.5s infinite', pointerEvents: 'none' };
const albumArt = { width: 78, height: 78, borderRadius: 14, objectFit: 'cover', cursor: 'pointer', zIndex: 2 };
const heroTitle = { fontFamily: 'Space Grotesk, sans-serif', fontSize: 28, margin: 0 };
const heroSub = { fontSize: 14, color: '#aaa', marginBottom: 6 };
const linkRow = { display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 10 };
const progressTrack = { width: '100%', height: 6, background: '#222', borderRadius: 999, overflow: 'hidden' };
const progressFill = { height: '100%', background: '#1DB954', transition: 'width 0.2s linear' };
const spotifyPlayBtn = { width: 48, height: 48, borderRadius: '50%', background: '#1DB954', border: 'none', fontSize: 18, cursor: 'pointer' };

/* SECTIONS */
const sectionBig = { marginBottom: 100 };
const sectionTitle = { fontFamily: 'Space Grotesk, sans-serif', fontSize: 22, marginBottom: 20 };

/* SKILLS */
const skillGrid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(120px,1fr))', gap: 14 };
const skillChip = { padding: 14, borderRadius: 14, background: '#141414', border: '1px solid rgba(255,255,255,.1)' };

/* BOOKS */
const bookShelf = { display: 'flex', gap: 20, flexWrap: 'wrap' };
const bookCard = { width: 140, textAlign: 'center' };
const bookImg = { width: '100%', height: 190, borderRadius: 12, objectFit: 'cover' };
const bookTitle = { fontSize: 14, fontWeight: 600 };
const bookAuthor = { fontSize: 12, color: '#aaa' };

/* PROJECT */
const projectCard = { width: '100%', maxWidth: 440, margin: '0 auto', borderRadius: 20, overflow: 'hidden', position: 'relative', border: '1px solid rgba(255,255,255,.12)' };
const projectImg = { width: '100%', height: 220, objectFit: 'cover', transition: '.4s' };
const projectOverlay = { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,.7), transparent)' };
const projectBody = { padding: 18 };
const tagRow = { display: 'flex', gap: 8, marginBottom: 10 };
const tag = { fontSize: 11, padding: '4px 10px', borderRadius: 999, background: '#1DB954', color: '#000' };

/* BUTTONS */
const btnPrimary = { background: '#1DB954', color: '#000', padding: '8px 14px', borderRadius: 999, textDecoration: 'none', fontSize: 14 };
const btnGhost = { border: '1px solid #555', color: '#fff', padding: '8px 14px', borderRadius: 999, textDecoration: 'none', fontSize: 14 };

/* FOOTER */
const footer = { marginTop: 80, padding: 20, textAlign: 'center', background: '#141414', borderTop: '1px solid rgba(255,255,255,.1)' };
const footerLink = { color: '#1DB954', textDecoration: 'none', margin: '0 6px' };
