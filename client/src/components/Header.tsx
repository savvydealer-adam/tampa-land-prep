import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useLeadForm } from "@/contexts/LeadFormContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@assets/savvy-dealer-logo_1762641721511.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { openLeadForm } = useLeadForm();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "NADA Show", href: "/nada-show" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  const productLinks = [
    { label: "All Products", href: "/products" },
    { label: "Facebook Ads", href: "/facebook-ads" },
    { label: "PPC Ads", href: "/ppc-ads" },
    { label: "Vehicle Ads", href: "/vehicle-ads" },
    { label: "Dealer SEO", href: "/dealer-seo" },
    { label: "Dealer Websites", href: "/dealer-websites" },
    { label: "Independent Dealer Websites", href: "/independent-dealer-websites" },
    { label: "Attribution AI", href: "/attribution-ai" },
  ];

  return (
    <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70' : 'bg-transparent'}`}>
      <div className={`container mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 sm:px-8 lg:px-12 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link 
          href="/" 
          className="flex items-center" 
          data-testid="link-home"
          aria-label="Savvy Dealer home"
        >
          <img 
            src={logoImage} 
            alt="Savvy Dealer logo" 
            className={`transition-all duration-300 ${scrolled ? 'h-7' : 'h-9'} w-auto invert dark:invert-0`}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                data-testid="button-products-dropdown"
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {productLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link
                    href={link.href}
                    className="cursor-pointer"
                    data-testid={`link-desktop-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/nada-show"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
            data-testid="link-nada-show"
          >
            NADA Show
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-blog"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-about"
          >
            About
          </Link>
          <a
            href="#contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-contact"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a 
            href="https://ai-detect.savvydealer.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex"
          >
            <Button
              className="bg-blue-600 text-white hover:bg-blue-700"
              data-testid="button-ai-compatibility"
            >
              AI Compatibility Test
            </Button>
          </a>
          <Button
            onClick={openLeadForm}
            className="hidden md:inline-flex"
            data-testid="button-get-started"
          >
            Request Free Audit
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <nav aria-label="Mobile navigation" className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => {
              const isInternalLink = item.href.startsWith('/');
              return isInternalLink ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="border-t pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Our Products
              </p>
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a 
              href="https://ai-detect.savvydealer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                data-testid="button-mobile-ai-compatibility"
              >
                AI Compatibility Test
              </Button>
            </a>
            <Button 
              onClick={() => {
                openLeadForm();
                setMobileMenuOpen(false);
              }}
              className="w-full" 
              data-testid="button-mobile-get-started"
            >
              Request Free Audit
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
