import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const productLinks = [
    { label: "All Products", href: "/products" },
    { label: "Facebook Ads", href: "/facebook-ads" },
    { label: "PPC Ads", href: "/ppc-ads" },
    { label: "Dealer SEO", href: "/dealer-seo" },
    { label: "Dealer Websites", href: "/dealer-websites" },
    { label: "Attribution AI", href: "/attribution-ai" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-2" 
          data-testid="link-home"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="font-serif text-xl font-bold">SavvyDealer</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
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
          <a
            href="#about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            data-testid="link-about"
          >
            About
          </a>
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
          <Button
            asChild
            className="hidden md:inline-flex"
            data-testid="button-get-started"
          >
            <a href="https://ai-detect.savvydealer.com" target="_blank" rel="noopener noreferrer">Request Free Audit</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="border-t md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`link-mobile-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
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
            <Button asChild className="w-full" data-testid="button-mobile-get-started">
              <a href="https://ai-detect.savvydealer.com" target="_blank" rel="noopener noreferrer">Request Free Audit</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
