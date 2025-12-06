"use client";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface Company {
    name: string;
    industry: string;
    plan: string;
    mrr: string;
    status: "Active" | "At Risk" | "Trial";
    lastActive: string;
}

const companies: Company[] = [
    { name: "NovaCore Systems", industry: "Fintech", plan: "Enterprise", mrr: "$58,200", status: "Active", lastActive: "2h ago" },
    { name: "Helix Financial Group", industry: "Banking", plan: "Scale", mrr: "$34,900", status: "At Risk", lastActive: "1d ago" },
    { name: "Bluewave Analytics", industry: "SaaS", plan: "Growth", mrr: "$12,340", status: "Active", lastActive: "12m ago" },
    { name: "Vertex PharmaCloud", industry: "Healthcare", plan: "Growth", mrr: "$9,210", status: "Trial", lastActive: "4d ago" },
    { name: "Quantum Trade Network", industry: "Trading", plan: "Enterprise", mrr: "$63,780", status: "Active", lastActive: "6h ago" },
];

export function CompaniesTable() {
    return (
        <Card className="overflow-hidden">
            <div className="p-6 border-b border-border">
                <h3 className="font-semibold text-lg">All Companies</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-surface-alt/50">
                        <tr>
                            <th className="px-6 py-3">Company</th>
                            <th className="px-6 py-3">Industry</th>
                            <th className="px-6 py-3">Plan</th>
                            <th className="px-6 py-3">MRR</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3">Last Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {companies.map((company, index) => (
                            <tr key={index} className="border-b border-border hover:bg-surface-alt/20 transition-colors">
                                <td className="px-6 py-4 font-medium text-foreground">{company.name}</td>
                                <td className="px-6 py-4">{company.industry}</td>
                                <td className="px-6 py-4">{company.plan}</td>
                                <td className="px-6 py-4 font-mono">{company.mrr}</td>
                                <td className="px-6 py-4">
                                    <Badge
                                        variant={
                                            company.status === "Active" ? "success" :
                                                company.status === "At Risk" ? "danger" : "warning"
                                        }
                                    >
                                        {company.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground">{company.lastActive}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
