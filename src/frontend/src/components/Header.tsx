import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Bell, ChevronDown, Search, Zap } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export function Header({
  isDark,
  onToggleTheme,
  searchQuery,
  onSearchChange,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-news-header/95 backdrop-blur-sm">
      <div className="mx-auto max-w-[1200px] px-6 h-16 flex items-center gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-news-teal flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-[10px] font-semibold tracking-[0.15em] text-news-teal uppercase">
              Insight
            </div>
            <div className="text-[13px] font-bold tracking-wide text-foreground uppercase leading-none">
              News
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <button
            type="button"
            data-ocid="nav.explore_button"
            className="flex items-center gap-1 px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
          >
            Explore <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            data-ocid="nav.trending_link"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
          >
            Trending
          </button>
          <button
            type="button"
            data-ocid="nav.myfeed_link"
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
          >
            My Feed
          </button>
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            data-ocid="header.search_input"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search articles…"
            className="pl-9 h-9 bg-input border-border text-sm placeholder:text-muted-foreground"
          />
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            type="button"
            data-ocid="header.notifications_button"
            className="relative p-1.5 rounded-full hover:bg-muted transition-colors"
          >
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-0.5 right-0.5 w-2 h-2 rounded-full bg-news-badge-red" />
          </button>
          <div className="w-8 h-8 rounded-full bg-news-teal flex items-center justify-center text-[11px] font-bold text-primary-foreground">
            JD
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground hidden sm:inline">
              {isDark ? "Dark" : "Light"}
            </span>
            <Switch
              data-ocid="header.theme_toggle"
              checked={isDark}
              onCheckedChange={onToggleTheme}
              className="scale-90"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
