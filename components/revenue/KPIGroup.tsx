"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface KPIItem {
    label: string;
    value: string;
    delta: string;
    trend: "up" | "down";
}

const kpis: KPIItem[] = [
    { label: "Monthly Recurring Revenue", value: "$482,930", delta: "+8.3%", trend: "up" },
    { label: "Net Revenue Retention", value: "123%", delta: "+3.1%", trend: "up" },
    { label: "Gross Margin", value: "78%", delta: "-1.2%", trend: "down" },
    { label: "Active Subscriptions", value: "3,942", delta: "+264", trend: "up" }, // delta usually % but spec has raw number +264
];

export function KPIGroup() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
                <Card key={index} className="p-6 flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-muted-foreground font-medium mb-2">{kpi.label}</p>
                        <h4 className="text-3xl font-bold tracking-tight">{kpi.value}</h4>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                        <Badge variant={kpi.trend === "up" ? "success" : "danger"} className="flex gap-1">
                            {kpi.trend === "up" ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                            {kpi.delta}
                        </Badge>
                        <span className="text-xs text-muted-foreground">vs last month</span>
                    </div>
                </Card>
            ))}
        </div>
    );
}
