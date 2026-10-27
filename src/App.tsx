import "./App.css";
import qcRoute from "./assets/qcroute.png";
import kwelaKids from "./assets/kwelakids.png";
import lesitCert from "./assets/lesitcert.jpg";
import awsCert from "./assets/awscert.jpg";
import hayss from "./assets/hayss.jpg";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Code2,
  Mail,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "QC-Route",
    category: "WEB DEVELOPMENT",
    description:
      "QRoute is a commuter-focused web application designed to help users navigate routes and share useful public transportation information. It aims to make commuting information more accessible, and effecient.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: qcRoute,
  },
  {
    number: "02",
    title: "KwelaKids",
    category: "WEB DEVELOPMENT",
    description:
      "Kwelakids is a web-based learning system focused on Filipino Sign Language (FSL). It aims to help users learn and understand FSL through an accessible, user-friendly digital platform.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: kwelaKids,
  },
];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Git",
  "GitHub",
];

function App() {
  const [isNightMode, setIsNightMode] = useState(
  () => localStorage.getItem("portfolio-theme") === "night"
);
const [selectedImage, setSelectedImage] = useState<{
  src: string;
  alt: string;
} | null>(null);

  useEffect(() => {
    localStorage.setItem(
      "portfolio-theme",
      isNightMode ? "night" : "light"
    );
  }, [isNightMode]);

  return (
    <main
  data-theme={isNightMode ? "night" : "light"}
  className={`min-h-screen overflow-hidden ${
    isNightMode ? "night-mode" : "light-mode"
  }`}
>
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-[#252525]/10 bg-[#FFFDF0]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <a href="#home" className="text-2xl font-black tracking-tight">
            DM<span className="text-[#246FB3]">.</span>
          </a>

          <div className="flex max-w-[80%] items-center gap-4 overflow-x-auto text-xs font-semibold sm:gap-6 sm:text-sm">
            <a href="#about" className="shrink-0 transition hover:text-[#246FB3]">About</a>
            <a href="#education" className="shrink-0 transition hover:text-[#246FB3]">Education</a>
            <a href="#projects" className="shrink-0 transition hover:text-[#246FB3]">Projects</a>
            <a
  href="#achievements"
  className="shrink-0 transition hover:text-[#246FB3]"
>
  Personal Qualifications
</a>
            <a href="#certifications" className="shrink-0 transition hover:text-[#246FB3]">Certifications</a>
            <a href="#contact" className="shrink-0 transition hover:text-[#246FB3]">Contact</a>
          </div>
          
<button
  type="button"
  onClick={() => {
  console.log("Theme button clicked");
  setIsNightMode((current) => {
    const nextMode = !current;
    console.log("Night mode:", nextMode);
    return nextMode;
  });
}}
  title={isNightMode ? "Light mode" : "Night mode"}
  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#246FB3] transition hover:bg-[#246FB3]/10">
  {isNightMode ? <Sun size={20} /> : <Moon size={20} />}
</button>

        </nav>
      </header>

      {/* Hero / Cover */}
      <section id="home" className="mx-auto max-w-7xl px-5 pb-12 pt-12 sm:px-8 sm:pt-20">
        <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] sm:text-xs">
          <span>Personal Portfolio</span>
          <span>Desiree Mobe · 2026</span>
        </div>

        <div className="border-y-2 border-[#252525] py-5 sm:py-8">
          <h1 className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.78] tracking-[-0.085em]">
            DESIREE
            <br />
            <span className="text-[#246FB3]">MOBE.</span>
          </h1>
        </div>

        <div className="mt-7 grid gap-7 md:grid-cols-[1fr_1.15fr] md:items-center">
          <div className="max-w-lg">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246FB3]">
              Aspiring Developer & Creative Thinker
            </p>
            <p className="mt-4 max-w-md text-base leading-7 text-[#555555] sm:text-lg">
              I’m a student exploring web development and programming,
              turning ideas into digital experiences while learning and growing
              with every project.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#246FB3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#18558D]"
              >
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#252525] px-5 py-3 text-sm font-bold transition hover:bg-[#252525] hover:text-white"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Hybrid Profile Card */}
<div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#D0E3DE] p-5 sm:min-h-[420px] sm:p-8">

  {/* Decorative Shapes */}
  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[24px] border-white/20" />

  <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-[#39A9DB]" />

  {/* Main Card */}
  <div className="relative z-10 grid w-full max-w-xl items-center gap-6 bg-[#FFF9E9] p-5 shadow-xl sm:grid-cols-[0.8fr_1.2fr] sm:gap-7 sm:p-7">

    {/* Profile Photo */}
    <div className="relative mx-auto w-full max-w-[190px] sm:max-w-none">
      <div className="absolute -bottom-2 -right-2 h-full w-full border-2 border-[#246FB3]" />

      <img
        src={hayss}
        alt="Desiree Mobe"
        className="relative z-10 aspect-[4/5] w-full object-cover object-center"
      />
    </div>

    {/* Introduction */}
    <div>
      <div className="flex items-center justify-between gap-3 border-b border-[#252525]/20 pb-3">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#4D3428] sm:text-xs">
          A little about me
        </span>

        <Code2 size={21} className="shrink-0 text-[#246FB3]" />
      </div>

      <h2 className="mt-5 text-3xl font-black leading-tight text-[#4D3428] sm:text-4xl">
        Curious
        <br />
        by nature.
        <br />
        <span className="text-[#246FB3]">Built to learn.</span>
      </h2>

      <p className="mt-4 text-sm leading-6 text-[#705548]">
        Learning, creating, and discovering what’s possible through code.
      </p>
    </div>

  </div>
</div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to About Me"
          className="mt-10 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition hover:text-[#246FB3]"
        >
          Discover my story <ArrowDown size={17} />
        </a>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[#252525]/15">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-24 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246FB3]">
              01 / Introduction
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              A work in
              <br />
              <span className="text-[#246FB3]">progress.</span>
            </h2>
          </div>
          <div className="max-w-2xl md:pt-10">
            <p className="text-lg leading-8 text-[#454545]">
              I’m a student developing my skills in web development and
              programming. I enjoy exploring new tools, solving problems, and
              collaborating on projects that help me grow as a developer.
            </p>
            <p className="mt-5 leading-7 text-[#666666]">
              This portfolio documents my learning journey, the projects I
              create, and the achievements and certifications I earn along the way.
            </p>
          </div>
        </div>
      </section>

      {/* Education */}
<section id="education" className="bg-[#246FB3] text-white">
  <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
      02 / Academic Background
    </p>

    <div className="mt-5 grid gap-8 md:grid-cols-[1fr_1fr]">
      {/* Section Heading */}
      <div>
        <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Where I'm
          <br />
          learning.
        </h2>
      </div>

      {/* Education Entries */}
          <div className="space-y-8">
            {/* College */}
            <article className="border-t border-white/40 pt-5">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                    01 / College
                  </p>

                  <h3 className="mt-4 text-xl font-black sm:text-2xl">
                    Bachelor of Science in Information Technology
                  </h3>

                  <p className="mt-2 font-semibold">
                    Quezon City University
                  </p>
                </div>

                <p className="text-sm font-medium text-white/75 sm:pt-8 sm:text-right">
                  August 2024 – Present
                </p>
              </div>

              <p className="mt-4 max-w-3xl leading-7 text-white/85">
                Developing knowledge and skills in information technology,
                programming, system design, and software development through
                academic coursework and collaborative projects.
              </p>
            </article>

            {/* Senior High School */}
            <article className="border-t border-white/40 pt-5">
              <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/75">
                    02 / Senior High School
                  </p>

                  <h3 className="mt-4 text-xl font-black sm:text-2xl">
                    Science, Technology, Engineering, and Mathematics
                  </h3>

                  <p className="mt-2 font-semibold">
                    Emilio Jacinto National High School
                  </p>
                </div>

                <p className="text-sm font-medium text-white/75 sm:pt-8 sm:text-right">
                  August 2022 – May 2024
                </p>
              </div>

              <p className="mt-4 max-w-3xl leading-7 text-white/85">
                Specialized in science, technology, engineering, and
                mathematics subjects while serving as Treasurer of the STEM
                Organization, managing funds and supporting event planning.
                Graduated with Honors while consistently maintaining high
                academic standing.
              </p>
            </article>
          </div>
          </div>
      </div>
    </section>

      {/* Projects */}
      <section id="projects" className="border-t border-[#252525]/15">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246FB3]">
            03 / Selected work
          </p>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
              Ideas made
              <br />
              <span className="text-[#246FB3]">tangible.</span>
            </h2>

            <p className="max-w-xs text-sm leading-6 text-[#666666]">
              A visual collection of projects, experiments, and things I’ve built.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.number} className="group">
                <div
  className={`group relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden p-5 sm:p-8 ${
    index === 0 ? "bg-[#D9E9F5]" : "bg-[#E7E2D4]"
  }`}
>
  <div className="absolute left-5 top-5 z-10 text-xs font-bold tracking-widest text-[#252525]/60">
    PROJECT / {project.number}
  </div>
<button
  type="button"
  onClick={() =>
    setSelectedImage({
      src: project.image,
      alt: `${project.title} project screenshot`,
    })
  }
  className="h-full w-full cursor-zoom-in"
  aria-label={`View ${project.title} image in full size`}
>
  <img
    src={project.image}
    alt={`${project.title} project screenshot`}
    className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
  />
</button>

               <span className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#246FB3] text-white transition group-hover:rotate-45">
    <ArrowUpRight size={21} />
  </span>
</div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.16em] text-[#246FB3]">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-2xl font-black">
                      {project.title}
                    </h3>
                  </div>

                  <span className="text-sm font-bold text-[#888888]">
                    {project.number}
                  </span>
                </div>

                <p className="mt-3 max-w-lg leading-7 text-[#666666]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-[#252525]/20 px-3 py-1.5 text-xs font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>      
      
      
{/* Personal Qualifications */}
<section
  id="achievements"
  className="border-t border-[#252525]/15 bg-[#EAE6D9]"
>
  <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246FB3]">
      04 / Personal Qualifications
    </p>

    <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h2 className="text-4xl font-black sm:text-5xl">
          Experience
          <br />
          <span className="text-[#246FB3]">& contributions.</span>
        </h2>

        <p className="mt-4 max-w-sm leading-7 text-[#666666]">
          My experience in system design, documentation, and front-end
          development through academic and collaborative projects.
        </p>
      </div>

      <div className="space-y-8">
        <article className="border-t border-[#252525]/25 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246FB3]">
            System Design & Front-End Development
          </p>
          <p className="mt-5 text-xs font-semibold text-[#777777]">October 2026 – Present</p>
          <h3 className="mt-2 text-xl font-black">Kwela Kids: Filipino Sign Language Web System</h3>
        </article>

        <article className="border-t border-[#252525]/10 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246FB3]">
            Front-End Development
          </p>
          <p className="mt-5 text-xs font-semibold text-[#777777]">September 2026 - Present</p>
          <h3 className="mt-2 text-xl font-black">QCRoute: A Web-Based Transportation Management System for Quezon City</h3>
        </article>

        <article className="border-t border-[#252525]/10 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246FB3]">Front-End Development</p>
          <p className="mt-5 text-xs font-semibold text-[#777777]">Feb 2025 - April 2025</p>
          <h3 className="mt-2 text-xl font-black">QCU Map</h3>
        </article>

        <article className="border-t border-[#252525]/10 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246FB3]">Front-End Development</p>
          <p className="mt-5 text-xs font-semibold text-[#777777]">September 2024 – December 2024</p>
          <h3 className="mt-2 text-xl font-black">Guess Who</h3>
        </article>

        <div className="border-t border-[#252525]/10 pt-5">
          <h3 className="text-2xl font-black">Other Projects & Contributions</h3>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246FB3]">UI Design</p>
            <ul className="mt-3 space-y-3 leading-7 text-[#666666]">
              <li><strong className="text-[#252525]">FWD:</strong>{" "}Employee Monitoring System</li>
              <li><strong className="text-[#252525]">Kalinga Pin:</strong>{" "} A Map of Collective Care</li>
            </ul>
          </div>

          <div className="mt-6">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#246FB3]">Documentation</p>
            <ul className="mt-3 space-y-3 leading-7 text-[#666666]">
              <li><strong className="text-[#252525]">EduRank:</strong>{" "}Gamified E-learning System</li>
              <li><strong className="text-[#252525]">School Zone:</strong>{" "}Point of Sale and Management System</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Certifications */}
<section id="certifications" className="border-t border-[#252525]/15">
  <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#246FB3]">
      05 / Learning & development
    </p>

    <div className="mt-5 grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
      <div>
        <BadgeCheck
          size={38}
          strokeWidth={1.5}
          className="text-[#246FB3]"
        />
        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          Certifications.
        </h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <article className="overflow-hidden border border-[#252525]/15 bg-[#EAE6D9]">
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-3">
          <button
  type="button"
  onClick={() =>
    setSelectedImage({
      src: lesitCert,
      alt: "LESIT Recruitment 2026 certificate",
    })
  }
  className="h-full w-full cursor-zoom-in"
  aria-label="View LESIT certificate in full size"
>
  <img
    src={lesitCert}
    alt="LESIT certificate"
    className="h-full w-full object-contain transition-transform duration-200 hover:scale-[1.03]"
  />
</button>
          </div>
          <div className="border-t border-[#252525]/15 p-4">
            <p className="text-sm font-bold uppercase tracking-wider text-[#246FB3]">
              Certificate 01
            </p>
            <h3 className="mt-2 text-lg font-black">LESIT Recruitment 2026</h3>
          </div>
        </article>

        <article className="overflow-hidden border border-[#252525]/15 bg-[#D9E9F5]">
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-white p-3">
            <button
  type="button"
  onClick={() =>
    setSelectedImage({
      src: awsCert,
      alt: "Cloudchain Summit certificate",
    })
  }
  className="h-full w-full cursor-zoom-in"
  aria-label="View Cloudchain Summit in full size"
>
  <img
    src={awsCert}
    alt="AWS certificate"
    className="h-full w-full object-contain transition-transform duration-200 hover:scale-[1.03]"
  />
</button>
          </div>
          <div className="border-t border-[#252525]/15 p-4">
            <p className="text-sm font-bold uppercase tracking-wider text-[#246FB3]">
              Certificate 02
            </p>
            <h3 className="mt-2 text-lg font-black">Cloudchain Summit</h3>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

{selectedImage && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
    onClick={() => setSelectedImage(null)}
    role="presentation"
  >
    <button
      type="button"
      onClick={() => setSelectedImage(null)}
      className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#252525] transition hover:bg-[#D9E9F5]"
      aria-label="Close image preview"
    >
      <X size={22} />
    </button>

    <img
      src={selectedImage.src}
      alt={selectedImage.alt}
      onClick={(event) => event.stopPropagation()}
      className="max-h-[90vh] max-w-full cursor-zoom-out object-contain"
    />
  </div>
)}  

      {/* Skills */}
      <section id="skills" className="bg-[#252525] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#77B7EC]">
            06 / My toolkit
          </p>
          <h2 className="mt-4 text-4xl font-black sm:text-6xl">
            Skills & <span className="text-[#77B7EC]">technologies.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-white/65">
            Technologies I’m learning and using to bring my ideas to life.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-white/25 px-4 py-3 text-sm transition hover:border-[#77B7EC] hover:bg-[#246FB3]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[#246FB3] text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            07 / Get in touch
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <h2 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
              LET’S
              <br />
              CONNECT.
            </h2>
            <div className="max-w-sm">
              <p className="leading-7 text-white/85">
                Have a project idea or want to connect? Feel free to reach out.
              </p>
              <div className="mt-6 flex flex-wrap gap-5">
  
<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=your.mobe.desiree.limare@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 font-semibold transition hover:text-white/70"
>
  <Mail size={19} /> Email
</a>
                <a
                  href="https://github.com/sedycotrill"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold transition hover:text-white/70"
                >
                  <Code2 size={19} /> GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 bg-[#FFFDF0] px-5 py-6 text-xs text-[#555555] sm:px-8">
        <span className="font-black text-[#252525]">DM.</span>
        <span>© {new Date().getFullYear()} Desiree Mobe. All rights reserved.</span>
        <a href="#home" className="font-semibold transition hover:text-[#246FB3]">
          Back to top ↑
        </a>
      </footer>
    </main>
  );
}

export default App;
