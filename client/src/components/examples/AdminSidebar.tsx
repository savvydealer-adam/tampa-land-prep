import { AdminSidebar } from "../AdminSidebar";
import { ThemeProvider } from "../theme-provider";

export default function AdminSidebarExample() {
  return (
    <ThemeProvider>
      <div className="flex h-screen">
        <AdminSidebar />
      </div>
    </ThemeProvider>
  );
}
