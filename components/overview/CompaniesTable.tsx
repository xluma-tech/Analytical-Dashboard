"use client";

import { Badge } from "@/components/ui/Badge";
import { MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/Card";

const companies = [
    { name: "NovaCore Systems", industry: "Technology", location: "San Francisco, USA", status: "Active", lastInteraction: "About 2 hours ago", users: "100k+" },
    { name: "Helix Financial Group", industry: "Banking", location: "London, UK", status: "Active", lastInteraction: "About 12 hours ago", users: "450k+" },
    { name: "BluePeak Analytics", industry: "SaaS", location: "Berlin, DE", status: "Active", lastInteraction: "1 day ago", users: "20k+" },
    { name: "Ventus Pharmaceuticals", industry: "Healthcare", location: "Zurich, CH", status: "Review", lastInteraction: "2 days ago", users: "5k+" },
    { name: "Capital Flow", industry: "Fintech", location: "New York, USA", status: "Pending", lastInteraction: "3 days ago", users: "1k+" },
    { name: "Quantum Trade Network", industry: "Crypto", location: "Singapore, SG", status: "Active", lastInteraction: "1 hour ago", users: "2M+" },
    { name: "Archer Mobility", industry: "Automotive", location: "Detroit, USA", status: "Inactive", lastInteraction: "5 days ago", users: "850+" },
    { name: "IronGate Capital", industry: "Investment", location: "Toronto, CA", status: "Active", lastInteraction: "4 hours ago", users: "12k+" },
    { name: "PulseWave Innovations", industry: "MedTech", location: "Boston, USA", status: "Review", lastInteraction: "1 week ago", users: "300+" },
    { name: "Solaris Energy Labs", industry: "Energy", location: "Madrid, ES", status: "Active", lastInteraction: "Just now", users: "50k+" },
];

export function CompaniesTable() {
    return (
        <Card className="overflow-hidden border-white/5 bg-surface-deep/50 backdrop-blur-md p-0 h-full flex flex-col">
            <div className="p-6 border-b border-white/5 flex justify-between items-center">
                <div>
                    <h3 className="font-bold text-lg text-white">All Companies</h3>
                    <p className="text-sm text-muted-foreground">Manage client portfolios and status.</p>
                </div>
                <Badge variant="outline" className="border-neon-cyan/20 text-neon-cyan bg-neon-cyan/5">10 Active</Badge>
            </div>

            <div className="overflow-auto flex-1 scrollbar-hide">
                <table className="w-full text-sm text-left">
                    <thead className="bg-surface-alt/50 text-muted-foreground sticky top-0 z-10 backdrop-blur-md">
                        <tr>
                            <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider">Company Name</th>
                            <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider hidden md:table-cell">Industry</th>
                            <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider hidden lg:table-cell">Location</th>
                            <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider">Status</th>
                            <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider hidden xl:table-cell">Last Interaction</th>
                            <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider text-right">Users</th>
                            <th className="px-6 py-4"></th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {companies.map((company, i) => (
                            <tr key={i} className="hover:bg-white/5 transition-colors group">
                                <td className="px-6 py-4 font-medium text-foreground flex items-center gap-3">
                                    <div className="size-8 rounded-lg bg-surface-alt flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:text-white group-hover:bg-primary/20 transition-all">
                                        {company.name.slice(0, 2).toUpperCase()}
                                    </div>
                                    <span className="text-white">{company.name}</span>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground hidden md:table-cell">{company.industry}</td>
                                <td className="px-6 py-4 text-muted-foreground hidden lg:table-cell">{company.location}</td>
                                <td className="px-6 py-4">
                                    <Badge
                                        variant="outline"
                                        className={`
                                            ${company.status === 'Active' ? 'text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5' :
                                                company.status === 'Review' ? 'text-warning border-warning/20 bg-warning/5' :
                                                    company.status === 'Pending' ? 'text-neon-purple border-neon-purple/20 bg-neon-purple/5' :
                                                        'text-muted-foreground border-white/10'
                                            }
                                        `}
                                    >
                                        {company.status}
                                    </Badge>
                                </td>
                                <td className="px-6 py-4 text-muted-foreground hidden xl:table-cell">{company.lastInteraction}</td>
                                <td className="px-6 py-4 text-right font-mono text-xs text-white">{company.users}</td>
                                <td className="px-6 py-4 text-right">
                                    <button className="text-muted-foreground hover:text-white transition-colors">
                                        <MoreHorizontal className="size-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
}
