import { AdminSidebar } from "@/components/AdminSidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Users, Eye, TrendingUp } from "lucide-react";
import { AdminAccessGuard } from "@/components/AdminAccessGuard";

export default function Admin() {
  return (
    <AdminAccessGuard>
      <AdminContent />
    </AdminAccessGuard>
  );
}

function AdminContent() {
  const stats = [
    {
      icon: FileText,
      label: "Total Pages",
      value: "12",
      change: "+2 this week",
      trend: "up",
    },
    {
      icon: Eye,
      label: "Page Views",
      value: "2,847",
      change: "+14% from last week",
      trend: "up",
    },
    {
      icon: Users,
      label: "Visitors",
      value: "1,234",
      change: "+8% from last week",
      trend: "up",
    },
    {
      icon: TrendingUp,
      label: "Engagement",
      value: "68%",
      change: "+5% from last week",
      trend: "up",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      <AdminSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">Welcome back!</p>
          </div>
          <ThemeToggle />
        </header>
        <main id="main-content" role="main" tabIndex={-1} className="flex-1 overflow-y-auto p-6">
          <div className="mb-8">
            <h2 className="mb-4 text-lg font-semibold">Overview</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={stat.label} className="overflow-visible" data-testid={`card-stat-${index}`}>
                  <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                    <stat.icon className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold" data-testid={`text-stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground" data-testid={`text-stat-change-${index}`}>
                      {stat.change}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="overflow-visible">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks to get you started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-4 rounded-md border p-4 hover-elevate">
                  <FileText className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-medium">Create a New Page</div>
                    <div className="text-sm text-muted-foreground">
                      Add content to your website
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-md border p-4 hover-elevate">
                  <Eye className="h-8 w-8 text-primary" />
                  <div>
                    <div className="font-medium">Preview Your Site</div>
                    <div className="text-sm text-muted-foreground">
                      See how visitors view your website
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-visible">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest changes to your website</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { action: "Updated", page: "Homepage", time: "2 hours ago" },
                  { action: "Created", page: "About Us", time: "1 day ago" },
                  { action: "Published", page: "Contact", time: "2 days ago" },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                    data-testid={`activity-${index}`}
                  >
                    <div>
                      <div className="font-medium">
                        {activity.action} {activity.page}
                      </div>
                      <div className="text-sm text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
