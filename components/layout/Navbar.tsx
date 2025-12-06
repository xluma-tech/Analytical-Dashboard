"use client";

import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <header className="sticky top-0 z-40 w-full height-[72px] border-b border-border bg-background/80 backdrop-blur-md">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-4">
                    <h1 className="text-xl font-semibold text-foreground">Overview</h1>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative hidden md:block">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="h-10 w-64 rounded-xl border border-border bg-surface pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>

                    <Button variant="ghost" size="sm" className="rounded-full w-10 h-10 p-0">
                        <Bell className="h-5 w-5" />
                    </Button>

                    <Button variant="gradient-border" size="sm">
                        Upgrade Plan
                    </Button>

                    <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-primary to-purple-500" />
                </div>
            </div>
        </header>
    );
}
