"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CreditCard, AlertTriangle, UserPlus, Zap } from "lucide-react";

interface ActivityItem {
    time: string;
    type: "payment" | "alert" | "user" | "integration";
    label: string;
    status: "success" | "warning" | "info";
}

const activities: ActivityItem[] = [
    { time: "09:42", type: "payment", label: "USD 12,480 settled to primary wallet.", status: "success" },
    { time: "09:15", type: "alert", label: "Unusual churn detected in EMEA segment.", status: "warning" },
    { time: "08:50", type: "user", label: 'Cynthia added a new workspace: "Orton Labs".', status: "info" },
    { time: "08:18", type: "integration", label: "HubSpot sync completed for 1,204 contacts.", status: "success" },
];

const iconMap = {
    payment: CreditCard,
    alert: AlertTriangle,
    user: UserPlus,
    integration: Zap,
};

const colorMap = {
    success: "text-success bg-success/10",
    warning: "text-warning bg-warning/10",
    info: "text-primary bg-primary/10",
};

export function ActivityFeed() {
    return (
        <Card className="h-full">
            <div className="p-6 border-b border-border">
                <h3 className="font-semibold text-lg">Recent Activity</h3>
            </div>
            <div className="p-6 space-y-6">
                {activities.map((item, index) => {
                    const Icon = iconMap[item.type];
                    return (
                        <div key={index} className="flex gap-4">
                            <div className={`mt-1 h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${colorMap[item.status]}`}>
                                <Icon size={14} />
                            </div>
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{item.label}</p>
                                <p className="text-xs text-muted-foreground">{item.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Card>
    );
}
