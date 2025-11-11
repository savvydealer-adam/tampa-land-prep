import { Link } from "wouter";
import logoImage from "@assets/savvy-dealer-logo_1762641721511.png";

export function Footer() {
  const productLinks = [
    { label: "Facebook Ads", href: "/facebook-ads" },
    { label: "PPC Ads", href: "/ppc-ads" },
    { label: "Dealer SEO", href: "/dealer-seo" },
    { label: "Dealer Websites", href: "/dealer-websites" },
    { label: "Independent Dealer Websites", href: "/independent-dealer-websites" },
    { label: "Attribution AI", href: "/attribution-ai" },
  ];

  return (
    <footer role="contentinfo" className="border-t bg-background py-20">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <Link 
              href="/" 
              className="flex items-center" 
              data-testid="link-footer-home"
              aria-label="Savvy Dealer home"
            >
              <img 
                src={logoImage} 
                alt="Savvy Dealer logo" 
                className="h-10 w-auto invert dark:invert-0"
              />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Digital marketing for auto dealers. We don't outspend the competition — we outsmart them.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide">Products</h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-about"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="tel:8135013229"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-phone"
                >
                  (813) 501-3229
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@savvydealer.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  data-testid="link-footer-email"
                >
                  support@savvydealer.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SavvyDealer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
