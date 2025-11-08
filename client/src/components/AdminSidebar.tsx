import { Home, FileText, Settings, LogOut, Plus } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function AdminSidebar() {
  const [location] = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", href: "/admin" },
    { icon: FileText, label: "Pages", href: "/admin/pages" },
    { icon: Settings, label: "Settings", href: "/admin/settings" },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col border-r bg-sidebar">
      <div className="flex h-16 items-center gap-2 border-b px-6">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
          <span className="font-serif text-lg font-bold text-primary-foreground">S</span>
        </div>
        <span className="font-serif text-xl font-bold">SavvyDealer</span>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4">
          <Button
            asChild
            className="w-full"
            data-testid="button-new-page"
          >
            <Link href="/admin/pages/new" className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              New Page
            </Link>
          </Button>
        </div>

        <Separator className="my-4" />

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Button
                key={item.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start"
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                <Link href={item.href} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>

      <div className="border-t p-4">
        <Button
          variant="ghost"
          className="w-full justify-start"
          data-testid="button-logout"
        >
          <LogOut className="mr-3 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </aside>
  );
}
