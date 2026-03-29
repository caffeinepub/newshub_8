import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Code2,
  Cpu,
  ExternalLink,
  Film,
  Globe,
  Handshake,
  MapPin,
  Menu,
  MessageCircle,
  Network,
  Phone,
  Play,
  Radio,
  Shield,
  Star,
  TrendingUp,
  Tv,
  Users,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

const WHATSAPP_NUM = "01626173639";
const WHATSAPP_LINK = "https://wa.me/8801626173639";

const HERO_BG = "/assets/generated/hero-bg.dim_1920x1080.jpg";

function useScrolled(threshold = 60) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);
  return scrolled;
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const ease = 1 - (1 - progress) ** 3;
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

/** Padma wordmark */
function PadmaWordmark({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { main: "text-sm", sub: "text-[10px]" },
    md: { main: "text-2xl sm:text-3xl", sub: "text-xs sm:text-sm" },
    lg: {
      main: "text-3xl sm:text-4xl md:text-5xl",
      sub: "text-sm sm:text-base",
    },
  };
  const s = sizes[size];
  return (
    <div className="flex flex-col items-center leading-none">
      <span
        className={`font-display font-black tracking-tight text-primary ${s.main}`}
      >
        PADMA
      </span>
      <span
        className={`font-medium text-primary/70 tracking-widest uppercase ${s.sub}`}
      >
        Online Group
      </span>
    </div>
  );
}

/** Zibo wordmark */
function ZiboWordmark({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const sizes = {
    sm: { main: "text-sm", sub: "text-[10px]" },
    md: { main: "text-2xl sm:text-3xl", sub: "text-xs sm:text-sm" },
    lg: {
      main: "text-3xl sm:text-4xl md:text-5xl",
      sub: "text-sm sm:text-base",
    },
  };
  const s = sizes[size];
  return (
    <div className="flex flex-col items-center leading-none">
      <span
        className={`font-display font-black tracking-tight text-brand-orange ${s.main}`}
      >
        ZIBO
      </span>
      <span
        className={`font-medium text-brand-orange/70 tracking-widest uppercase ${s.sub}`}
      >
        Play
      </span>
    </div>
  );
}

function Navbar() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Partners", href: "#partners" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark shadow-[0_1px_0_0_oklch(0.22_0.04_252/0.6)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo wordmark */}
        <a
          href="#hero"
          className="flex items-center gap-3 group"
          data-ocid="nav.link"
        >
          <div className="flex items-center gap-2.5">
            <PadmaWordmark size="sm" />
            <span className="text-muted-foreground/40 font-light text-base">
              ×
            </span>
            <ZiboWordmark size="sm" />
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-white/5"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            <Button
              size="sm"
              className="rounded-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white shadow-[0_4px_20px_-4px_oklch(0.65_0.18_145/0.6)] font-semibold"
              data-ocid="nav.button"
            >
              <MessageCircle className="w-4 h-4 mr-1.5" />
              WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl glass text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-dark border-t border-white/5"
          >
            <nav className="max-w-screen-2xl mx-auto px-4 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground rounded-xl hover:bg-white/5 transition-colors"
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 pb-1">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <Button
                    className="w-full rounded-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white font-semibold"
                    data-ocid="nav.button"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp: {WHATSAPP_NUM}
                  </Button>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Cinematic background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${HERO_BG}')` }}
      />
      {/* Layered overlays */}
      <div className="absolute inset-0 bg-[oklch(0.06_0.02_252/0.82)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_252/0.3)] via-transparent to-[oklch(0.06_0.02_252/0.95)]" />
      {/* Atmospheric glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 bg-primary pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 bg-brand-orange pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 pt-20 sm:pt-24 max-w-screen-2xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <Badge className="glass border-white/20 text-white/80 text-xs sm:text-sm px-4 py-1.5 font-medium tracking-wide">
            🇧🇩 &nbsp; Strategic Partnership · Bangladesh
          </Badge>
        </motion.div>

        {/* Wordmark cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-8 sm:mb-10 flex-wrap"
        >
          <div className="glass rounded-2xl px-6 sm:px-10 py-4 sm:py-5 glow-blue">
            <PadmaWordmark size="lg" />
          </div>
          <span className="text-5xl sm:text-6xl md:text-7xl font-bold text-white/30 font-display">
            ×
          </span>
          <div className="glass rounded-2xl px-6 sm:px-10 py-4 sm:py-5 glow-orange">
            <ZiboWordmark size="lg" />
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display font-bold tracking-tight mb-6 sm:mb-8"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 8rem)",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
          }}
        >
          <span className="text-white">Powering</span>
          <br />
          <span className="text-gradient-hero">Bangladesh's</span>
          <br />
          <span className="text-white">Digital Future</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-white/60 mx-auto mb-10 sm:mb-12 max-w-xl sm:max-w-2xl lg:max-w-3xl"
          style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)", lineHeight: 1.6 }}
        >
          A landmark alliance between Bangladesh's premier IT powerhouse and its
          leading OTT streaming platform — forging the future of digital
          innovation and entertainment.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button
              size="lg"
              className="rounded-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white font-semibold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-[0_8px_32px_-4px_oklch(0.65_0.18_145/0.6)] hover:shadow-[0_8px_40px_-4px_oklch(0.65_0.18_145/0.8)] transition-all duration-300 hover:-translate-y-0.5 3xl:text-xl 3xl:px-12"
              data-ocid="hero.primary_button"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </a>
          <a href="#about">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full glass border-white/20 text-white hover:bg-white/10 font-semibold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg transition-all duration-300 hover:-translate-y-0.5 3xl:text-xl 3xl:px-12"
              data-ocid="hero.secondary_button"
            >
              Explore Partnership
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/30 animate-bounce" />
      </motion.div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: 10000, suffix: "+", label: "Clients Served" },
    { value: 100, suffix: "+", label: "IT Professionals" },
    { value: 1000, suffix: "+", label: "Content Titles" },
    { value: 5, suffix: "+", label: "Years of Excellence" },
  ];
  return (
    <section
      className="py-10 sm:py-14 border-y border-white/5"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.10 0.028 252) 0%, oklch(0.12 0.032 252) 100%)",
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div
                className="font-display font-bold text-foreground mb-1"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-16"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl 3xl:max-w-6xl mx-auto"
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
            About the Partnership
          </Badge>
          <h2
            className="font-display font-bold mb-8 text-foreground"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            A Partnership Built for
            <span className="text-gradient-blue"> Digital Excellence</span>
          </h2>
          <p
            className="text-muted-foreground leading-relaxed mb-6"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            Padma Online Group and Zibo Play have joined forces to create a
            transformative alliance in Bangladesh's digital landscape. This
            partnership unites cutting-edge IT expertise with a world-class
            entertainment streaming ecosystem — delivering unprecedented value
            to businesses and consumers alike across the nation.
          </p>
          <p
            className="text-muted-foreground leading-relaxed"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            Together, we leverage deep technological capabilities and a vast
            entertainment catalog to drive digital transformation, empower
            communities, and shape the future of connected life in Bangladesh.
          </p>
        </motion.div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mt-16 sm:mt-20">
          {[
            {
              icon: <Users className="w-7 h-7" />,
              label: "10,000+",
              sub: "Clients Served",
              color: "primary",
              glow: "glow-blue",
              bg: "bg-primary/10",
              text: "text-primary",
            },
            {
              icon: <Globe className="w-7 h-7" />,
              label: "Nationwide",
              sub: "Coverage in Bangladesh",
              color: "orange",
              glow: "glow-orange",
              bg: "bg-brand-orange/10",
              text: "text-brand-orange",
            },
            {
              icon: <Star className="w-7 h-7" />,
              label: "#1",
              sub: "IT & OTT Alliance in BD",
              color: "gold",
              glow: "glow-gold",
              bg: "bg-brand-gold/10",
              text: "text-brand-gold",
            },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`glass rounded-3xl p-6 sm:p-8 ${stat.glow} flex flex-col items-center text-center gap-3`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.text}`}
              >
                {stat.icon}
              </div>
              <div
                className={`font-display font-bold text-3xl sm:text-4xl ${stat.text}`}
                style={{ letterSpacing: "-0.03em" }}
              >
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PadmaSection() {
  const services = [
    {
      icon: <Code2 className="w-5 h-5" />,
      title: "Web Development",
      desc: "Custom websites and web applications built with cutting-edge technologies.",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Software Solutions",
      desc: "Enterprise-grade software tailored to your business requirements.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Digital Marketing",
      desc: "Data-driven marketing strategies to grow your brand online.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "IT Consulting",
      desc: "Expert guidance to align technology with your business goals.",
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Network Solutions",
      desc: "Robust infrastructure design, deployment and management.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Cloud Services",
      desc: "Scalable cloud architecture and migration services.",
    },
  ];

  return (
    <section
      id="partners"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-16"
      style={{ background: "oklch(0.10 0.028 252)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Split header */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16 xl:gap-20 mb-14 sm:mb-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Badge className="mb-5 bg-primary/20 text-primary border-primary/30 px-4 py-1.5">
              Partner Profile
            </Badge>
            <div className="glass rounded-2xl px-6 py-4 inline-flex mb-6 glow-blue">
              <PadmaWordmark size="md" />
            </div>
            <h2
              className="font-display font-bold mb-3 text-foreground"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Padma Online Group
            </h2>
            <p className="text-gradient-blue font-bold text-lg sm:text-xl mb-5">
              Bangladesh's Biggest IT Expert Company
            </p>
            <p
              className="text-muted-foreground leading-relaxed mb-4"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              Padma Online Group stands as the undisputed leader in Bangladesh's
              digital IT sector. With years of excellence and a team of elite IT
              experts, we deliver transformative technology solutions that power
              businesses, government institutions, and startups across the
              country.
            </p>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              From complex enterprise software to comprehensive digital
              marketing campaigns, our full-spectrum services ensure every
              client achieves their digital ambitions with precision,
              reliability, and innovation.
            </p>
          </motion.div>
          {/* Right: highlights card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-80 xl:w-96 flex-shrink-0"
          >
            <div className="glass rounded-3xl p-6 sm:p-8 border border-primary/20 glow-blue">
              <h3 className="font-display font-bold text-lg sm:text-xl mb-5 text-foreground">
                Why Choose Padma
              </h3>
              <ul className="space-y-3.5">
                {[
                  "Industry-leading IT expertise",
                  "100+ certified professionals",
                  "Proven track record since founding",
                  "End-to-end digital solutions",
                  "24/7 dedicated technical support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Services grid */}
        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-primary/40 hover:glow-blue group transition-all duration-300 cursor-default h-full"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/25 transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-foreground">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZiboSection() {
  const features = [
    {
      icon: <Film className="w-5 h-5" />,
      title: "Movies & Series",
      desc: "Thousands of local and international titles in HD quality.",
    },
    {
      icon: <Tv className="w-5 h-5" />,
      title: "Live TV",
      desc: "Stream your favourite channels live, anywhere, anytime.",
    },
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Original Content",
      desc: "Exclusive Zibo Originals — stories only available on our platform.",
    },
    {
      icon: <Play className="w-5 h-5" />,
      title: "On-Demand Streaming",
      desc: "Watch what you want, when you want, across all your devices.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Family Profiles",
      desc: "Create separate profiles for every family member.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Ultra HD Quality",
      desc: "4K streaming with Dolby audio for the ultimate experience.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-16">
      <div className="max-w-screen-2xl mx-auto">
        {/* Split header (reversed) */}
        <div className="flex flex-col lg:flex-row-reverse items-start gap-10 lg:gap-16 xl:gap-20 mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <Badge className="mb-5 bg-brand-orange/20 text-brand-orange border-brand-orange/30 px-4 py-1.5">
              Partner Profile
            </Badge>
            <div className="glass rounded-2xl px-6 py-4 inline-flex mb-6 glow-orange">
              <ZiboWordmark size="md" />
            </div>
            <h2
              className="font-display font-bold mb-3 text-foreground"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.8rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
              }}
            >
              Zibo Play
            </h2>
            <p className="text-gradient-orange font-bold text-lg sm:text-xl mb-5">
              Bangladesh's Premier OTT Streaming Platform
            </p>
            <p
              className="text-muted-foreground leading-relaxed mb-4"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              Zibo Play is revolutionising entertainment in Bangladesh as the
              country's leading Over-The-Top (OTT) streaming platform. We
              deliver a world-class streaming experience with an extensive
              library of movies, TV series, live channels, and exclusive
              original productions.
            </p>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)" }}
            >
              Designed for the modern Bangladeshi audience, Zibo Play combines
              local cultural content with international blockbusters — making
              premium entertainment accessible to every screen in the nation.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-80 xl:w-96 flex-shrink-0"
          >
            <div className="glass rounded-3xl p-6 sm:p-8 border border-brand-orange/20 glow-orange">
              <h3 className="font-display font-bold text-lg sm:text-xl mb-5 text-foreground">
                Platform Highlights
              </h3>
              <ul className="space-y-3.5">
                {[
                  "OTT market leader in Bangladesh",
                  "1000+ titles on-demand",
                  "Exclusive original productions",
                  "Multi-device seamless streaming",
                  "Affordable subscription plans",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base"
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="glass rounded-2xl p-5 sm:p-6 border border-white/5 hover:border-brand-orange/40 group transition-all duration-300 cursor-default h-full"
                data-ocid={`services.item.${i + 1}`}
              >
                <div className="w-11 h-11 rounded-xl bg-brand-orange/15 flex items-center justify-center text-brand-orange mb-4 group-hover:bg-brand-orange/25 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg mb-2 text-foreground">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Unified Digital Ecosystem",
      desc: "One partnership that covers both enterprise IT solutions and consumer entertainment — a complete digital ecosystem for Bangladesh.",
      accent: "primary",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technology-Powered Entertainment",
      desc: "Padma's engineering expertise supercharges Zibo Play's infrastructure for seamless, high-performance streaming at scale.",
      accent: "accent",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Accelerated Growth",
      desc: "Combined market reach and shared resources drive rapid expansion, bringing digital services to every corner of Bangladesh.",
      accent: "gold",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted & Reliable",
      desc: "Both companies bring years of proven excellence, earning the trust of thousands of clients and millions of viewers.",
      accent: "primary",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community First",
      desc: "Together committed to empowering Bangladeshi communities through digital literacy, access, and world-class content.",
      accent: "orange",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards, Local Heart",
      desc: "International quality delivered with deep understanding of local culture, languages, and audience needs.",
      accent: "gold",
    },
  ];

  const accentStyles: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    primary: {
      bg: "bg-primary/15",
      text: "text-primary",
      border: "hover:border-primary/50",
    },
    accent: {
      bg: "bg-accent/15",
      text: "text-accent",
      border: "hover:border-accent/50",
    },
    gold: {
      bg: "bg-brand-gold/15",
      text: "text-brand-gold",
      border: "hover:border-brand-gold/50",
    },
    orange: {
      bg: "bg-brand-orange/15",
      text: "text-brand-orange",
      border: "hover:border-brand-orange/50",
    },
  };

  return (
    <section
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-16"
      style={{ background: "oklch(0.10 0.028 252)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <Badge className="mb-5 bg-brand-gold/20 text-brand-gold border-brand-gold/30 px-4 py-1.5">
            Why This Collaboration
          </Badge>
          <h2
            className="font-display font-bold text-foreground"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Partnership <span className="text-gradient-blue">Benefits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b, i) => {
            const styles = accentStyles[b.accent];
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`glass rounded-3xl p-6 sm:p-8 border border-white/5 ${styles.border} transition-all duration-300 cursor-default h-full`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${styles.bg} ${styles.text}`}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-foreground">
                    {b.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-10 xl:px-16"
    >
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14"
        >
          <Badge className="mb-5 bg-[oklch(0.65_0.18_145/0.2)] text-[oklch(0.65_0.18_145)] border-[oklch(0.65_0.18_145/0.3)] px-4 py-1.5">
            Get In Touch
          </Badge>
          <h2
            className="font-display font-bold text-foreground mb-4"
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Contact{" "}
            <span
              className="text-[oklch(0.65_0.18_145)]"
              style={{ fontStyle: "italic" }}
            >
              Us
            </span>
          </h2>
          <p
            className="text-muted-foreground"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.2rem)" }}
          >
            Ready to partner, collaborate, or learn more? Reach out directly via
            WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-xl 3xl:max-w-2xl mx-auto"
        >
          <div
            className="glass rounded-4xl p-8 sm:p-12 lg:p-14 text-center"
            style={{
              boxShadow:
                "0 0 80px -20px oklch(0.65 0.18 145 / 0.3), 0 8px 40px 0 rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[oklch(0.65_0.18_145/0.15)] flex items-center justify-center mx-auto mb-6"
              style={{ boxShadow: "0 0 40px -8px oklch(0.65 0.18 145 / 0.5)" }}
            >
              <MessageCircle className="w-10 h-10 sm:w-12 sm:h-12 text-[oklch(0.65_0.18_145)]" />
            </div>
            <div
              className="font-display font-bold text-foreground mb-1"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              {WHATSAPP_NUM}
            </div>
            <div className="text-muted-foreground mb-8 text-sm sm:text-base">
              WhatsApp · Available for inquiries
            </div>

            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <Button
                size="lg"
                className="w-full rounded-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white font-semibold py-6 sm:py-7 text-base sm:text-lg shadow-[0_8px_32px_-4px_oklch(0.65_0.18_145/0.6)] hover:shadow-[0_8px_40px_-4px_oklch(0.65_0.18_145/0.8)] hover:-translate-y-0.5 transition-all duration-300 3xl:text-xl"
                data-ocid="contact.primary_button"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
                <ExternalLink className="w-4 h-4 ml-2 opacity-60" />
              </Button>
            </a>

            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4 text-sm sm:text-base text-muted-foreground">
              <div className="flex items-center gap-2 justify-center">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Phone className="w-4 h-4 text-[oklch(0.65_0.18_145)]" />
                <span>+88 {WHATSAPP_NUM}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="border-t border-white/5 py-12 sm:py-16 px-4 sm:px-6 lg:px-10 xl:px-16"
      style={{ background: "oklch(0.07 0.022 252)" }}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-lg text-primary tracking-tight">
                PADMA
              </span>
              <span className="text-white/20">×</span>
              <span className="font-display font-black text-lg text-brand-orange tracking-tight">
                ZIBO
              </span>
            </div>
            <p className="text-muted-foreground text-sm text-center lg:text-left max-w-xs">
              Bangladesh's leading IT & OTT partnership, powering the nation's
              digital future.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3">
            <div className="text-xs uppercase tracking-widest text-muted-foreground/50 font-semibold mb-1">
              Navigation
            </div>
            {[
              { label: "About", href: "#about" },
              { label: "Partners", href: "#partners" },
              { label: "Services", href: "#services" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-ocid="nav.link"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[oklch(0.65_0.18_145)] hover:text-[oklch(0.72_0.18_145)] transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              {WHATSAPP_NUM}
            </a>
            <div className="text-sm text-muted-foreground">
              Developer:{" "}
              <span className="text-primary font-semibold">Ahil</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center text-xs text-muted-foreground/50">
          © {year} Padma Online Group × Zibo Play. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <PadmaSection />
        <ZiboSection />
        <BenefitsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
