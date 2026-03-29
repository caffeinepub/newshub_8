import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const WHATSAPP_NUM = "01626173639";
const WHATSAPP_LINK = "https://wa.me/8801626173639";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return scrolled;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          data-ocid="nav.link"
        >
          <span className="font-display font-bold text-lg text-foreground tracking-tight">
            <span className="text-primary">Padma</span>
            <span className="text-muted-foreground mx-1">×</span>
            <span className="text-brand-orange">Zibo</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-ocid="nav.link"
            >
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button
              size="sm"
              className="bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white"
              data-ocid="nav.button"
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              WhatsApp
            </Button>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          data-ocid="nav.toggle"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border"
          >
            <nav className="container px-4 pb-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                  data-ocid="nav.link"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <Button
                  size="sm"
                  className="w-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white"
                  data-ocid="nav.button"
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp: {WHATSAPP_NUM}
                </Button>
              </a>
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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.62 0.22 258 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.62 0.22 258 / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-primary" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 bg-brand-orange" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-sm px-4 py-1">
            Strategic Partnership · Bangladesh
          </Badge>
        </motion.div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center gap-4 md:gap-8 mb-8 flex-wrap"
        >
          <div className="bg-card/80 backdrop-blur rounded-2xl px-6 py-4 border border-border shadow-glow">
            <img
              src="/assets/generated/padma-logo-transparent.dim_300x100.png"
              alt="Padma Online Group"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-display font-bold text-muted-foreground">
              ×
            </span>
          </div>
          <div className="bg-card/80 backdrop-blur rounded-2xl px-6 py-4 border border-border shadow-glow-orange">
            <img
              src="/assets/generated/zibo-logo-transparent.dim_300x100.png"
              alt="Zibo Play"
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Powering Bangladesh's
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Digital Future
          </span>
          <br />
          Together
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          A landmark collaboration between Bangladesh's premier IT powerhouse
          and its leading OTT streaming platform — forging the future of digital
          innovation and entertainment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <Button
              size="lg"
              className="bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white shadow-lg text-base px-8"
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
              className="text-base px-8 border-border hover:bg-card"
              data-ocid="hero.secondary_button"
            >
              Learn More
              <ChevronDown className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground animate-bounce" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
            About the Partnership
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            A Partnership Built for
            <span className="text-primary"> Digital Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Padma Online Group and Zibo Play have joined forces to create a
            transformative alliance in Bangladesh's digital landscape. This
            partnership unites cutting-edge IT expertise with a world-class
            entertainment streaming ecosystem — delivering unprecedented value
            to businesses and consumers alike across the nation.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Together, we leverage deep technological capabilities and a vast
            entertainment catalog to drive digital transformation, empower
            communities, and shape the future of connected life in Bangladesh.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: <Users className="w-7 h-7" />,
              label: "10,000+",
              sub: "Clients Served",
            },
            {
              icon: <Globe className="w-7 h-7" />,
              label: "Nationwide",
              sub: "Coverage in BD",
            },
            {
              icon: <Star className="w-7 h-7" />,
              label: "#1",
              sub: "IT & OTT Alliance",
            },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-2">
              <div className="text-primary">{stat.icon}</div>
              <div className="font-display font-bold text-2xl md:text-3xl text-foreground">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
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
    <section id="partners" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start gap-8 mb-14"
        >
          <div className="flex-1">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Partner Profile
            </Badge>
            <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border shadow-glow inline-block mb-6">
              <img
                src="/assets/generated/padma-logo-transparent.dim_300x100.png"
                alt="Padma Online Group"
                className="h-14 w-auto object-contain"
              />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Padma Online Group
            </h2>
            <p className="text-primary font-semibold mb-4 text-lg">
              Bangladesh's Biggest IT Expert Company
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Padma Online Group stands as the undisputed leader in Bangladesh's
              digital IT sector. With years of excellence and a team of elite IT
              experts, we deliver transformative technology solutions that power
              businesses, government institutions, and startups across the
              country.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From complex enterprise software to comprehensive digital
              marketing campaigns, our full-spectrum services ensure every
              client achieves their digital ambitions with precision,
              reliability, and innovation.
            </p>
          </div>
          <div className="flex-shrink-0 md:w-72">
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                Why Choose Padma
              </h3>
              <ul className="space-y-3">
                {[
                  "Industry-leading IT expertise",
                  "100+ certified professionals",
                  "Proven track record",
                  "End-to-end digital solutions",
                  "24/7 technical support",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div
          id="services"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card
                className="bg-card border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300 h-full"
                data-ocid={`services.item.${i + 1}`}
              >
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center text-primary mb-2">
                    {s.icon}
                  </div>
                  <CardTitle className="font-display text-base">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </CardContent>
              </Card>
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
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row-reverse items-start gap-8 mb-14"
        >
          <div className="flex-1">
            <Badge className="mb-4 bg-brand-orange/20 text-brand-orange border-brand-orange/30">
              Partner Profile
            </Badge>
            <div className="bg-card/80 backdrop-blur rounded-2xl p-4 border border-border shadow-glow-orange inline-block mb-6">
              <img
                src="/assets/generated/zibo-logo-transparent.dim_300x100.png"
                alt="Zibo Play"
                className="h-14 w-auto object-contain"
              />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Zibo Play
            </h2>
            <p className="text-brand-orange font-semibold mb-4 text-lg">
              Bangladesh's Premier OTT Streaming Platform
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Zibo Play is revolutionising entertainment in Bangladesh as the
              country's leading Over-The-Top (OTT) streaming platform. We
              deliver a world-class streaming experience with an extensive
              library of movies, TV series, live channels, and exclusive
              original productions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Designed for the modern Bangladeshi audience, Zibo Play combines
              local cultural content with international blockbusters — making
              premium entertainment accessible to every screen in the nation.
            </p>
          </div>
          <div className="flex-shrink-0 md:w-72">
            <div className="bg-gradient-to-br from-brand-orange/20 to-brand-gold/10 rounded-2xl p-6 border border-brand-orange/20">
              <h3 className="font-display font-bold text-lg mb-4 text-foreground">
                Platform Highlights
              </h3>
              <ul className="space-y-3">
                {[
                  "OTT leader in Bangladesh",
                  "1000+ titles on-demand",
                  "Exclusive original content",
                  "Multi-device streaming",
                  "Affordable subscription plans",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-orange flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="bg-card border-border hover:border-brand-orange/50 hover:shadow-glow-orange transition-all duration-300 h-full">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/15 flex items-center justify-center text-brand-orange mb-2">
                    {f.icon}
                  </div>
                  <CardTitle className="font-display text-base">
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </CardContent>
              </Card>
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
      color: "primary",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Technology-Powered Entertainment",
      desc: "Padma's engineering expertise supercharges Zibo Play's infrastructure for seamless, high-performance streaming at scale.",
      color: "accent",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Accelerated Growth",
      desc: "Combined market reach and shared resources drive rapid expansion, bringing digital services to every corner of Bangladesh.",
      color: "gold",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trusted & Reliable",
      desc: "Both companies bring years of proven excellence, earning the trust of thousands of clients and millions of viewers.",
      color: "primary",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community First",
      desc: "Together committed to empowering Bangladeshi communities through digital literacy, access, and world-class content.",
      color: "accent",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards, Local Heart",
      desc: "International quality delivered with deep understanding of local culture, languages, and audience needs.",
      color: "gold",
    },
  ];

  const colorMap: Record<string, string> = {
    primary:
      "bg-primary/15 text-primary border-primary/20 hover:border-primary/50",
    accent: "bg-accent/15 text-accent border-accent/20 hover:border-accent/50",
    gold: "bg-brand-gold/15 text-brand-gold border-brand-gold/20 hover:border-brand-gold/50",
  };

  return (
    <section className="py-24 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-brand-gold/20 text-brand-gold border-brand-gold/30">
            Why This Collaboration
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Partnership <span className="text-primary">Benefits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                className={`bg-card border transition-all duration-300 h-full ${colorMap[
                  b.color
                ]
                  .split(" ")
                  .slice(2)
                  .join(" ")}`}
              >
                <CardContent className="pt-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${colorMap[
                      b.color
                    ]
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")}`}
                  >
                    {b.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {b.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-[oklch(0.65_0.18_145/0.2)] text-[oklch(0.65_0.18_145)] border-[oklch(0.65_0.18_145/0.3)]">
            Get In Touch
          </Badge>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Contact <span className="text-[oklch(0.65_0.18_145)]">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">
            Ready to partner, collaborate, or learn more? Reach out directly via
            WhatsApp for a quick response.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-card"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-[oklch(0.65_0.18_145/0.2)] flex items-center justify-center">
              <MessageCircle className="w-10 h-10 text-[oklch(0.65_0.18_145)]" />
            </div>
            <div>
              <div className="font-display font-bold text-3xl text-foreground mb-1">
                {WHATSAPP_NUM}
              </div>
              <div className="text-muted-foreground">
                WhatsApp · Available for inquiries
              </div>
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="w-full max-w-xs"
            >
              <Button
                size="lg"
                className="w-full bg-[oklch(0.65_0.18_145)] hover:bg-[oklch(0.58_0.18_145)] text-white text-base py-6"
                data-ocid="contact.primary_button"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
                <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
              </Button>
            </a>

            <div className="border-t border-border w-full pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
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
    <footer className="border-t border-border bg-card/50 py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img
              src="/assets/generated/padma-logo-transparent.dim_300x100.png"
              alt="Padma Online Group"
              className="h-8 w-auto object-contain opacity-80"
            />
            <span className="text-muted-foreground">×</span>
            <img
              src="/assets/generated/zibo-logo-transparent.dim_300x100.png"
              alt="Zibo Play"
              className="h-8 w-auto object-contain opacity-80"
            />
          </div>

          <div className="text-center">
            <div className="text-sm text-muted-foreground">
              © {year} Padma Online Group × Zibo Play. All rights reserved.
            </div>
            <div className="text-xs text-muted-foreground/60 mt-1">
              Developer:{" "}
              <span className="text-primary font-semibold">Ahil</span>
              {" · "}
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-[oklch(0.65_0.18_145)] hover:underline"
              >
                WhatsApp: {WHATSAPP_NUM}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#about"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#partners"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Partners
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
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
