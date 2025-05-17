import { cn } from "@/lib/utils";
import {
  Home,
  House,
  Users,
  CreditCard,
  Package,
  FileCog,
  FileWarning,
  List,
  ClipboardList,
  Lock,
  KeyRound,
  MessageSquareWarning,
  CheckSquare,
  AlertCircle,
  AlignJustify,
  Building2,
  Gauge,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthorizationListIcon from "../icons/AuthorizationListIcon";
import BranchIcon from "../icons/BranchIcon";

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    complaints: true,
  });

  // Toggle submenu expanded state
  const toggleSubmenu = (menuKey: string) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menuKey]: !prev[menuKey],
    }));
  };

  const menuItems = [
    { icon: House, label: "Dashboard", path: "/" },
    { icon: BranchIcon, label: "Branches", path: "/branches" },
    { icon: Users, label: "Roles", path: "/roles" },
    { icon: Users, label: "Users", path: "/users" },
    { icon: CreditCard, label: "Card Scheme", path: "/card-scheme" },
    { icon: FileCog, label: "Card Profile", path: "/card-profile" },
    { icon: ClipboardList, label: "Card Request", path: "/card-request" },
    { icon: Package, label: "Stock", path: "/stock" },
    { icon: CreditCard, label: "Cards", path: "/cards" },
    { icon: Lock, label: "Block/Unblock Card", path: "/block-unblock" },
    { icon: KeyRound, label: "Generate/Reissue Pin", path: "/generate-pin" },
    // Complaints menu with submenu items
    {
      icon: MessageSquareWarning,
      label: "Complaints",
      isSubmenu: true,
      key: "complaints",
      subItems: [
        {
          icon: MessageSquareWarning,
          label: "Complaints Log",
          path: "/complaints-log",
        },
        {
          icon: CheckSquare,
          label: "Complaints Resolve",
          path: "/complaints-resolve",
        },
      ],
    },
    {
      icon: AuthorizationListIcon,
      label: "Authorization List",
      path: "/auth-list",
    },
    { icon: AlertCircle, label: "Authorization Queue", path: "/auth-queue" },
    { icon: FileWarning, label: "Trail", path: "/trail" },
    { icon: Users, label: "Account", path: "/account" },
  ];

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 h-screen bg-blue-950 text-white transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        <div
          className={cn(
            "flex items-center",
            collapsed && "justify-center w-full"
          )}
        >
          {!collapsed && (
            <span className="text-xl font-bold text-orange-500 w-[138px]">
              <img src="/infra.png" alt="infra-logo" className="w-[100%]" />
            </span>
          )}
          {collapsed && (
            <span
              className="text-xl font-bold text-orange-500 cursor-pointer"
              onClick={() => setCollapsed(!collapsed)}
            >
              <Home />
            </span>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "text-white/70 hover:text-white",
            collapsed && "hidden"
          )}
        >
          <AlignJustify size={20} />
        </button>
      </div>

      <div className="mt-2 flex-1 overflow-y-auto custom-scrollbar">
        {/* Main Menu Section Label */}
        <div className="px-4 pt-2 pb-1">
          <span className="uppercase text-xs text-white/40 tracking-wider mb-2 block">
            Main Menu
          </span>
        </div>
        <nav className="flex flex-col gap-2">
          {menuItems.map((item, index) =>
            item.isSubmenu ? (
              // Render submenu item
              <div key={index} className="flex flex-col gap-1">
                <button
                  onClick={() => toggleSubmenu(item.key)}
                  className={cn(
                    "flex items-center justify-between py-2 px-4 text-white/70 hover:bg-blue-900 hover:text-white transition-colors w-full",
                    collapsed ? "justify-center" : ""
                  )}
                >
                  <div className="flex items-center">
                    <item.icon size={18} className="min-w-5" />
                    {!collapsed && <span className="ml-3">{item.label}</span>}
                  </div>
                  {!collapsed &&
                    (expandedMenus[item.key] ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    ))}
                </button>

                {/* Submenu items */}
                {expandedMenus[item.key] && !collapsed && (
                  <div className={cn("flex flex-col gap-1 pl-8")}>
                    {item.subItems.map((subItem, subIndex) => {
                      const isActive =
                        window.location.pathname === subItem.path;
                      return (
                        <Link
                          key={`${index}-${subIndex}`}
                          to={subItem.path}
                          className={cn(
                            "flex items-center py-2 px-4 transition-colors rounded-lg",
                            isActive
                              ? "bg-white text-[#014DAF] font-semibold"
                              : "text-white/70 hover:bg-blue-900 hover:text-white",
                            collapsed ? "justify-center" : ""
                          )}
                        >
                          <subItem.icon
                            size={18}
                            className={cn(
                              "min-w-5",
                              isActive ? "text-[#014DAF]" : "text-inherit"
                            )}
                          />
                          {!collapsed && (
                            <span className="ml-3">{subItem.label}</span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              // Render regular menu item
              <Link
                key={index}
                to={item.path}
                className={cn(
                  "flex items-center py-2 px-4 transition-colors rounded-lg",
                  window.location.pathname === item.path
                    ? "bg-white text-[#014DAF] font-semibold"
                    : "text-white/70 hover:bg-blue-900 hover:text-white",
                  collapsed ? "justify-center" : ""
                )}
              >
                <item.icon
                  size={18}
                  className={cn(
                    "min-w-5",
                    window.location.pathname === item.path
                      ? "text-[#014DAF]"
                      : "text-inherit"
                  )}
                />
                {!collapsed && <span className="ml-3">{item.label}</span>}
              </Link>
            )
          )}
        </nav>
      </div>

      <div className="py-4">
        <Link
          to="/logout"
          className={cn(
            "flex items-center py-2 px-4 text-white/70 hover:bg-blue-900 hover:text-white transition-colors rounded-md",
            collapsed ? "justify-center" : ""
          )}
        >
          <LogOut size={18} className="min-w-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Link>
      </div>

      <div
        className={cn(
          "p-2 text-xs text-white/30 text-start",
          collapsed && "hidden"
        )}
      >
        <p className="my-4 ml-1">POWERED BY</p>
        <img src="/cardinfra.png" alt="card-infra-logo" className="w-[93px]" />
      </div>
    </aside>
  );
};

export default Sidebar;
