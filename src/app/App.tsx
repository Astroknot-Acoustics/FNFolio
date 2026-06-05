import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft, ChevronDown, X, Send, Check } from "lucide-react";

import ddrobotecThumb from "../imports/ddrobotec-thumb-2.png";
import ddrobotecHero from "../imports/health.jpg";
import ddrobotec1 from "../imports/DD_1-min-1.png";
import ddrobotec2 from "../imports/DD_2-min-1.png";
import sunriseThumb from "../imports/Sunrise-thumb.jpg";
import sunriseHero from "../imports/Sunrise-thumb.jpg";
import sunrise2 from "../imports/Sunrise_2.png";
import sunrise3 from "../imports/Sunrise_3.png";
import sunrise5 from "../imports/UX_sunrise_5.jpg";
import meierToblerThumb from "../imports/meier_tobler_-_thumb.png";
import meierToblerHero from "../imports/MT_-_Cover1.jpg";
import meierTobler1 from "../imports/MT_1.jpg";
import meierTobler2 from "../imports/MT_2.jpg";
import kidsappThumb from "../imports/VUkids-thumb.png";
import kidsappHero from "../imports/VUkids-hero.jpg";
import kidsapp1 from "../imports/VUkids1.jpg";
import virginKidsThumb from "../imports/virgin_kids_-_thumb-1.png";
import virginKidsHero from "../imports/VM kids 0.png";
import virginKids1 from "../imports/VM kids 1.png";
import virginKids2 from "../imports/VM kids 2.png";
import twentyMinThumb from "../imports/20_min_-_thumb.jpg";
import twentyMinHero from "../imports/20min_1.jpg";
import twentyMin2 from "../imports/20min_2.jpg";
import twentyMin3 from "../imports/20min_3.jpg";
import twentyMin4 from "../imports/20min_4.jpg";
import twentyMin5 from "../imports/20min_5.jpg";
import virginStoreThumb from "../imports/virgin_store_-_thumb-1.png";
import virginStoreHero from "../imports/VMstore1.png";
import virginStore1 from "../imports/VMstore2.png";
import virginStore2 from "../imports/VMstore3.png";
import virginStore3 from "../imports/VMstore4.png";
import weatherAlarmThumb from "../imports/weather_alarm_-_thumb.jpg";
import weatherAlarmHero from "../imports/weather_alarm_-_thumb.jpg";
import weatherAlarm1 from "../imports/WA-1.jpg";
import weatherAlarm2 from "../imports/WA-2.jpg";
import weatherAlarm3 from "../imports/WA-3.jpg";
import weatherAlarm4 from "../imports/WA-4.png";
import zolokalThumb from "../imports/zolokal-thumb.png";
import zolokalHero from "../imports/zolokal-thumb.png";
import zolokal1 from "../imports/zolokal1.jpg";

const GLOBAL_CSS = `
  @keyframes orb-a {
    0%   { transform: translate(0px, 0px) scale(1);    filter: hue-rotate(0deg)   brightness(1); }
    33%  { transform: translate(-60px, -40px) scale(1.08); filter: hue-rotate(40deg)  brightness(1.15); }
    66%  { transform: translate(40px, 60px) scale(0.94);  filter: hue-rotate(-20deg) brightness(0.88); }
    100% { transform: translate(0px, 0px) scale(1);    filter: hue-rotate(0deg)   brightness(1); }
  }
  @keyframes orb-b {
    0%   { transform: translate(0px, 0px) scale(1);     filter: hue-rotate(0deg)   brightness(1); }
    33%  { transform: translate(50px, 30px) scale(0.92);  filter: hue-rotate(-35deg) brightness(0.9); }
    66%  { transform: translate(-30px, -50px) scale(1.06); filter: hue-rotate(50deg)  brightness(1.12); }
    100% { transform: translate(0px, 0px) scale(1);     filter: hue-rotate(0deg)   brightness(1); }
  }
  @keyframes orb-c {
    0%   { transform: translate(0px, 0px);   filter: hue-rotate(0deg)  brightness(1); }
    50%  { transform: translate(30px, -40px); filter: hue-rotate(60deg) brightness(1.2); }
    100% { transform: translate(0px, 0px);   filter: hue-rotate(0deg)  brightness(1); }
  }
  @keyframes orb-d {
    0%   { transform: translate(0px, 0px) scale(1);    opacity: 0.08; }
    40%  { transform: translate(-20px, 30px) scale(1.1); opacity: 0.14; }
    70%  { transform: translate(25px, -15px) scale(0.93); opacity: 0.06; }
    100% { transform: translate(0px, 0px) scale(1);    opacity: 0.08; }
  }
  @keyframes sweep {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  @keyframes bg-breathe {
    0%, 100% { opacity: 0.55; }
    50%       { opacity: 0.72; }
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes line-in {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }
  html { scroll-behavior: smooth; }
  ::-webkit-scrollbar { display: none; }
  * { scrollbar-width: none; }
  .font-display { font-family: 'Barlow Condensed', sans-serif; }
  .font-body    { font-family: 'DM Sans', sans-serif; }
  .font-mono    { font-family: 'JetBrains Mono', monospace; }
  .noise::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 1;
  }
  .card-img { transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
  .project-card:hover .card-img { transform: scale(1.06); }
  .glass-overlay {
    background: linear-gradient(to top, rgba(6,6,10,0.95) 0%, rgba(6,6,10,0.4) 50%, transparent 100%);
    transition: opacity 0.4s ease;
  }
  .project-card .glass-overlay { opacity: 0.6; }
  .project-card:hover .glass-overlay { opacity: 1; }
  .card-meta {
    transform: translateY(8px);
    transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s ease;
    opacity: 0.7;
  }
  .project-card:hover .card-meta { transform: translateY(0); opacity: 1; }
  .accent-line {
    transform-origin: left;
    animation: line-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }
  .contact-input {
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    color: inherit;
    outline: none;
    width: 100%;
    font-family: 'DM Sans', sans-serif;
    transition: border-color 0.2s ease;
  }
  .contact-input:focus {
    border-color: rgba(123,92,240,0.6);
  }
  .contact-input::placeholder {
    color: rgba(240,237,230,0.3);
  }
`;

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  role: string;
  tags: string[];
  cover: string;
  heroImage?: string;
  detailCategory?: string;
  images: string[];
  overview: string;
  accentColor: string;
}

const PROJECTS: Project[] = [
  {
    id: "ddrobotec",
    title: "DDROBOTEC",
    subtitle: "IoT Fitness Companion App",
    category: "Product Design",
    year: "2024",
    client: "DDROBOTEC AG",
    role: "Lead Product Designer",
    tags: ["iOS", "IoT", "Health Tech", "Sports"],
    cover: ddrobotecThumb,
    heroImage: ddrobotecHero,
    images: [ddrobotec1, ddrobotec2],
    overview:
      "Smart resistance training, precision diagnostics, and digital gaming for optimal health and performance – ddrobotec® all in one solution. ddrobotec® is a technology brand committed to providing ground-breaking, personalized and data-driven health and sports tech to a worldwide customer base. Made in Switzerland.",
    accentColor: "#7B5CF0",
  },
  {
    id: "sunrise",
    title: "SUNRISE",
    subtitle: "Leading telco service",
    category: "Multi-service",
    year: "2022–2026",
    client: "Sunrise AG",
    role: "UX/UI Designer",
    tags: ["Telco", "E-Commerce", "Campaigns", "Multi-channel"],
    cover: sunriseThumb,
    heroImage: sunriseHero,
    images: [sunrise2, sunrise3, sunrise5],
    overview:
      "Sunrise is Switzerland's leading challenger, with a strong number two position in the Swiss telecommunications market. My key role was looking after the aesthetic side of SALES department, their complex eco system, including various campaigns in partnership with Apple, Samsung, Netflix, SwissSki, SkySPORT, CANAL+ and many more.\n\nIn this role, I focused on the iterative evolution of digital products through continuous optimization and UX enhancements, ensuring every design refinement was backed by result validation and improved conversion rates. I served as a strategic bridge between the brand team, developers, and testers to maintain rigorous brand consistency across diverse sale channels while managing complex partner guidelines. By balancing technical feasibility with brand standards, I navigated stakeholder expectations to deliver high-fidelity outcomes that were as functional as they were visually cohesive.",
    accentColor: "#F5A623",
  },
  {
    id: "meier-tobler",
    title: "MEIER TOBLER",
    subtitle: "IoT Heating Control App",
    category: "Product Design",
    year: "2022",
    client: "Meier Tobler AG",
    role: "Lead Designer",
    tags: ["IoT", "HVAC", "Mobile App", "Multi-persona"],
    cover: meierToblerThumb,
    heroImage: meierToblerHero,
    detailCategory: "Mobile App",
    images: [meierTobler1, meierTobler2],
    overview:
      "Embark on a journey of comfort with SmartGuard 2.0 and SmartComfort by Meier Tobler. Our innovative app development caters to diverse user personas in the heating industry, including homeowners, property managers, and both internal and external heating installers. From cozy warmth to efficient management, our tailored solutions redefine comfort and control in heating installation and usage.",
    accentColor: "#4ECDC4",
  },
  {
    id: "interactive-discovery",
    title: "DISCOVERY",
    subtitle: "Gamified Kids App",
    category: "Kids UX",
    year: "2026",
    client: "Discovery Kids",
    role: "Lead Product Designer",
    tags: ["OTT", "Gamification", "Children", "Accessibility"],
    cover: kidsappThumb,
    heroImage: kidsappHero,
    images: [kidsapp1],
    overview:
      "Discovery challenged us to reimagine how children aged 4–10 discover and engage with educational content. We built a gamified ecosystem where watching unlocks achievements, exploration is rewarded, and parents have full transparency — without the dark patterns common in kids' apps. The experience earned a 91% parent approval rating in usability testing.",
    accentColor: "#FF6B6B",
  },
  {
    id: "virgin-tv-kids",
    title: "VIRGIN TV KIDS",
    subtitle: "Children's Entertainment",
    category: "Mobile App",
    year: "2019",
    client: "Virgin Media",
    role: "Senior UX Designer",
    tags: ["Android", "IOS", "Children", "Parental Controls"],
    cover: virginKidsThumb,
    heroImage: virginKidsHero,
    images: [virginKids1, virginKids2],
    overview:
      "Virgin TV Kids required rethinking entertainment for young audiences in the living room context. Working within the constraints of 10-foot UI design and remote control navigation, we built an experience that feels instantly magical to children — with wayfinding so intuitive even 4-year-olds navigate independently — while giving parents confidence through robust parental controls.",
    accentColor: "#FF6B35",
  },
  {
    id: "20-minuten",
    title: "20 MINUTEN TV",
    subtitle: "Cross-platform News Streaming",
    category: "Media Design",
    year: "2026",
    client: "TX Group",
    role: "Lead Product Designer",
    tags: ["Streaming", "News", "Multi-platform", "Live"],
    cover: twentyMinThumb,
    heroImage: twentyMinHero,
    images: [twentyMin2, twentyMin3, twentyMin4, twentyMin5],
    overview:
      "20 Minuten TV transforms Switzerland's most-read free newspaper into a premium streaming experience across phone, tablet, and 75-inch smart TV. We designed a unified design system that adapts across 4 screen sizes while maintaining editorial urgency — live tickers, breaking alerts, and long-form documentary content sharing one coherent visual language.",
    accentColor: "#E63946",
  },
  {
    id: "virgin-media-store",
    title: "VIRGIN STORE",
    subtitle: "Digital Entertainment Marketplace",
    category: "E-Commerce",
    year: "2018",
    client: "Virgin Media",
    role: "UX Designer",
    tags: ["E-Commerce", "TV", "Transactional", "Recommendation"],
    cover: virginStoreThumb,
    heroImage: virginStoreHero,
    images: [virginStore1, virginStore2, virginStore3],
    overview:
      "Virgin Media Store is the digital marketplace for buying and renting movies and TV shows. We redesigned the complete purchase experience — from content discovery through post-purchase — reducing checkout abandonment by 31% while building a recommendation engine UI that surfaces the right title at the right moment.",
    accentColor: "#C77DFF",
  },
  {
    id: "weather-alarm",
    title: "WEATHER ALARM",
    subtitle: "Smart App",
    category: "Product Design",
    year: "2024",
    client: "Weather Alarm",
    role: "Senior Product Designer",
    tags: ["Alarm", "Location", "B2C", "Weather"],
    cover: weatherAlarmThumb,
    heroImage: weatherAlarmHero,
    images: [weatherAlarm1, weatherAlarm2, weatherAlarm3, weatherAlarm4],
    overview:
      "The multiple award winning Weather-Alarm app is Switzerland's top choice for weather updates, boasting over 2M downloads and a thriving global user community. Its USP is to reliably warn of adverse weather conditions such as hail, thunderstorms and more, aiding users in safeguarding themselves, loved ones, and property.",
    accentColor: "#4CC9F0",
  },
  {
    id: "zolokal",
    title: "ZOLOKAL",
    subtitle: "Online Marketplace",
    category: "E-Commerce",
    year: "2018",
    client: "Zolokal",
    role: "Web Designer",
    tags: ["Clothing", "E-Commerce", "Mobile", "Catalog"],
    cover: zolokalThumb,
    heroImage: zolokalHero,
    images: [zolokal1],
    overview:
      "Zolokal is a web-based local marketplace connecting nearby shops with consumers through a simple, accessible e-commerce experience. I worked on the project from brand concept and UX exploration through to Ul design and responsive layouts, defining both structure and interface direction. The design approach was inspired by clean, functional Danish design principles - focusing on clarity, minimalism, and usability - while exploring how to reduce friction for small businesses entering online commerce ano create a scalable, user-friendly marketplace experience.",
    accentColor: "#06D6A0",
  },
];

const TICKER_ITEMS = [
  "Product Design", "UX Strategy", "Design Systems", "Mobile Apps",
  "TV Platforms", "IoT Interfaces", "E-Commerce", "Motion Design",
  "User Research", "Prototyping", "Enterprise UX", "Kids Experience",
];

// ─── Contact Modal ─────────────────────────────────────────────────────────────
function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/fnakic@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio inquiry from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      style={{ background: "rgba(6,6,10,0.85)", backdropFilter: "blur(20px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full max-w-lg"
        style={{ background: "oklch(0.11 0.01 268)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 pb-6">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-2">
              Let's talk
            </p>
            <h2
              className="font-display font-black text-foreground tracking-tighter leading-none"
              style={{ fontSize: "2.4rem" }}
            >
              GET IN TOUCH
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 mt-1"
          >
            <X size={18} />
          </button>
        </div>

        {/* Accent line */}
        <div className="mx-8 h-px mb-8" style={{ background: "rgba(123,92,240,0.4)" }} />

        {status === "sent" ? (
          <div className="px-8 pb-10 flex flex-col items-center text-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(123,92,240,0.2)", border: "1px solid rgba(123,92,240,0.4)" }}
            >
              <Check size={24} style={{ color: "#7B5CF0" }} />
            </div>
            <p className="font-body text-foreground font-medium">Message sent.</p>
            <p className="font-body text-sm text-muted-foreground">
              {"I'll get back to you as soon as possible."}
            </p>
            <button
              onClick={onClose}
              className="mt-4 font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="contact-input px-4 py-3 text-sm"
                />
              </div>
              <div>
                <label className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="contact-input px-4 py-3 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground block mb-2">
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project, timeline, and what you're looking for..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="contact-input px-4 py-3 text-sm resize-none"
              />
            </div>

            {status === "error" && (
              <p className="font-mono text-[10px] tracking-[0.15em] uppercase" style={{ color: "#E63946" }}>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase py-4 mt-2 transition-all duration-300 disabled:opacity-50"
              style={{ background: "#7B5CF0", color: "#fff" }}
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <span>Send Message</span>
                  <Send size={13} />
                </>
              )}
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Project Card ──────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  onClick,
  className = "",
  imageLoading = "lazy",
}: {
  project: Project;
  onClick: () => void;
  className?: string;
  imageLoading?: "lazy" | "eager";
}) {
  return (
    <button
      onClick={onClick}
      data-project-id={project.id}
      className={`project-card relative overflow-hidden bg-card cursor-pointer group block w-full text-left focus:outline-none ${className}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="card-img absolute inset-0 w-full h-full object-cover"
          loading={imageLoading}
          fetchPriority={imageLoading === "eager" ? "high" : undefined}
          decoding="async"
        />
      </div>
      <div className="glass-overlay absolute inset-0" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 30% 80%, ${project.accentColor}66 0%, transparent 65%)` }}
      />
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <div className="card-meta">
          <div className="flex items-center gap-3 mb-2">
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-0.5"
              style={{ color: project.accentColor, border: `1px solid ${project.accentColor}55`, background: `${project.accentColor}15` }}
            >
              {project.category}
            </span>
            <span className="font-mono text-[10px] tracking-[0.15em] text-foreground/40">{project.year}</span>
          </div>
          <h3 className="font-display font-black text-foreground leading-none mb-1" style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.1rem)", letterSpacing: "0.03em" }}>
            {project.title}
          </h3>
          <p className="font-body text-sm text-foreground/60 font-light leading-tight">{project.subtitle}</p>
        </div>
        <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0">
          <div className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: project.accentColor }}>
            <ArrowUpRight size={16} className="text-white" />
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── Project Detail ────────────────────────────────────────────────────────────
function ProjectDetail({ project, onClose }: { project: Project; onClose: () => void }) {
  const currentIdx = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-background overflow-y-auto"
    >
      {/* Fixed nav */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(6,6,10,0.95) 0%, transparent 100%)" }}
      >
        <button
          onClick={onClose}
          className="flex items-center gap-2 font-mono text-xs tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-200 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-200" />
          All Work
        </button>
        <span className="font-display font-black text-sm tracking-[0.2em] uppercase text-foreground/30">{project.title}</span>
        <div className="w-20" />
      </div>

      {/* Hero */}
      <div className="relative h-[90vh] overflow-hidden">
        <img
          src={project.heroImage ?? project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(6,6,10,0.2) 0%, rgba(6,6,10,0.15) 50%, rgba(6,6,10,0.88) 100%)" }} />
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 20% 80%, ${project.accentColor}44 0%, transparent 55%)` }} />

        <div className="absolute bottom-0 left-0 right-0 px-8 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 accent-line" style={{ backgroundColor: project.accentColor }} />
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase" style={{ color: project.accentColor }}>
                {project.detailCategory ?? project.category}
              </span>
            </div>
            <h1
              className="font-display font-black text-foreground leading-none tracking-tighter mb-3"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "0.01em" }}
            >
              {project.title}
            </h1>
            <p className="font-body font-light text-foreground/70 max-w-2xl" style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)" }}>
              {project.subtitle}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 right-8"
        >
          <ChevronDown size={18} className="text-foreground/30 animate-bounce" />
        </motion.div>
      </div>

      {/* Metadata */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="px-8 py-10 border-b border-border"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Client", value: project.client },
            { label: "Year", value: project.year },
            { label: "Role", value: project.role },
            { label: "Category", value: project.detailCategory ?? project.category },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1.5">{item.label}</p>
              <p className="font-body text-foreground font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="px-8 py-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">Overview</p>
          </div>
          <div className="md:col-span-9">
            <div className="font-body font-light text-foreground/80 leading-relaxed flex flex-col gap-5" style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.35rem)" }}>
              {project.overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-border text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full-width images — no gap, Behance flow */}
      <div>
        {project.images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full overflow-hidden bg-card"
          >
            <img
              src={img}
              alt={`${project.title} — view ${i + 1}`}
              className="w-full block"
              style={{ height: "auto" }}
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        ))}
      </div>

      {/* Next project */}
      <div className="px-8 py-24 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-8">Next Project</p>
          <button
            className="group flex items-end gap-6 hover:opacity-80 transition-opacity duration-300 text-left"
            onClick={() => {
              onClose();
              setTimeout(() => {
                const card = document.querySelector(`[data-project-id="${nextProject.id}"]`) as HTMLElement;
                card?.click();
              }, 600);
            }}
          >
            <h2
              className="font-display font-black text-foreground leading-none tracking-tighter"
              style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", letterSpacing: "0.01em" }}
            >
              {nextProject.title}
            </h2>
            <div
              className="mb-2 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:-translate-y-1 transition-transform duration-300"
              style={{ background: nextProject.accentColor }}
            >
              <ArrowUpRight size={20} className="text-white" />
            </div>
          </button>
          <p className="font-body text-muted-foreground mt-3 font-light">{nextProject.subtitle}</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Nav ───────────────────────────────────────────────────────────────────────
function Nav({ onLogoClick, onContactClick }: { onLogoClick: () => void; onContactClick: () => void }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(6,6,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <button onClick={onLogoClick} className="font-display font-black text-foreground leading-none text-lg hover:opacity-70 transition-opacity" style={{ letterSpacing: "0.12em" }}>
        SILVERTONGUE
      </button>
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Work", href: "#work" },
          { label: "About", href: "#about" },
        ].map((item) => (
          <a key={item.label} href={item.href} className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200">
            {item.label}
          </a>
        ))}
        <button
          onClick={onContactClick}
          className="font-mono text-[11px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Contact
        </button>
      </div>
      <button
        onClick={onContactClick}
        className="font-mono text-[11px] tracking-[0.15em] uppercase text-foreground/50 hover:text-foreground transition-colors duration-200 hidden md:block"
      >
        Available for work →
      </button>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero({ onWorkClick }: { onWorkClick: () => void }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden noise">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Slow conic sweep — adds a faint rotational depth */}
        <div
          className="absolute rounded-full"
          style={{
            width: "140vw", height: "140vw",
            top: "50%", left: "50%",
            marginTop: "-70vw", marginLeft: "-70vw",
            background: "conic-gradient(from 0deg, transparent 0%, rgba(123,92,240,0.04) 20%, transparent 40%, rgba(76,201,240,0.03) 60%, transparent 80%, rgba(199,125,255,0.04) 95%, transparent 100%)",
            animation: "sweep 60s linear infinite",
          }}
        />

        {/* Base ambient glow — breathes slowly */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 30% 60%, rgba(123,92,240,0.12) 0%, transparent 70%)",
            animation: "bg-breathe 8s ease-in-out infinite",
          }}
        />

        {/* Orb A — violet, top-left, hue-drifting */}
        <div
          className="absolute rounded-full blur-[110px]"
          style={{
            width: "52vw", height: "52vw", top: "-12%", left: "-8%",
            background: "radial-gradient(circle, #7B5CF0 0%, #4338CA 55%, transparent 100%)",
            opacity: 0.22,
            animation: "orb-a 20s ease-in-out infinite",
            transform: `translate(${mouse.x * 18}px, ${mouse.y * 12}px)`,
            transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Orb B — magenta/violet, bottom-right, counter-phase */}
        <div
          className="absolute rounded-full blur-[95px]"
          style={{
            width: "44vw", height: "44vw", bottom: "-4%", right: "-4%",
            background: "radial-gradient(circle, #C77DFF 0%, #7B5CF0 55%, transparent 100%)",
            opacity: 0.18,
            animation: "orb-b 25s ease-in-out infinite",
            transform: `translate(${mouse.x * -12}px, ${mouse.y * -8}px)`,
            transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Orb C — cyan, mid-right, faster */}
        <div
          className="absolute rounded-full blur-[75px]"
          style={{
            width: "28vw", height: "28vw", top: "28%", right: "18%",
            background: "radial-gradient(circle, #4CC9F0 0%, rgba(76,201,240,0.3) 50%, transparent 100%)",
            opacity: 0.16,
            animation: "orb-c 15s ease-in-out infinite",
            transform: `translate(${mouse.x * 8}px, ${mouse.y * 10}px)`,
            transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />

        {/* Orb D — deep indigo accent, center-bottom, very slow */}
        <div
          className="absolute rounded-full blur-[130px]"
          style={{
            width: "60vw", height: "40vw", bottom: "-10%", left: "20%",
            background: "radial-gradient(ellipse, #3730A3 0%, transparent 70%)",
            animation: "orb-d 30s ease-in-out infinite",
            transform: `translate(${mouse.x * 5}px, ${mouse.y * 4}px)`,
            transition: "transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)",
          }}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-10 pb-10 pt-28">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-px w-10 bg-accent opacity-70" />
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            UI/UX — Portfolio 2026
          </span>
        </motion.div>

        {/* Hero display text — wide letter spacing */}
        {[
          { word: "SENIOR", outline: false, delay: 0.3 },
          { word: "PRODUCT", outline: true, delay: 0.42 },
          { word: "DESIGNER.", outline: false, delay: 0.54 },
        ].map(({ word, outline, delay }) => (
          <div key={word} className="overflow-hidden">
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="font-display font-black leading-none"
                style={{
                  fontSize: "clamp(4.5rem, 13vw, 14rem)",
                  lineHeight: 0.88,
                  letterSpacing: "0.02em",
                  color: outline ? "transparent" : undefined,
                  WebkitTextStroke: outline ? "1px rgba(240,237,230,0.35)" : undefined,
                  ...(outline ? {} : { color: "var(--foreground)" }),
                }}
              >
                {word}
              </h1>
            </motion.div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-col md:flex-row md:items-end gap-6 md:gap-0 md:justify-between"
        >
          <p className="font-body font-light text-muted-foreground max-w-sm" style={{ fontSize: "1.05rem", lineHeight: 1.65 }}>
            Working across complex digital ecosystems — apps, platforms, streaming services, and interactive systems.
          </p>
          <button
            onClick={onWorkClick}
            className="group flex items-center gap-3 font-body font-medium text-foreground self-start md:self-auto hover:gap-5 transition-all duration-300"
          >
            <span className="text-sm tracking-wide">View Selected Work</span>
            <span className="w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ background: "#7B5CF0" }}>
              <ChevronDown size={16} className="text-white" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="relative z-10 border-t border-border px-6 md:px-10 py-5 flex items-center gap-10 overflow-hidden"
      >
        {[
          { n: "15+", label: "Years Experience" },
          { n: "60+", label: "Products Shipped" },
          { n: "10+", label: "Team Integrations" },
        ].map((stat) => (
          <div key={stat.n} className="flex items-baseline gap-2.5">
            <span className="font-display font-black text-2xl text-foreground tracking-tight">{stat.n}</span>
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{stat.label}</span>
          </div>
        ))}
        <div className="ml-auto overflow-hidden relative flex-1 max-w-xs hidden lg:block">
          <div className="flex gap-8 whitespace-nowrap" style={{ animation: "ticker 20s linear infinite" }}>
            {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
              <span key={i} className="font-mono text-[10px] tracking-[0.18em] uppercase text-muted-foreground/50 flex-shrink-0">
                {item} ·
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// ─── Projects Grid ─────────────────────────────────────────────────────────────
function ProjectsGrid({ onProjectClick }: { onProjectClick: (p: Project) => void }) {
  return (
    <section className="px-3 pb-3 pt-1">
      <div className="flex items-center gap-4 px-3 py-6">
        <div className="h-px w-8 bg-accent opacity-60" />
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">Selected Work</span>
        <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground/40">— 2017–2024</span>
      </div>

      {/* Row 1 — 6/6 */}
      <div className="grid grid-cols-12 gap-1 mb-1">
        <div className="col-span-12 lg:col-span-6 h-[500px]">
          <ProjectCard project={PROJECTS[0]} onClick={() => onProjectClick(PROJECTS[0])} className="h-full" imageLoading="eager" />
        </div>
        <div className="col-span-12 lg:col-span-6 h-[500px]">
          <ProjectCard project={PROJECTS[1]} onClick={() => onProjectClick(PROJECTS[1])} className="h-full" />
        </div>
      </div>

      {/* Row 2 — 4/4/4 */}
      <div className="grid grid-cols-12 gap-1 mb-1">
        <div className="col-span-12 md:col-span-4 h-[440px]">
          <ProjectCard project={PROJECTS[2]} onClick={() => onProjectClick(PROJECTS[2])} className="h-full" />
        </div>
        <div className="col-span-12 md:col-span-4 h-[440px]">
          <ProjectCard project={PROJECTS[3]} onClick={() => onProjectClick(PROJECTS[3])} className="h-full" />
        </div>
        <div className="col-span-12 md:col-span-4 h-[440px]">
          <ProjectCard project={PROJECTS[4]} onClick={() => onProjectClick(PROJECTS[4])} className="h-full" />
        </div>
      </div>

      {/* Row 3 — 5/7 */}
      <div className="grid grid-cols-12 gap-1 mb-1">
        <div className="col-span-12 lg:col-span-5 h-[460px]">
          <ProjectCard project={PROJECTS[5]} onClick={() => onProjectClick(PROJECTS[5])} className="h-full" />
        </div>
        <div className="col-span-12 lg:col-span-7 h-[460px]">
          <ProjectCard project={PROJECTS[6]} onClick={() => onProjectClick(PROJECTS[6])} className="h-full" />
        </div>
      </div>

      {/* Row 4 — 7/5 (reversed tension) */}
      <div className="grid grid-cols-12 gap-1">
        <div className="col-span-12 lg:col-span-7 h-[500px]">
          <ProjectCard project={PROJECTS[7]} onClick={() => onProjectClick(PROJECTS[7])} className="h-full" />
        </div>
        <div className="col-span-12 lg:col-span-5 h-[500px]">
          <ProjectCard project={PROJECTS[8]} onClick={() => onProjectClick(PROJECTS[8])} className="h-full" />
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section id="about" className="px-6 md:px-10 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-muted-foreground">About</span>
          </div>
          <h2
            className="font-display font-black text-foreground tracking-tighter leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.01em" }}
          >
            CRAFTING<br />
            <span style={{ WebkitTextStroke: "1px rgba(240,237,230,0.35)", color: "transparent" }}>MEANINGFUL</span><br />
            PRODUCTS.
          </h2>
        </div>
        <div className="md:col-span-8 flex flex-col justify-center gap-6">
          <p className="font-body font-light text-foreground/70 leading-relaxed" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)" }}>
            I am a Senior Lead Designer with a career focused on the intersection of high-fidelity visual design and complex product logic. My experience spans the full digital spectrum—from web and mobile to the specialized constraints of 10-foot UI for Smart TV.
            I specialize in creating polished, intuitive interfaces for global brands, ensuring that brand identity is maintained across every user state and device. While my core is in Visual and UI Design, I bring a strong strategic understanding of UX principles to ensure every interaction serves a clear project goal. <br /> <br />

            My Approach to Modern Design:
            Production-Ready UI: I focus on building clean, organized design assets that bridge the gap between creative intent and technical implementation. I am adept at working within and contributing to established design systems to ensure consistency at scale.
            Technical Partnership: I pride myself on a "developer-first" handoff process, collaborating closely with engineering teams to ensure visual precision is maintained from mock-up to the final live product. <br /> <br />

            AI-Enhanced Workflows: I am actively integrating modern, AI-assisted prototyping and deployment workflows into my process, allowing for faster iteration without sacrificing the human-centered quality and aesthetic polish that automated tools often miss.
            Strategic Oversight: Experienced in managing complex user flows and feature dependencies, I ensure that the visual direction aligns with broader product strategies and stakeholder expectations. <br /> <br />
            I thrive in collaborative, cross-functional environments where the goal is to turn sophisticated requirements into seamless, high-impact digital experiences.
          </p>
          <p className="font-body font-light text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.95rem, 1.2vw, 1.1rem)" }}>
            Based in Belgrade. Working with companies across Europe, Switzerland, the UK, and beyond. Currently available for senior design roles and strategic consulting engagements.
          </p>
          <div className="flex gap-4 pt-2">
            <button
              onClick={onContactClick}
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent px-5 py-3 border hover:opacity-70 transition-opacity duration-200"
              style={{ borderColor: "#7B5CF055", background: "#7B5CF015" }}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer({ onContactClick }: { onContactClick: () => void }) {
  return (
    <footer className="px-6 md:px-10 py-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <span className="font-display font-black text-foreground text-lg" style={{ letterSpacing: "0.12em" }}>SILVERTONGUE</span>
      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground">
        © 2026 — Senior Product Designer, Belgrade
      </span>
      <div className="flex items-center gap-6">
        {[
          { label: "Behance", href: "https://www.behance.net/FilipNakic" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/fnakic/" },
        ].map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={onContactClick}
          className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          Contact
        </button>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showContact, setShowContact] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = PROJECTS[0].cover;
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-body bg-background text-foreground min-h-screen">
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      <AnimatePresence>
        {showContact && <ContactModal key="contact" onClose={() => setShowContact(false)} />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ProjectDetail
            key={selectedProject.id}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Nav
              onLogoClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              onContactClick={() => setShowContact(true)}
            />
            <Hero onWorkClick={scrollToWork} />
            <div id="work" ref={workRef}>
              <ProjectsGrid onProjectClick={setSelectedProject} />
            </div>
            <About onContactClick={() => setShowContact(true)} />
            <Footer onContactClick={() => setShowContact(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
