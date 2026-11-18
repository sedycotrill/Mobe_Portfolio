// Content for the portfolio. Replace values in place; the shapes stay the same.
// To use a real image, import it (import shot from "../../assets/shot.png") and set `image: shot`.
import heroCutout from "../../assets/heroCutout.png";
import awsCert from "../../assets/awscert.jpg";
import githubCert from "../../assets/githubcert.jpg";
import digitalsafetyandawareness from "../../assets/digitalsafetyandsecurityawareness.jpg";
import introductiontoiotanddigitaltransformation from "../../assets/introductiontoiotanddigitaltransformation.jpg";
import introductiontomodernai from "../../assets/introductiontomodernai.jpg";
import itcustomersupportsbasics from "../../assets/itcustomersupportsbasics.jpg";
import operatingsystemsbasics from "../../assets/operatingsystemsbasics.jpg";

// Generates a placeholder image for any entry that doesn't have a real one yet.
export const ph = (label: string, tone = "#E2B3C0") =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='${tone}'/><g stroke='#9B5F6D' stroke-width='10' stroke-linecap='round'><path d='M400 220v120M340 250l120 60M340 310l120-60'/></g><text x='400' y='420' text-anchor='middle' font-family='sans-serif' font-size='28' fill='#5E5659'>${label}</text></svg>`
  )}`;

export const certificates = [
  { title: "Introduction to Modern AI", issuer: "Cisco Networking Academy", image: introductiontomodernai },  
  { title: "IT Customer Support Basics", issuer: "Cisco Networking Academy", image: itcustomersupportsbasics },
  { title: "Operating Systems Basics", issuer: "Cisco Networking Academy", image: operatingsystemsbasics },
  { title: "Digital Safety and Security Awareness", issuer: "Cisco Networking Academy", image: digitalsafetyandawareness },
  { title: "Introduction to IoT and Digital Transformation", issuer: "Cisco Networking Academy", image: introductiontoiotanddigitaltransformation },
  { title: "Cloudchain Summit: BlockChain and Web 3 in AWS", issuer: "Amazon Web Services Student Builder Group – QCU", image: awsCert },
  { title: "<COMMIT> <PUSH> <REPEAT>: AN INTRODUCTION TO GIT AND GITHUB", issuer: "Junior Philippine Computer Society - QCU", image: githubCert },
];

export const profile = {
  name: "Desiree Mobe",
  tagline: "Aspiring Developer & Creative Thinker",
  portrait: heroCutout,
  email: "mobe.desiree.limare@gmail.com",
  github: "https://github.com/sedycotrill",

  introduction: [
    "I’m a student exploring web development and programming, turning ideas into digital experiences while learning and growing with every project. Beyond writing code, I enjoy exploring new ideas and discovering what I can create through curiosity and creativity. I believe that every experience is an opportunity to learn something new and become better.",
  ],

  quote:
    "Don't be afraid to do things you have never done before; be afraid that you didn't try.",
};


export const personal = {
  intro: "A glimpse into the little things that make me who I am beyond academics.",
  facts: [
    { label: "Birthday", value: "February 19, 2006" },
    { label: "MBTI", value: "ESFP" },
  ],
  groups: [
    { title: "Hobbies", items: ["Exploring design inspiration and aesthetics", "Listening to music", "Playing CODM and Roblox"] },
    { title: "Interests", items: ["Movies and films", "Music and different genres and vibes", "Trying different food and discovering new favorites"] },
    { title: "Favorite activities", items: ["Sleeping whenever I get the chance", "Going on long walks", "Riding the bus and enjoying the scenery"] },
    { title: "In my free time", items: ["Playing online games", "Watching movies or random videos", "Doom scrolling through social media"] },
  ],
};

export const sections = [
  { id: "home", label: "Home ౨ৎ" },
  { id: "introduction", label: "Introduction ౨ৎ" },
  { id: "personal", label: "Little about me ౨ৎ" },
  { id: "education", label: "Education ౨ৎ" },
  { id: "experience", label: "Experience ౨ৎ" },
  { id: "skills", label: "Skills ౨ৎ" },
  { id: "certifications", label: "Certificates ౨ৎ" },
  { id: "contact", label: "Contact ౨ৎ" },
];

export const education = [
  { period: "August 2022 – May 2024", title: "Science, Technology, Engineering, and Mathematics (STEM)", school: "Emilio Jacinto National High School", text: "Specialized in Science, Technology, Engineering, and Mathematics subjects while serving as Treasurer of the STEM Organization, managing funds and supporting event planning. Graduated with Honors while consistently maintaining high academic standing." },
  { period: "August 2024 – Present", title: "Bachelor of Science in Information Technology (BSIT)", school: "San Bartolome - Quezon City University", text: "Developing knowledge and skills in information technology, programming, system design, and software development through academic coursework, collaborative projects, and involvement in the League of Excellent Students in Information Technology." },
];

export const experience = [
  { period: "October 2026 - Present", role: "Front-End Development", title: "Kwela Kids: Filipino Sign Language Web System" },
  { period: "September 2026 – Present", role: "System Design & Front-End Development", title: "QCRoute: A Web-Based Transportation Management System for Quezon City" },
  { period: "February 2025 - April 2025 ", role: "Front-End Development", title: "QCU Map" },
  { period: "September 2024 – December 2024", role: "Front-End Development", title: "Guess Who?" },
];

export const contributions = [
  { group: "Documentation", items: [["EduRank", "Gamified E-learning System"], ["SchoolZone", "Point of Sale and Management System"]] },
  { group: "UI Design", items: [["Kalinga Pin", "A Map of Collective Care"], ["FWD", "Employee Monitoring System"]] },
];

export const work = [
  { period: "November 2024 – November 2026 ", role: "Usher", org: "SM Mall of Asia Arena", text: "Assisted with guest services, crowd management, and venue safety to ensure smooth event operations." },
];


export const skillGroups = [
  { title: "Technical Skills",
    items: ["Tailwind CSS", "UI/UX Design", "C#", "Responsive Web Design", "TypeScript", "React.js", "Frontend Development", ]},
  { title: "Tools & Technologies",
    items: [  "Canva", "Draw.io", "GitHub", "Figma", "Lucid Chart", "shadcn / ui",  "Lucide React", "Visual Studio Code",]},
  { title: "Soft Skills",
    items: ["Self-Learning", "Creativity", "Communication", "Problem-Solving", "Adaptability", "Project Coordination", ]},
];

