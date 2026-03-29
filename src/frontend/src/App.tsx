import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useMemo, useState } from "react";
import type { Article } from "./backend.d";
import { ArticleCard } from "./components/ArticleCard";
import { CategoryFilter } from "./components/CategoryFilter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Sidebar } from "./components/Sidebar";
import {
  useAllArticles,
  useEditorPicks,
  useFeaturedArticles,
  useTrendingArticles,
} from "./hooks/useQueries";

const SAMPLE_ARTICLES: Article[] = [
  {
    id: BigInt(10),
    title: "EU Passes Landmark AI Regulation Framework",
    summary:
      "The European Union has enacted the world's most comprehensive AI regulation, setting new standards for transparency, accountability, and safety across all AI applications.",
    category: "World",
    source: "Politico",
    author: "Claire Dubois",
    publishedAt: new Date(Date.now() - 7200000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: false,
  },
  {
    id: BigInt(11),
    title: "SpaceX Starship Completes First Crewed Mars Orbit Mission",
    summary:
      "Six astronauts successfully completed three orbits around Mars aboard SpaceX's Starship, marking humanity's closest approach to the red planet.",
    category: "Science",
    source: "Space.com",
    author: "Jordan Park",
    publishedAt: new Date(Date.now() - 9000000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(12),
    title: "Amazon Acquires AI Startup for Record $18 Billion",
    summary:
      "The acquisition of Anthropic competitor Cohere signals Amazon's aggressive push into enterprise AI, challenging Microsoft's OpenAI partnership.",
    category: "Business",
    source: "WSJ",
    author: "Tom Bradley",
    publishedAt: new Date(Date.now() - 18000000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: false,
  },
  {
    id: BigInt(13),
    title: "Lionel Messi Announces Retirement from International Football",
    summary:
      "After 18 years and four World Cup appearances, Argentina's Lionel Messi has confirmed he will step back from international duties following Copa América.",
    category: "Sports",
    source: "Sky Sports",
    author: "Pablo Hernandez",
    publishedAt: new Date(Date.now() - 21600000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: true,
    isEditorPick: false,
  },
  {
    id: BigInt(14),
    title: "Netflix Original 'The Architect' Sweeps Emmy Awards",
    summary:
      "The critically acclaimed limited series took home 12 Emmys including Outstanding Drama Series, cementing Netflix's dominance in prestige television.",
    category: "Entertainment",
    source: "Variety",
    author: "Rachel Kim",
    publishedAt: new Date(Date.now() - 36000000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: false,
  },
  {
    id: BigInt(15),
    title: "New Battery Technology Promises 1000-Mile EV Range",
    summary:
      "A team of researchers at Stanford has unveiled a solid-state battery prototype that could power electric vehicles for over 1000 miles on a single charge.",
    category: "Tech",
    source: "MIT Review",
    author: "Dr. Wei Zhang",
    publishedAt: new Date(Date.now() - 43200000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: true,
  },
  {
    id: BigInt(16),
    title: "Why Democracy Needs a Digital Constitution",
    summary:
      "As AI shapes public discourse, legal scholars argue that fundamental rights must extend to the digital realm to protect democratic principles.",
    category: "Opinion",
    source: "Foreign Affairs",
    author: "Prof. Ana Sousa",
    publishedAt: new Date(Date.now() - 54000000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: true,
  },
  {
    id: BigInt(17),
    title: "Global Semiconductor Shortage Finally Easing After Three Years",
    summary:
      "Supply chain analysts report that chip availability has normalized across most sectors, signaling the end of the prolonged shortage that began in 2021.",
    category: "Business",
    source: "Financial Times",
    author: "Hiro Nakamura",
    publishedAt: new Date(Date.now() - 72000000).toISOString(),
    imageUrl: "",
    isFeatured: false,
    isTrending: false,
    isEditorPick: false,
  },
];

const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c", "sk-d"];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  const { data: allArticles = [], isLoading: loadingAll } = useAllArticles();
  const { data: featuredArticles = [] } = useFeaturedArticles();
  const { data: trendingArticles = [] } = useTrendingArticles();
  const { data: editorPicks = [] } = useEditorPicks();

  const baseArticles = allArticles.length > 0 ? allArticles : SAMPLE_ARTICLES;

  const filteredArticles = useMemo(() => {
    let result = baseArticles;
    if (activeCategory !== "All") {
      result = result.filter(
        (a) => a.category.toLowerCase() === activeCategory.toLowerCase(),
      );
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.source.toLowerCase().includes(q),
      );
    }
    return result;
  }, [baseArticles, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        isDark={isDark}
        onToggleTheme={() => setIsDark((d) => !d)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="mx-auto max-w-[1200px] px-6 py-8">
        <HeroSection articles={featuredArticles} />

        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          {/* Articles grid */}
          <div>
            {loadingAll ? (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                data-ocid="articles.loading_state"
              >
                {SKELETON_KEYS.map((key) => (
                  <div
                    key={key}
                    className="bg-card border border-news-card-border rounded-xl overflow-hidden"
                  >
                    <Skeleton className="h-44 w-full" />
                    <div className="p-4 space-y-2">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredArticles.length === 0 ? (
              <div
                data-ocid="articles.empty_state"
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <span className="text-2xl">📰</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  No articles found
                </h3>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your search or category filter.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredArticles.map((article, i) => (
                  <ArticleCard
                    key={String(article.id)}
                    article={article}
                    index={i}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar trending={trendingArticles} picks={editorPicks} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
