import { Zap } from "lucide-react";
import { SiFacebook, SiInstagram, SiX } from "react-icons/si";

const NAV_LINKS = [
  { label: "About" },
  { label: "Advertise" },
  { label: "Privacy" },
  { label: "Terms" },
  { label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-news-header mt-12">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-news-teal flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <div className="text-[11px] font-bold tracking-[0.12em] text-news-teal uppercase">
                Insight News
              </div>
              <div className="text-xs text-muted-foreground">
                Your world, informed.
              </div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                type="button"
                data-ocid={`footer.${link.label.toLowerCase()}_link`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="footer.twitter_link"
              className="p-2 rounded-full text-muted-foreground hover:text-news-teal transition-colors"
            >
              <SiX size={16} />
            </button>
            <button
              type="button"
              data-ocid="footer.facebook_link"
              className="p-2 rounded-full text-muted-foreground hover:text-news-teal transition-colors"
            >
              <SiFacebook size={16} />
            </button>
            <button
              type="button"
              data-ocid="footer.instagram_link"
              className="p-2 rounded-full text-muted-foreground hover:text-news-teal transition-colors"
            >
              <SiInstagram size={16} />
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {year} Insight News. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="text-news-teal hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
