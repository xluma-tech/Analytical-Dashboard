"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface Plan {
    id: string;
    name: string;
    price: number;
    period: string;
    highlighted: boolean;
    badge?: string;
    features: string[];
}

const plans: Plan[] = [
    {
        id: "free",
        name: "Free",
        price: 0,
        period: "month",
        highlighted: false,
        features: ["Up to 5 seats", "Up to 50k events monthly", "1 connected account", "API access (sandbox)"],
    },
    {
        id: "pro",
        name: "Pro",
        price: 36,
        period: "month",
        highlighted: true,
        badge: "Most popular",
        features: [
            "Up to 20 seats",
            "Up to 1M events monthly",
            "Unlimited workspaces",
            "Advanced anomaly detection",
            "Priority email & chat support",
        ],
    },
    {
        id: "team",
        name: "Team",
        price: 64,
        period: "month",
        highlighted: false,
        features: [
            "Unlimited seats",
            "Custom data retention",
            "Dedicated CSM",
            "SAML & advanced SSO",
            "Onboarding & training sessions",
        ],
    },
];

export function PricingPlans() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
                <Card
                    key={plan.id}
                    variant={plan.highlighted ? "glass" : "default"}
                    className={cn(
                        "p-8 relative flex flex-col transition-transform hover:-translate-y-2 duration-300",
                        plan.highlighted ? "border-primary/50 shadow-primary/10 shadow-2xl" : "border-border"
                    )}
                >
                    {plan.badge && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge variant="default" className="bg-primary text-white border-none shadow-lg px-3 py-1 text-sm">
                                {plan.badge}
                            </Badge>
                        </div>
                    )}

                    <div className="text-center mb-8">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-4xl font-bold">${plan.price}</span>
                            <span className="text-muted-foreground text-sm">/ {plan.period}</span>
                        </div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                                    <Check className="size-3 text-primary" />
                                </div>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <Button
                        variant={plan.highlighted ? "primary" : "outline"}
                        className="w-full relative overflow-hidden group"
                    >
                        <span className="relative z-10">{plan.price === 0 ? "Get Started" : "Upgrade Now"}</span>
                        {plan.highlighted && <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />}
                    </Button>
                </Card>
            ))}
        </div>
    );
}
