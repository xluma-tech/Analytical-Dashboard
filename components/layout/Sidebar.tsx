"use client";

import { cn } from "@/lib/utils";
import {
    ChevronDown,
    ChevronRight,
    Plus,
    Menu
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from "framer-motion";
import { MENU_SECTIONS } from "@/lib/constants";

const Plan3D = dynamic(() => import('@/components/canvas/Plan3D'), {
    ssr: false
});

export function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const pathname = usePathname();
    const [expandedGroups, setExpandedGroups] = useState<string[]>(["dashboards", "applications"]);

    const toggleGroup = (id: string) => {
        setExpandedGroups(prev =>
            prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
        );
    };

    return (
        <aside
            className={cn(
                "hidden md:flex relative flex-col border-r border-border dark:border-white/5 bg-surface dark:bg-[#0C121D] backdrop-blur-2xl transition-all duration-300 h-screen sticky top-0 shadow-strong z-50",
                collapsed ? "w-20" : "w-72"
            )}
        >
            {/* Header / Logo */}
            <div className="h-24 flex items-center justify-between px-6 shrink-0 relative group/header">
                <div className={cn("flex items-center w-full", collapsed ? "justify-center" : "")}>
                    <div className="size-12 relative shrink-0 flex items-center justify-center group/logo">
                        {/* Glow effect behind the logo */}
                        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-500" />

                        <Image
                            src="/assets/logo.jpg"
                            alt="Xluma Logo"
                            width={48}
                            height={48}
                            className="object-contain dark:mix-blend-screen mix-blend-multiply dark:filter-none filter invert contrast-150 scale-125"
                        />
                    </div>

                    {!collapsed && (
                        <div className="flex-1 ml-4 flex items-center justify-between">
                            <span className="font-bold text-2xl tracking-tight text-foreground dark:text-white font-sans bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 dark:from-white dark:to-white/70">
                                Xluma
                            </span>
                            <button className="flex items-center gap-1 text-[10px] bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 px-2 py-1.5 rounded-full text-muted-foreground transition-colors border border-black/5 dark:border-white/5 font-medium uppercase tracking-wide">
                                <Plus size={10} /> Add
                            </button>
                        </div>
                    )}
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={cn(
                        "absolute -right-3 top-1/2 -translate-y-1/2 size-6 bg-surface-alt border border-white/10 rounded-full flex items-center justify-center text-muted-foreground hover:text-white hover:border-[#00F0FF] transition-all z-20",
                        collapsed ? "right-1/2 translate-x-1/2 top-20" : "opacity-0 group-hover/header:opacity-100"
                    )}
                >
                    <Menu size={14} />
                </button>
            </div>

            {/* Nav */}
            <div className="flex-1 py-4 px-6 space-y-8 overflow-y-auto scrollbar-hide">
                {MENU_SECTIONS.map((section, idx) => (
                    <div key={idx} className={cn("space-y-4", collapsed ? "hidden" : "block")}>
                        <div className="text-[11px] font-bold text-[#00F0FF] uppercase tracking-[0.2em] font-sans">
                            {section.title}
                        </div>

                        <div className="space-y-1">
                            {section.groups.map((group: any, gIdx) => {
                                // Check if it's a simple link (has href)
                                if (group.href) {
                                    const isActive = pathname === group.href;
                                    const Icon = group.icon;
                                    return (
                                        <Link
                                            key={gIdx}
                                            href={group.href}
                                            className={cn(
                                                "flex items-center gap-3 px-0 py-2 group transition-colors",
                                                isActive ? "text-foreground dark:text-white" : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                                            )}
                                        >
                                            <Icon size={18} className={cn(isActive ? "text-primary dark:text-[#00F0FF]" : "text-muted-foreground group-hover:text-primary dark:group-hover:text-white")} />
                                            <span className="text-sm font-medium">{group.label}</span>
                                        </Link>
                                    );
                                }

                                // It's a collapsible group and has items
                                const isExpanded = expandedGroups.includes(group.id);
                                const hasActiveChild = group.items?.some((i: any) => i.href === pathname);
                                const GroupIcon = group.icon;

                                return (
                                    <div key={group.id} className="select-none">
                                        <div
                                            onClick={() => toggleGroup(group.id)}
                                            className={cn(
                                                "flex items-center justify-between py-2 cursor-pointer group transition-colors",
                                                isExpanded || hasActiveChild ? "text-foreground dark:text-white" : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <GroupIcon size={18} className={cn((isExpanded || hasActiveChild) ? "text-primary dark:text-[#00F0FF]" : "text-muted-foreground group-hover:text-primary dark:group-hover:text-white")} />
                                                <span className="text-sm font-medium">{group.label}</span>
                                            </div>
                                            <ChevronDown
                                                size={14}
                                                className={cn("transition-transform duration-200", isExpanded ? "rotate-180" : "")}
                                            />
                                        </div>

                                        <AnimatePresence initial={false}>
                                            {isExpanded && group.items && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="overflow-hidden"
                                                >
                                                    <div className="relative pl-4 mt-1 space-y-1 border-l border-white/10 ml-[23px] pb-2">
                                                        {group.items.map((item: any) => {
                                                            const isActive = pathname === item.href;
                                                            return (
                                                                <Link
                                                                    key={item.href}
                                                                    href={item.href}
                                                                    className={cn(
                                                                        "block py-2 pl-4 text-sm transition-all relative",
                                                                        isActive
                                                                            ? "text-primary dark:text-[#00F0FF] font-medium"
                                                                            : "text-muted-foreground/60 hover:text-foreground dark:hover:text-white"
                                                                    )}
                                                                >
                                                                    {item.label}
                                                                </Link>
                                                            )
                                                        })}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}

                {/* Collapsed View: Flattened Icons */}
                {collapsed && (
                    <div className="flex flex-col items-center gap-4 pt-4 w-full">
                        {MENU_SECTIONS.map((section, sIdx) => (
                            <div key={sIdx} className="w-full flex flex-col items-center border-b border-white/5 pb-4 mb-4 last:border-0">
                                {section.groups.flatMap((group: any) => {
                                    if (group.items) {
                                        return group.items.map((item: any) => ({ ...item, isGroupItem: true }));
                                    }
                                    return [group]; // It's a direct link item
                                }).map((item: any, i) => {
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={i}
                                            href={item.href}
                                            title={item.label}
                                            className={cn(
                                                "size-10 flex items-center justify-center rounded-xl transition-all duration-300 relative group",
                                                isActive
                                                    ? "bg-primary/10 text-[#00F0FF] shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                                                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                                            )}
                                        >
                                            <Icon size={20} />
                                            {isActive && <div className="absolute right-2 top-2 size-1.5 bg-[#00F0FF] rounded-full" />}
                                        </Link>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Plan Card */}
            {!collapsed && (
                <div className="p-6 shrink-0 relative z-20">
                    <div className="relative h-48 rounded-2xl overflow-hidden bg-black border border-white/10 group shadow-lg">
                        <div className="absolute inset-0 opacity-80 mix-blend-screen">
                            <Plan3D />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                            <h3 className="text-lg font-bold text-white mb-2 leading-tight">Professional Plan</h3>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-muted-foreground">Active until Dec 2025</span>
                                <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                    <ChevronRight size={14} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </aside>
    );
}
