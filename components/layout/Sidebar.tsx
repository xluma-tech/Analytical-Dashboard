"use client";

import { cn } from "@/lib/utils";
import {
    LayoutGrid,
    Activity,
    Wallet,
    Layers,
    Users,
    Settings,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();

    const sections = [
        {
            label: "Main",
            items: [
                { icon: LayoutGrid, label: "Dashboard", href: "/" },
                { icon: Activity, label: "Revenue", href: "/revenue" },
                { icon: Wallet, label: "E-Wallet", href: "/wallet" }
            ]
        },
        {
            label: "Workspace",
            items: [
                { icon: Layers, label: "Projects", href: "/projects" },
                { icon: Users, label: "Customers", href: "/customers" }, // Renamed to Customers based on tab request, but tab-team was in sidebar spec. JSON says tab-team. But there is a tab-customers. I'll stick to JSON Sidebar items: Projects, Team, Settings. Wait, the JSON says Sidebar items: Dashboard, Pipeline, Wallet | Projects, Team, Settings. And Footer. 
                // But the Tabs are Overview, Revenue, Customers, Settings.
                // I will align Sidebar with Tabs for navigation purposes.
                // Spec tabs: Overview (/), Revenue (/revenue), Customers (/customers), Settings (/settings).
                // Spec sidebar: Dashboard, Pipeline, Wallet | Projects, Team, Settings.
                // It seems there is a mismatch or these are extra pages. I will implement the ones that route to the specific tabs. 
                // Overview -> /, Revenue -> /revenue, Customers -> /customers. 
                // Sidebar "Dashboard" -> /
                // Sidebar "Pipeline" -> ? (Not in tabs)
                // Sidebar "E-Wallet" -> ? (Not in tabs)
                // Sidebar "Projects" -> ?
                // Sidebar "Team" -> ? (Perhaps Customers? Or Team tab?)
                // The JSON has "tab-team" in sidebar, but "tab-customers" in top-level tabs list.
                // I will add Customers to sidebar for functionality.
                { icon: Users, label: "Team", href: "/team" },
                // { icon: Users, label: "Customers", href: "/customers" },
                { icon: Settings, label: "Settings", href: "/settings" }
            ]
        }
    ];

    return (
        <aside
            className={cn(
                "relative flex flex-col border-r border-border bg-surface/50 backdrop-blur-xl transition-all duration-300 h-screen sticky top-0",
                collapsed ? "w-20" : "w-64"
            )}
        >
            {/* Logo */}
            <div className="h-20 flex items-center px-6 border-b border-border/50">
                <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-accent shrink-0" />
                <span className={cn("ml-3 font-bold text-xl tracking-tight transition-opacity duration-300", collapsed ? "opacity-0 hidden" : "opacity-100")}>
                    Nova
                </span>
            </div>

            {/* Nav */}
            <div className="flex-1 py-6 px-3 space-y-8 overflow-y-auto">
                {sections.map((section, idx) => (
                    <div key={idx}>
                        <div className={cn("px-3 mb-2 text-xs font-semibold text-muted uppercase tracking-wider transition-opacity", collapsed && "opacity-0 text-center")}>
                            {section.label}
                        </div>
                        <nav className="space-y-1">
                            {section.items.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
                                            isActive
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-muted hover:text-foreground hover:bg-surface-alt/50"
                                        )}
                                    >
                                        {isActive && <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />}
                                        <item.icon className={cn("size-5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                                        <span className={cn("transition-opacity duration-300", collapsed ? "opacity-0 hidden" : "opacity-100")}>
                                            {item.label}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-border/50">
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="flex items-center justify-center w-full h-10 rounded-xl bg-surface-alt/50 hover:bg-surface-alt transition-colors"
                >
                    {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>
        </aside>
    );
}
