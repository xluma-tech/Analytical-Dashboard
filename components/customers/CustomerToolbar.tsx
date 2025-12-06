"use client";

import { Button } from "@/components/ui/Button";
import { Search, Filter, SlidersHorizontal, Download } from "lucide-react";

export function CustomerToolbar() {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-surface p-4 rounded-2xl border border-border">
            <div className="relative flex-1 w-full md:max-w-md">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <input
                    type="text"
                    placeholder="Search customers, companies, or email..."
                    className="h-10 w-full rounded-xl border border-border bg-background pl-9 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <div className="flex items-center gap-2 mr-2">
                    <span className="text-sm text-muted-foreground">Segment:</span>
                    <select className="h-9 rounded-lg border border-border bg-background text-sm px-2 focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>All</option>
                        <option>Enterprise</option>
                        <option>Growth</option>
                        <option>Trial</option>
                        <option>Churn Risk</option>
                    </select>
                </div>

                <div className="flex items-center gap-2 mr-2">
                    <span className="text-sm text-muted-foreground">Status:</span>
                    <select className="h-9 rounded-lg border border-border bg-background text-sm px-2 focus:outline-none focus:ring-1 focus:ring-primary">
                        <option>All</option>
                        <option>Active</option>
                        <option>At Risk</option>
                        <option>Cancelled</option>
                    </select>
                </div>

                <Button variant="outline" size="sm" className="h-10 w-10 p-0 md:w-auto md:px-4">
                    <SlidersHorizontal size={16} className="md:mr-2" />
                    <span className="hidden md:inline">More Filters</span>
                </Button>
                <Button variant="outline" size="sm" className="h-10 w-10 p-0">
                    <Download size={16} />
                </Button>
            </div>
        </div>
    );
}
