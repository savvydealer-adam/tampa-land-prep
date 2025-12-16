import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import logoImage from "@assets/logo-tampaland-prep_1765926841635.png";

export function Footer() {
  const companyLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
  ];

  const serviceAreas = [
    "Tampa",
    "Land O' Lakes",
    "Lutz",
    "Wesley Chapel",
    "Odessa",
    "Carrollwood"
  ];

  return (
    <footer role="contentinfo" className="border-t bg-card py-20">
      <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6 lg:col-span-2">
            <Link 
              href="/" 
              className="flex items-center" 
              data-testid="link-footer-home"
              aria-label="Tampa Land Prep Home"
            >
              <img 
                src={logoImage} 
                alt="Tampa Land Prep" 
                className="h-12"
              />
            </Link>
            <p className="text-muted-foreground max-w-md">
              Professional land preparation services serving the greater Tampa Bay area. 
              Expert land clearing, grading, leveling, and site preparation for residential and commercial properties.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
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
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-3 text-muted-foreground">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Tampa Land Prep. All rights reserved.
            </p>
            <div className="flex flex-col items-center gap-4 text-sm text-muted-foreground md:flex-row">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tampa, FL</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+14079284376" className="hover:text-foreground" data-testid="link-footer-phone">
                  (407) 928-4376
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@tampalandprep.com" className="hover:text-foreground" data-testid="link-footer-email">
                  info@tampalandprep.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
