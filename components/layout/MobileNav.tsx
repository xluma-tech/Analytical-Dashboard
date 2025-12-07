"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { MENU_SECTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function MobileNav() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [expandedGroups, setExpandedGroups] = useState<string[]>(["dashboards", "applications"]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Close on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // Prevent scrolling when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [open]);

    const toggleGroup = (id: string) => {
        setExpandedGroups(prev =>
            prev.includes(id) ? prev.filter(g => g !== id) : [...prev, id]
        );
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="md:hidden p-2 text-foreground hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors"
                aria-label="Open Menu"
            >
                <Menu className="size-6" />
            </button>

            {mounted && createPortal(
                <AnimatePresence>
                    {open && (
                        <>
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setOpen(false)}
                                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                className="fixed top-0 left-0 bottom-0 w-[300px] bg-surface dark:bg-[#0C121D] border-r border-border dark:border-white/5 z-[1000] flex flex-col shadow-2xl"
                            >
                                {/* Header */}
                                <div className="h-24 flex items-center justify-between px-6 shrink-0 border-b border-border dark:border-white/5 bg-surface dark:bg-[#0C121D]">
                                    <div className="flex items-center gap-4">
                                        <div className="size-10 relative flex items-center justify-center">
                                            <Image
                                                src="/assets/logo.jpg"
                                                alt="Xluma Logo"
                                                width={40}
                                                height={40}
                                                className="object-contain dark:mix-blend-screen mix-blend-multiply dark:filter-none filter invert contrast-150 scale-125"
                                            />
                                        </div>
                                        <span className="font-bold text-xl tracking-tight text-foreground dark:text-white font-sans">
                                            Xluma
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setOpen(false)}
                                        className="p-2 -mr-2 text-muted-foreground hover:text-foreground dark:hover:text-white"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Nav Items */}
                                <div className="flex-1 py-6 px-4 overflow-y-auto bg-surface dark:bg-[#0C121D]">
                                    <div className="space-y-8">
                                        {MENU_SECTIONS.map((section, idx) => (
                                            <div key={idx} className="space-y-2">
                                                <div className="px-2 text-[11px] font-bold text-primary dark:text-[#00F0FF] uppercase tracking-[0.2em] font-sans">
                                                    {section.title}
                                                </div>

                                                <div className="space-y-1">
                                                    {section.groups.map((group: any, gIdx) => {
                                                        // Direct Link
                                                        if (group.href) {
                                                            const isActive = pathname === group.href;
                                                            const Icon = group.icon;
                                                            return (
                                                                <Link
                                                                    key={gIdx}
                                                                    href={group.href}
                                                                    className={cn(
                                                                        "flex items-center gap-3 px-3 py-2.5 rounded-lg group transition-all",
                                                                        isActive
                                                                            ? "bg-primary/10 dark:bg-white/5 text-foreground dark:text-white"
                                                                            : "text-muted-foreground hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-foreground dark:hover:text-white"
                                                                    )}
                                                                >
                                                                    <Icon size={18} className={cn(isActive ? "text-primary dark:text-[#00F0FF]" : "text-muted-foreground group-hover:text-primary dark:group-hover:text-white")} />
                                                                    <span className="text-sm font-medium">{group.label}</span>
                                                                </Link>
                                                            );
                                                        }

                                                        // Collapsible Group
                                                        const isExpanded = expandedGroups.includes(group.id);
                                                        const hasActiveChild = group.items?.some((i: any) => i.href === pathname);
                                                        const GroupIcon = group.icon;

                                                        return (
                                                            <div key={group.id} className="select-none">
                                                                <div
                                                                    onClick={() => toggleGroup(group.id)}
                                                                    className={cn(
                                                                        "flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer group transition-all",
                                                                        isExpanded || hasActiveChild
                                                                            ? "bg-primary/5 dark:bg-white/5 text-foreground dark:text-white"
                                                                            : "text-muted-foreground hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-foreground dark:hover:text-white"
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
                                                                            <div className="pl-4 mt-1 space-y-1">
                                                                                {group.items.map((item: any) => {
                                                                                    const isActive = pathname === item.href;
                                                                                    return (
                                                                                        <Link
                                                                                            key={item.href}
                                                                                            href={item.href}
                                                                                            className={cn(
                                                                                                "block py-2 pl-9 pr-4 rounded-lg text-sm transition-all relative",
                                                                                                isActive
                                                                                                    ? "text-primary dark:text-[#00F0FF] font-medium bg-primary/5 dark:bg-[#00F0FF]/10"
                                                                                                    : "text-muted-foreground/80 hover:text-foreground dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5"
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
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}
