import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({
  children,
  title,
}: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Sidebar
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
      />
      <div
        className={cn(
          "flex-1 flex flex-col overflow-hidden transition-all duration-300",
          sidebarCollapsed ? "ml-16" : "ml-60"
        )}
      >
        <div
          className={cn(
            "sm:hidden bg-white border-b px-4 py-2",
            sidebarCollapsed ? "hidden" : ""
          )}
        >
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            <AlignJustify size={24} />
          </button>
        </div>

        <Header title={title}  />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
