"use client";

import { Bell, Search, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/Button"; // Matching file casing
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { MobileNav } from "@/components/layout/MobileNav";

export function Navbar() {
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    return (
        <nav className="h-16 md:h-20 px-4 md:px-8 border-b border-border dark:border-white/5 bg-surface/50 dark:bg-surface-deep/50 backdrop-blur-xl sticky top-0 z-40 flex items-center justify-between gap-4">

            <div className="flex items-center gap-4">
                <MobileNav />

                {/* Search */}
                <div className="relative w-full max-w-md hidden md:block">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-10 w-64 rounded-xl border border-white/10 bg-surface/50 pl-9 text-sm text-foreground dark:text-white placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-[#00F0FF] transition-all"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0 text-muted-foreground hover:text-foreground dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5">
                    <Bell className="h-5 w-5" />
                </Button>

                <Button variant="gradient-border" size="sm" className="hidden md:flex">
                    Upgrade Plan
                </Button>

                {/* Profile Section */}
                <div
                    className="relative"
                    onMouseEnter={() => setIsProfileOpen(true)}
                    onMouseLeave={() => setIsProfileOpen(false)}
                >
                    <div className="group relative cursor-pointer">
                        <div className={cn(
                            "h-10 w-10 rounded-full p-[1px] bg-gradient-to-tr from-[#00F0FF] to-[#7000FF] transition-all duration-300",
                            isProfileOpen ? "shadow-[0_0_15px_rgba(0,240,255,0.3)] scale-105" : "hover:scale-105"
                        )}>
                            <div className="h-full w-full rounded-full overflow-hidden bg-black relative">
                                <Image
                                    src="/assets/avatar.png"
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    <div className={cn(
                        "absolute right-0 top-full pt-2 w-56 transition-all duration-200 z-50",
                        isProfileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                    )}>
                        <div className="bg-surface dark:bg-surface-deep/95 backdrop-blur-xl border border-border dark:border-white/10 rounded-2xl p-2 shadow-2xl">
                            <div className="px-3 py-2 border-b border-border dark:border-white/5 mb-1">
                                <p className="text-sm font-semibold text-foreground dark:text-white">Alex Morgan</p>
                                <p className="text-xs text-muted-foreground">Pro Member</p>
                            </div>

                            <Link
                                href="/settings"
                                className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground hover:text-foreground dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-xl transition-colors"
                            >
                                <Settings size={16} />
                                Settings
                            </Link>

                            <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:text-red-600 hover:bg-red-500/10 rounded-xl transition-colors">
                                <LogOut size={16} />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
