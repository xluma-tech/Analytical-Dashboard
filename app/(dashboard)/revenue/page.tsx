"use client";

import { Card } from "@/components/ui/Card";
import { KPIGroup } from "@/components/revenue/KPIGroup";
import { RevenueRefundsChart } from "@/components/charts/RevenueRefundsChart";
import { PricingPlans } from "@/components/revenue/PricingPlans";
import { Button } from "@/components/ui/Button";
import { Filter } from "lucide-react";

const revenueData = [
    { name: "W1", revenue: 18200, refunds: 520 },
    { name: "W2", revenue: 19420, refunds: 430 },
    { name: "W3", revenue: 20510, refunds: 610 },
    { name: "W4", revenue: 21290, refunds: 480 },
    { name: "W5", revenue: 22410, refunds: 530 },
    { name: "W6", revenue: 23180, refunds: 450 },
    { name: "W7", revenue: 24630, refunds: 620 },
    { name: "W8", revenue: 25190, refunds: 590 },
    { name: "W9", revenue: 24310, refunds: 510 },
    { name: "W10", revenue: 25980, refunds: 490 },
    { name: "W11", revenue: 26840, refunds: 560 },
    { name: "W12", revenue: 27650, refunds: 530 },
];

export default function RevenuePage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Revenue Performance</h2>
                    <p className="text-muted-foreground text-sm md:text-base">Track projected income, refunds, and subscription health.</p>
                </div>
                <div className="flex items-center gap-2 w-full md:w-auto">
                    <Button variant="outline" size="sm" className="gap-2 flex-1 md:flex-none">
                        <Filter size={14} />
                        Filters
                    </Button>
                    <Button variant="primary" size="sm" className="flex-1 md:flex-none">Download Report</Button>
                </div>
            </div>

            <KPIGroup />

            <Card className="p-4 md:p-6">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-semibold">Revenue vs. Refunds</h3>
                        <p className="text-sm text-muted-foreground">Daily performance (last 30 days)</p>
                    </div>
                </div>
                <RevenueRefundsChart data={revenueData} />
            </Card>

            <section>
                <div className="mb-6">
                    <h3 className="text-2xl font-bold">Plans and Pricing</h3>
                    <p className="text-muted-foreground">Compare active plans and feature distribution</p>
                </div>
                <PricingPlans />
            </section>
        </div>
    );
}
