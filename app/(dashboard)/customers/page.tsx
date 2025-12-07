"use client";

import { CustomerToolbar } from "@/components/customers/CustomerToolbar";
import { CustomerCard } from "@/components/customers/CustomerCard";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

const contacts = [
    {
        name: "Sarah Chen",
        role: "CTO",
        company: "TechStart Inc",
        segment: "SMB",
        avatarSeed: "sarah",
        nextStep: "Integration Review",
        nextStepAt: "2025-03-28T14:00:00Z",
        channels: ["email", "video"]
    },
    {
        name: "Michael Ross",
        role: "VP Engineering",
        company: "Global Bank",
        segment: "Enterprise",
        avatarSeed: "michael",
        nextStep: "Security Audit",
        nextStepAt: "2025-03-21T16:30:00Z",
        highlighted: true,
        pinned: true,
        channels: ["email", "call"]
    },
    {
        name: "Elena Rodriguez",
        role: "Product Owner",
        company: "Logistics Pro",
        segment: "Mid-Market",
        avatarSeed: "elena",
        nextStep: "Feature Request Sync",
        nextStepAt: "2025-03-19T11:00:00Z",
        channels: ["slack", "email"]
    },
    {
        name: "David Kim",
        role: "Founder",
        company: "Acme Corp",
        segment: "Startup",
        avatarSeed: "david",
        nextStep: "Onboarding Check-in",
        nextStepAt: "2025-03-18T09:30:00Z",
        channels: ["video"]
    }
];

export default function CustomersPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Customers</h2>
                    <p className="text-muted-foreground text-sm md:text-base">Manage relationships and track engagement.</p>
                </div>
                <Button variant="primary" className="gap-2 w-full md:w-auto">
                    <Plus size={16} />
                    Add Customer
                </Button>
            </div>

            <CustomerToolbar />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {contacts.map((contact, i) => (
                    <CustomerCard key={i} contact={contact} />
                ))}
            </div>
        </div>
    );
}
