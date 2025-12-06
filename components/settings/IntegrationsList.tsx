"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

const tools = [
    { name: "HubSpot", status: "connected" },
    { name: "Salesforce", status: "disconnected" },
    { name: "Slack", status: "connected" },
    { name: "Notion", status: "connected" },
    { name: "Zapier", status: "connected" },
];

export function IntegrationsList() {
    return (
        <Card className="p-6">
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Connected Tools</h3>
                <p className="text-sm text-muted-foreground">Syncs automatically every 10 minutes.</p>
            </div>

            <div className="flex flex-wrap gap-8">
                {tools.map((tool) => (
                    <div key={tool.name} className="flex flex-col items-center gap-2 min-w-[80px]">
                        <div className={cn(
                            "h-14 w-14 rounded-2xl flex items-center justify-center text-lg font-bold border-2 transition-all",
                            tool.status === "connected" ? "border-primary bg-primary/10 text-primary" : "border-border bg-surface-alt/50 text-muted-foreground grayscale"
                        )}>
                            {tool.name[0]}
                        </div>
                        <div className="text-sm font-medium text-center">
                            {tool.name}
                        </div>
                        <div className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider">
                            {tool.status === "connected" ? (
                                <span className="text-success flex items-center gap-1">On <CheckCircle2 size={10} /></span>
                            ) : (
                                <span className="text-muted-foreground flex items-center gap-1">Off <Circle size={10} /></span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    );
}
