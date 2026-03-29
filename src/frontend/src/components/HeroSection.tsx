import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import type { Article } from "../backend.d";
import { getArticleImage, timeAgo } from "../lib/articleUtils";

const SAMPLE_FEATURED: Article[] = [
  {
    id: BigInt(1),
    title:
      "Global Climate Summit Reaches Historic Agreement on Carbon Neutrality",
    summary:
      "World leaders at the annual climate summit have signed a landmark agreement pledging carbon neutrality by 2040, marking the most ambitious climate commitment in history.",
    category: "World",
    source: "Reuters",
    author: "Sarah Mitchell",
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    imageUrl: "",
    isFeatured: true,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(2),
    title: "Apple Unveils Next-Generation AI Chip Outperforming Competitors",
    summary:
      "Apple's new M4 Ultra chip demonstrates 40% performance leap in AI workloads.",
    category: "Tech",
    source: "TechCrunch",
    author: "Alex Rivera",
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    imageUrl: "",
    isFeatured: true,
    isTrending: false,
    isEditorPick: true,
  },
  {
    id: BigInt(3),
    title: "Champions League Final: Real Madrid vs Manchester City",
    summary:
      "The most anticipated final in years promises an electric showdown.",
    category: "Sports",
    source: "ESPN",
    author: "Marco Ferrari",
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    imageUrl: "",
    isFeatured: true,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(4),
    title: "Federal Reserve Signals Three Rate Cuts in 2025",
    summary:
      "Minutes from the latest Fed meeting indicate a dovish pivot as inflation cools.",
    category: "Business",
    source: "Bloomberg",
    author: "Emma Collins",
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    imageUrl: "",
    isFeatured: true,
    isTrending: false,
    isEditorPick: true,
  },
  {
    id: BigInt(5),
    title: "NASA's Artemis III Mission Confirms Water Ice Discovery on Moon",
    summary:
      "Groundbreaking findings from the lunar south pole could support future human habitation.",
    category: "Science",
    source: "NASA",
    author: "Dr. James Okafor",
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    imageUrl: "",
    isFeatured: true,
    isTrending: true,
    isEditorPick: true,
  },
];

interface HeroSectionProps {
  articles: Article[];
}

export function HeroSection({ articles }: HeroSectionProps) {
  const featured = articles.length >= 5 ? articles : SAMPLE_FEATURED;
  const hero = featured[0];
  const grid = featured.slice(1, 5);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="mb-8">
      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-1">{today}</p>
        <h1 className="text-xl font-semibold text-foreground">Top Headlines</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4">
        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden cursor-pointer group h-[380px] lg:h-[440px]"
          data-ocid="hero.primary_card"
        >
          <img
            src={getArticleImage(hero.imageUrl, hero.category)}
            alt={hero.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <Badge className="mb-3 bg-news-teal text-primary-foreground border-0 text-[11px] uppercase tracking-wider">
              {hero.category}
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-2">
              {hero.title}
            </h2>
            <p className="text-sm text-white/70 line-clamp-2 mb-3">
              {hero.summary}
            </p>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <span>{hero.source}</span>
              <span>·</span>
              <span>{timeAgo(hero.publishedAt)}</span>
            </div>
          </div>
        </motion.div>

        {/* 2x2 grid */}
        <div className="grid grid-cols-2 gap-3">
          {grid.map((article, i) => (
            <motion.div
              key={String(article.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * (i + 1) }}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              data-ocid={`hero.grid_card.${i + 1}`}
            >
              <img
                src={getArticleImage(article.imageUrl, article.category)}
                alt={article.title}
                className="w-full h-full object-cover min-h-[160px] max-h-[210px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-[10px] font-semibold text-news-teal uppercase tracking-wider">
                  {article.category}
                </span>
                <h3 className="text-sm font-semibold text-white leading-snug mt-0.5 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[11px] text-white/55 mt-1">
                  {article.source} · {timeAgo(article.publishedAt)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
