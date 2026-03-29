import { BookOpen, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import type { Article } from "../backend.d";
import { getSmallArticleImage, timeAgo } from "../lib/articleUtils";

const SAMPLE_TRENDING: Article[] = [
  {
    id: BigInt(101),
    title: "OpenAI Releases GPT-5 with Unprecedented Reasoning Capabilities",
    summary: "",
    category: "Tech",
    source: "Wired",
    author: "",
    publishedAt: new Date(Date.now() - 1800000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(102),
    title: "Record-Breaking Heat Wave Sweeps Through Europe",
    summary: "",
    category: "World",
    source: "BBC",
    author: "",
    publishedAt: new Date(Date.now() - 3600000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(103),
    title: "Tesla's Robotaxi Launches in San Francisco",
    summary: "",
    category: "Tech",
    source: "Reuters",
    author: "",
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(104),
    title: "NBA Finals: Golden State Warriors Clinch Championship",
    summary: "",
    category: "Sports",
    source: "ESPN",
    author: "",
    publishedAt: new Date(Date.now() - 10800000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(105),
    title: "New Study Links Mediterranean Diet to Longevity",
    summary: "",
    category: "Science",
    source: "Nature",
    author: "",
    publishedAt: new Date(Date.now() - 14400000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
];

const SAMPLE_PICKS: Article[] = [
  {
    id: BigInt(201),
    title: "The Hidden Economics of Social Media Addiction",
    summary: "",
    category: "Opinion",
    source: "The Atlantic",
    author: "Prof. Diana Walsh",
    publishedAt: new Date(Date.now() - 86400000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: true,
  },
  {
    id: BigInt(202),
    title: "Quantum Computing Will Reshape Cybersecurity",
    summary: "",
    category: "Tech",
    source: "MIT Review",
    author: "Dr. Shen Lin",
    publishedAt: new Date(Date.now() - 172800000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: true,
  },
  {
    id: BigInt(203),
    title: "How Africa is Leading the Renewable Energy Revolution",
    summary: "",
    category: "World",
    source: "Guardian",
    author: "Amara Diallo",
    publishedAt: new Date(Date.now() - 259200000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: true,
  },
];

interface SidebarProps {
  trending: Article[];
  picks: Article[];
}

export function Sidebar({ trending, picks }: SidebarProps) {
  const trendingList =
    trending.length > 0 ? trending.slice(0, 5) : SAMPLE_TRENDING;
  const picksList = picks.length > 0 ? picks.slice(0, 3) : SAMPLE_PICKS;

  return (
    <aside className="space-y-5">
      {/* Trending Now */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="bg-card border border-news-card-border rounded-xl p-5"
        data-ocid="trending.panel"
      >
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-4 h-4 text-news-teal" />
          <h3 className="text-sm font-semibold text-foreground">
            Trending Now
          </h3>
        </div>
        <div className="space-y-3">
          {trendingList.map((article, i) => (
            <div
              key={String(article.id)}
              data-ocid={`trending.item.${i + 1}`}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-news-teal/10 text-news-teal text-xs font-bold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-card-foreground leading-snug group-hover:text-news-teal transition-colors line-clamp-2">
                  {article.title}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {article.source} · {timeAgo(article.publishedAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Editor's Picks */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="bg-card border border-news-card-border rounded-xl p-5"
        data-ocid="editors_picks.panel"
      >
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-news-teal" />
          <h3 className="text-sm font-semibold text-foreground">
            Editor's Picks
          </h3>
        </div>
        <div className="space-y-3">
          {picksList.map((article, i) => (
            <div
              key={String(article.id)}
              data-ocid={`editors_picks.item.${i + 1}`}
              className="flex items-start gap-3 cursor-pointer group"
            >
              <img
                src={getSmallArticleImage(article.imageUrl, article.category)}
                alt={article.title}
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-[13px] font-medium text-card-foreground leading-snug group-hover:text-news-teal transition-colors line-clamp-2">
                  {article.title}
                </p>
                <p className="text-[11px] text-muted-foreground mt-1">
                  {article.author && <span>{article.author} · </span>}
                  {article.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </aside>
  );
}
