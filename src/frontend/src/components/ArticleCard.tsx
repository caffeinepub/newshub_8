import { motion } from "motion/react";
import type { Article } from "../backend.d";
import { getArticleImage, timeAgo } from "../lib/articleUtils";

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      data-ocid={`articles.item.${index + 1}`}
      className="group bg-card border border-news-card-border rounded-xl overflow-hidden cursor-pointer hover:border-news-teal/30 transition-all duration-200 hover:shadow-card flex flex-col"
    >
      <div className="relative overflow-hidden h-44">
        <img
          src={getArticleImage(article.imageUrl, article.category)}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-news-teal text-primary-foreground text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-[15px] font-semibold text-card-foreground leading-snug mb-2 line-clamp-2 group-hover:text-news-teal transition-colors">
          {article.title}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-3 flex-1">
          {article.summary}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-medium text-muted-foreground">
            {article.source}
          </span>
          <span className="text-[11px] text-muted-foreground">
            {timeAgo(article.publishedAt)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
