"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Sparkline } from "@/components/charts/Sparkline";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface MetricCardProps {
    label: string;
    value: string;
    change: string;
    trend?: "up" | "down";
    chip?: string;
    chartValues?: number[];
}

export function MetricCard({ label, value, change, trend = "up", chip, chartValues }: MetricCardProps) {
    const isPositive = trend === "up";

    return (
        <Card variant="glass" className="p-5 flex flex-col justify-between min-w-[280px]">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">{label}</p>
                    <h4 className="text-2xl font-bold tracking-tight">{value}</h4>
                </div>
                {chip && <Badge variant="neutral">{chip}</Badge>}
            </div>

            <div>
                {chartValues && (
                    <div className="mb-3 -mx-2">
                        <Sparkline data={chartValues} height={40} color={isPositive ? "#37D493" : "#FF4B6E"} />
                    </div>
                )}

                <div className="flex items-center gap-2">
                    <Badge variant={isPositive ? "success" : "danger"} className="flex gap-1">
                        {isPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                        {change}
                    </Badge>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                </div>
            </div>
        </Card>
    );
}
