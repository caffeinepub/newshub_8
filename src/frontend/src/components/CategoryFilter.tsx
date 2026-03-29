const CATEGORIES = [
  "All",
  "World",
  "Tech",
  "Sports",
  "Business",
  "Entertainment",
  "Science",
  "Opinion",
];

interface CategoryFilterProps {
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex items-center gap-3 flex-wrap mb-6">
      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider shrink-0">
        Category Filters:
      </span>
      <div className="flex items-center gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            data-ocid={`category.${cat.toLowerCase()}_tab`}
            onClick={() => onChange(cat)}
            className={[
              "h-8 px-4 rounded-full text-xs font-medium border transition-all duration-200",
              active === cat
                ? "bg-news-teal text-primary-foreground border-news-teal shadow-sm"
                : "bg-transparent border-border text-muted-foreground hover:border-news-teal/50 hover:text-foreground",
            ].join(" ")}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
