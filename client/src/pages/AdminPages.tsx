import { AdminSidebar } from "@/components/AdminSidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { PageCard } from "@/components/PageCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function AdminPages() {
  //todo: remove mock functionality
  const [searchQuery, setSearchQuery] = useState("");
  const [pages] = useState([
    {
      id: "1",
      title: "Homepage",
      slug: "home",
      status: "published" as const,
      lastModified: "2 hours ago",
    },
    {
      id: "2",
      title: "About Us",
      slug: "about",
      status: "published" as const,
      lastModified: "1 day ago",
    },
    {
      id: "3",
      title: "Services",
      slug: "services",
      status: "draft" as const,
      lastModified: "3 days ago",
    },
    {
      id: "4",
      title: "Contact",
      slug: "contact",
      status: "published" as const,
      lastModified: "1 week ago",
    },
    {
      id: "5",
      title: "Blog",
      slug: "blog",
      status: "draft" as const,
      lastModified: "2 weeks ago",
    },
  ]);

  const filteredPages = pages.filter(
    (page) =>
      page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      page.slug.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div>
            <h1 className="text-2xl font-bold">Pages</h1>
            <p className="text-sm text-muted-foreground">Manage your website pages</p>
          </div>
          <ThemeToggle />
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1 sm:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search pages..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search-pages"
              />
            </div>
            <Button asChild data-testid="button-create-page">
              <Link href="/admin/pages/new" className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                New Page
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredPages.map((page) => (
              <PageCard
                key={page.id}
                {...page}
                onEdit={() => console.log(`Edit page ${page.id}`)}
                onDelete={() => console.log(`Delete page ${page.id}`)}
                onPreview={() => console.log(`Preview page ${page.id}`)}
              />
            ))}
          </div>

          {filteredPages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <p className="mb-4 text-lg text-muted-foreground">No pages found</p>
              <Button asChild data-testid="button-create-first-page">
                <Link href="/admin/pages/new">
                  Create Your First Page
                </Link>
              </Button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
