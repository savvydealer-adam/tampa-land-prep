import { PageCard } from "../PageCard";
import { ThemeProvider } from "../theme-provider";

export default function PageCardExample() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <PageCard
            id="1"
            title="Homepage"
            slug="home"
            status="published"
            lastModified="2 hours ago"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onPreview={() => console.log("Preview clicked")}
          />
          <PageCard
            id="2"
            title="About Us"
            slug="about"
            status="draft"
            lastModified="1 day ago"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onPreview={() => console.log("Preview clicked")}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
