import { Link } from "wouter";

export function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#docs" },
        { label: "Help Center", href: "#help" },
        { label: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center gap-2" 
              data-testid="link-footer-home"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <span className="font-serif text-lg font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-serif text-xl font-bold">SavvyDealer</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Modern website management without the complexity. Build and manage your
              professional website with ease.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SavvyDealer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
