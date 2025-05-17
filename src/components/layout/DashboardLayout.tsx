
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { AlignJustify } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

const DashboardLayout = ({ children, title, description }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} setCollapsed={setSidebarCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className={cn("sm:hidden bg-white border-b px-4 py-2", sidebarCollapsed ? "hidden" : "")}>
          <button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
            <AlignJustify size={24} />
          </button>
        </div>
        
        <Header title={title} description={description} />
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
