import { AdminSidebar } from "@/components/AdminSidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function AdminSettings() {
  //todo: remove mock functionality
  const [siteName, setSiteName] = useState("SavvyDealer");
  const [siteUrl, setSiteUrl] = useState("https://savvydealer.com");
  const [siteDescription, setSiteDescription] = useState("Modern website management made simple");

  const handleSave = () => {
    console.log("Settings saved", { siteName, siteUrl, siteDescription });
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div>
            <h1 className="text-2xl font-bold">Settings</h1>
            <p className="text-sm text-muted-foreground">Manage your website settings</p>
          </div>
          <ThemeToggle />
        </header>
        <main id="main-content" role="main" tabIndex={-1} className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-2xl space-y-6">
            <Card className="overflow-visible">
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Configure basic information about your website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-name">Site Name</Label>
                  <Input
                    id="site-name"
                    value={siteName}
                    onChange={(e) => setSiteName(e.target.value)}
                    data-testid="input-site-name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-url">Site URL</Label>
                  <Input
                    id="site-url"
                    type="url"
                    value={siteUrl}
                    onChange={(e) => setSiteUrl(e.target.value)}
                    data-testid="input-site-url"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="site-description">Site Description</Label>
                  <Input
                    id="site-description"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                    data-testid="input-site-description"
                  />
                  <p className="text-sm text-muted-foreground">
                    This appears in search engine results
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
                <CardDescription>
                  Optimize your website for search engines
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="meta-title">Default Meta Title</Label>
                  <Input
                    id="meta-title"
                    placeholder="Your Site - Tagline"
                    data-testid="input-meta-title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="meta-keywords">Meta Keywords</Label>
                  <Input
                    id="meta-keywords"
                    placeholder="keyword1, keyword2, keyword3"
                    data-testid="input-meta-keywords"
                  />
                </div>
              </CardContent>
            </Card>

            <Separator />

            <div className="flex justify-end gap-4">
              <Button variant="outline" data-testid="button-cancel">
                Cancel
              </Button>
              <Button onClick={handleSave} data-testid="button-save">
                Save Changes
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
