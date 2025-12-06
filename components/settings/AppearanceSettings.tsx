"use client";

import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { Moon, Sun, Monitor } from "lucide-react";
import { useEffect, useState } from "react";

export function AppearanceSettings() {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Initial check
        if (document.documentElement.classList.contains("dark")) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme);
        const root = document.documentElement;
        if (newTheme === "dark") {
            root.classList.add("dark");
        } else if (newTheme === "light") {
            root.classList.remove("dark");
        } else {
            // Auto/System
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                root.classList.add('dark');
            } else {
                root.classList.remove('dark');
            }
        }
    };

    return (
        <Card className="p-6">
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Appearance</h3>
                <p className="text-sm text-muted-foreground">Customize your interface experience.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                    onClick={() => toggleTheme("auto")}
                    className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-3",
                        theme === "auto" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    )}
                >
                    <Monitor className="size-6" />
                    <div className="text-center">
                        <div className="font-medium text-sm">System</div>
                        <div className="text-xs text-muted-foreground">Match device</div>
                    </div>
                </button>

                <button
                    onClick={() => toggleTheme("light")}
                    className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-3",
                        theme === "light" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    )}
                >
                    <Sun className="size-6" />
                    <div className="text-center">
                        <div className="font-medium text-sm">Light</div>
                        <div className="text-xs text-muted-foreground">MinimalUI</div>
                    </div>
                </button>

                <button
                    onClick={() => toggleTheme("dark")}
                    className={cn(
                        "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all gap-3",
                        theme === "dark" ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                    )}
                >
                    <Moon className="size-6" />
                    <div className="text-center">
                        <div className="font-medium text-sm">Dark</div>
                        <div className="text-xs text-muted-foreground">High-contrast</div>
                    </div>
                </button>
            </div>
        </Card>
    );
}
