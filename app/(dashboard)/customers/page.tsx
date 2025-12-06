"use client";

import { CustomerToolbar } from "@/components/customers/CustomerToolbar";
import { CustomerCard } from "@/components/customers/CustomerCard";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

const contacts = [
    {
        name: "Adriana Artley",
        role: "Marketing Director",
        company: "Marost",
        segment: "Enterprise",
        avatarSeed: "adriana",
        nextStep: "Schedule discovery call",
        nextStepAt: "2025-03-28T14:00:00Z",
        channels: ["email", "call", "video"]
    },
    {
        name: "Bruce Colborn",
        role: "VP Revenue",
        company: "Orton Labs",
        segment: "Growth",
        avatarSeed: "bruce",
        nextStep: "Share Q2 forecast dashboard",
        nextStepAt: "2025-03-21T16:30:00Z",
        highlighted: true,
        pinned: true,
        channels: ["email", "chat"]
    },
    {
        name: "Bella Carr-Gomm",
        role: "Head of Ops",
        company: "Futura Bank",
        segment: "Enterprise",
        avatarSeed: "bella",
        nextStep: "Review SLA changes",
        nextStepAt: "2025-03-19T11:00:00Z",
        channels: ["email", "call"]
    },
    {
        name: "Cade Carlyle",
        role: "Product Lead",
        company: "NeonPay",
        segment: "Trial",
        avatarSeed: "cade",
        nextStep: "Activate trial extension",
        nextStepAt: "2025-03-18T09:30:00Z",
        channels: ["chat"]
    }
];

export default function CustomersPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
                    <p className="text-muted-foreground">Manage relationships and track engagement.</p>
                </div>
                <Button variant="primary" className="gap-2">
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
