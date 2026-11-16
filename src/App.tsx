import "./App.css";
import {
  ArrowUpRight, BookOpen, Cake, ChevronLeft, ChevronRight, Code2, Coffee, Compass,
  GraduationCap, Heart, Mail, Menu, Moon, Palette, Sun, X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  certificates,
  contributions,
  education,
  experience,
  profile,
  personal,
  sections,
} from "./pages/data/placeholder";
import CursorFollower from "./components/ui/cursorfollower";

type Preview = { src: string; alt: string } | null;

const Star = ({ size = 40, className = "" }: { size?: number; className?: string }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
    <path d="M24 4v40M7 14l34 20M7 34l34-20" />
  </svg>
);

const mailHref = (email: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
const birthday = personal.facts.find((f) => f.label === "Birthday");
const mbti = personal.facts.find((f) => f.label === "MBTI");
const otherFacts = personal.facts.filter((f) => f !== birthday && f !== mbti);
const groupIcons = [Palette, Compass, Heart, Coffee];
const eduIcons = [BookOpen, GraduationCap];

function App() {
  const [isNightMode, setIsNightMode] = useState(
    () => localStorage.getItem("portfolio-theme") === "night"
  );
  const [selectedImage, setSelectedImage] = useState<Preview>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const progress = useRef<HTMLDivElement>(null);
  const strip = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", isNightMode ? "night" : "light");
  }, [isNightMode]);

  // Active section indicator
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Fade-and-rise on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Scroll progress line
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      progress.current?.style.setProperty("--p", String(p));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const preview = (src: string, alt: string) => setSelectedImage({ src, alt });
  const slide = (dir: number) =>
    strip.current?.scrollBy({ left: dir * strip.current.clientWidth * 0.8, behavior: "smooth" });
  const [first, ...rest] = profile.name.split(" ");

  return (
    <main data-theme={isNightMode ? "night" : "light"} className="app">
      <CursorFollower variant="stars" />

      {/* Masthead */}
      <header className="mast">
        <a href="#home" className="mono" aria-label="Home">DM<span>.</span></a>

        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Sections">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? "on" : ""} aria-current={active === s.id ? "true" : undefined} onClick={() => setMenuOpen(false)}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="tools">
          <button type="button" className="icon-btn" onClick={() => setIsNightMode((c) => !c)} title={isNightMode ? "Light mode" : "Night mode"} aria-label={isNightMode ? "Switch to light mode" : "Switch to night mode"}>
            {isNightMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button type="button" className="icon-btn menu-btn" onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        <div className="progress" ref={progress} aria-hidden="true" />
      </header>

      {/* Cover */}
      <section id="home">
        <div className="hero">
          <div className="hero-text">
            <h1><span>{first}</span><span className="outline">{rest.join(" ")}</span></h1>
            <p className="lead serif">{profile.tagline}</p>
            <div className="btns">
              <a href="#contact" className="btn solid">Get in touch</a>
              <a href="#experience" className="btn">See experience</a>
            </div>
          </div>
          <div className="hero-block">
            <Star size={90} className="spin star-deco" />
            <figure className="photo"><img src={profile.portrait} alt={`Portrait of ${profile.name}`} /></figure>
            <div className="badge" aria-hidden="true">
              <svg className="spin badge-ring" viewBox="0 0 120 120">
                <defs><path id="badge-circle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
                <text><textPath href="#badge-circle" textLength="286" lengthAdjust="spacing">{profile.tagline} ✱</textPath></text>
              </svg>
              <Star size={26} className="badge-star" />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section id="introduction" className="sec introduction">
        <h2>Introduction</h2>
        <div className="sec-body reveal">
          <figure className="pull-wrap">
            <Star size={56} className="spin introduction-star" />
            <blockquote className="pull serif">{profile.quote}</blockquote>
          </figure>
          <div className="introduction-rule" aria-hidden="true"><span /><Star size={18} /><span /></div>
          <div className="introduction-text">
            <p>{profile.introduction.join(" ")}</p>
          </div>
        </div>
      </section>

      {/* A little about me */}
      <section id="personal" className="sec band">
        <h2>Little About Me</h2>
        <div className="sec-body reveal">
          <p className="intro">{personal.intro}</p>
          <div className="bento">
            {(birthday || mbti) && (
              <div className="bday inv">
                {birthday && (
                  <div className="bday-item">
                    <span className="bday-icon"><Cake size={26} /></span>
                    <div>
                      <p className="when">{birthday.label}</p>
                      <p className="bday-date">{birthday.value}</p>
                    </div>
                  </div>
                )}
                {birthday && mbti && <span className="slashes" aria-hidden="true">//</span>}
                {mbti && (
                  <div className="bday-item mbti-item">
                    <div>
                      <p className="when">{mbti.label}</p>
                      <p className="bday-date mbti-type">{mbti.value}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
            {otherFacts.map((f) => (
              <div key={f.label} className="me-card">
                <p className="when">{f.label}</p>
                <p className="val">{f.value}</p>
              </div>
            ))}
            {personal.groups.map((g, i) => {
              const Icon = groupIcons[i % groupIcons.length];
              return (
                <div key={g.title} className="me-card">
                  <div className="me-head">
                    <span className="me-icon"><Icon size={20} /></span>
                    <h3>{g.title}</h3>
                  </div>
                  <ul className="me-list">
                    {g.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="sec">
        <h2>Education</h2>
        <div className="sec-body reveal edu">
          {education.map((e, i) => {
            const Icon = eduIcons[i % eduIcons.length];
            return (
              <article key={e.title} className="edu-card">
                <span className="edu-icon"><Icon size={24} /></span>
                <p className="when serif">{e.period}</p>
                <h3>{e.title}</h3>
                <p className="school">{e.school}</p>
                <p>{e.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="sec deep inv">
        <h2>Experience</h2>
        <div className="sec-body reveal">
          <div className="timeline">
            {experience.map((x, i) => (
              <article key={i} className="row">
                <p className="when">{x.period}</p>
                <div><p className="school">{x.role}</p><h3>{x.title}</h3></div>
              </article>
            ))}
          </div>
          <div className="contrib">
            {contributions.map((c) => (
              <div key={c.group}>
                <h3>{c.group}</h3>
                <ul>{c.items.map(([n, d]) => <li key={n + d}><strong>{n}:</strong> {d}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section id="certifications" className="sec tint">
        <h2>Certificates</h2>
        <div className="sec-body reveal">
          <div className="strip-nav">
            <button type="button" className="icon-btn round" onClick={() => slide(-1)} aria-label="Previous certificates"><ChevronLeft size={20} /></button>
            <button type="button" className="icon-btn round" onClick={() => slide(1)} aria-label="Next certificates"><ChevronRight size={20} /></button>
          </div>
          <div className="strip" ref={strip}>
            {certificates.map((c) => (
              <article key={c.title} className="cert">
                <button type="button" tabIndex={-1} className="photo thumb" onClick={() => preview(c.image, `${c.title} certificate`)} aria-label={`View ${c.title} full size`}>
                  <img src={c.image} alt={`${c.title} certificate`} />
                </button>
                <div className="cert-body">
                  <p className="when">{c.issuer}</p>
                  <h3>{c.title}</h3>
                  <button type="button" className="view" onClick={() => preview(c.image, `${c.title} certificate`)}>
                    View full size <ArrowUpRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact + footer */}
      <div className="close inv">
        <section id="contact" className="contact">
          <h2>Let’s work together.</h2>
          <div className="reveal">
            <p className="intro">I'm always open to new ideas, meaningful connections, and opportunities to learn beyond what I already know. Whether it's a collaboration, a creative idea, or simply a conversation, I'd love to hear from you. </p>
            <a className="big-mail" href={mailHref(profile.email)} target="_blank" rel="noreferrer">{profile.email}</a>
            <div className="btns">
              <a className="btn solid" href={mailHref(profile.email)} target="_blank" rel="noreferrer"><Mail size={18} /> Send an email</a>
              <a className="btn" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
            </div>
          </div>
        </section>
        <footer className="foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#home"><Star size={16} /> Back to top</a>
        </footer>
      </div>

      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)} role="dialog" aria-modal="true" aria-label="Image preview">
          <button type="button" className="icon-btn close-btn" onClick={() => setSelectedImage(null)} aria-label="Close image preview"><X size={22} /></button>
          <img src={selectedImage.src} alt={selectedImage.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
}

export default App;