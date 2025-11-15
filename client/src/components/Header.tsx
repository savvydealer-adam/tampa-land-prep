import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { useLeadForm } from "@/contexts/LeadFormContext";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoImage from "@assets/images/logo-green.png";

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
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Demolition", href: "/demolition" },
    { label: "About", href: "/about" },
  ];

  return (
    <header role="banner" className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? 'border-b bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70' : 'bg-transparent'}`}>
      <div className={`container mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 sm:px-8 lg:px-12 ${scrolled ? 'h-16' : 'h-20'}`}>
        <Link 
          href="/" 
          className="flex items-center" 
          data-testid="link-home"
          aria-label="Tampa Land Prep Home"
        >
          <img 
            src={logoImage} 
            alt="Tampa Land Prep" 
            className={`transition-all duration-300 ${scrolled ? 'h-10' : 'h-12'}`}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          <Button onClick={openLeadForm} size="sm" className="ml-2" data-testid="button-header-contact">
            Get a Quote
          </Button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <nav aria-label="Mobile navigation" className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={() => { openLeadForm(); setMobileMenuOpen(false); }} className="w-full" data-testid="button-mobile-contact">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
