"use client";

import { Badge } from "@/components/ui/Badge";
import { MoreHorizontal } from "lucide-react";
import { Card } from "@/components/ui/Card";

const companies = [
    { name: "Acme Corp", industry: "Manufacturing", location: "Detroit, USA", status: "Active", lastInteraction: "Just now", users: "1.2k" },
    { name: "Global Bank", industry: "Finance", location: "London, UK", status: "Active", lastInteraction: "2 hours ago", users: "8.5k" },
    { name: "TechStart Inc", industry: "Technology", location: "San Francisco, USA", status: "Review", lastInteraction: "5 hours ago", users: "450" },
    { name: "MediCare Plus", industry: "Healthcare", location: "Boston, USA", status: "Pending", lastInteraction: "1 day ago", users: "2.1k" },
    { name: "Logistics Pro", industry: "Transportation", location: "Berlin, DE", status: "Active", lastInteraction: "1 day ago", users: "3.4k" },
    { name: "EduLearn Systems", industry: "Education", location: "Toronto, CA", status: "Review", lastInteraction: "2 days ago", users: "900" },
    { name: "Retail Giant", industry: "Retail", location: "New York, USA", status: "Active", lastInteraction: "3 days ago", users: "15k" },
    { name: "Green Energy", industry: "Energy", location: "Oslo, NO", status: "Active", lastInteraction: "4 days ago", users: "600" },
    { name: "SecureNet", industry: "Security", location: "Tel Aviv, IL", status: "Pending", lastInteraction: "1 week ago", users: "120" },
    { name: "Foodie App", industry: "Hospitality", location: "Paris, FR", status: "Active", lastInteraction: "1 week ago", users: "5.6k" },
    { name: "Legal Eagles", industry: "Legal", location: "Chicago, USA", status: "Review", lastInteraction: "2 weeks ago", users: "80" },
];

export function CompaniesTable() {
    return (
        <Card className="overflow-hidden border-white/5 bg-surface-deep/50 backdrop-blur-md p-0 h-[400px]">
            <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border dark:border-white/5 flex justify-between items-center flex-shrink-0">
                    <div>
                        <h3 className="font-bold text-lg text-foreground dark:text-white">All Companies</h3>
                        <p className="text-sm text-muted-foreground">Manage client portfolios and status.</p>
                    </div>
                    <Badge variant="outline" className="border-neon-cyan/20 text-neon-cyan bg-neon-cyan/5">10 Active</Badge>
                </div>

                <div className="overflow-auto flex-1 custom-scrollbar">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-surface-alt/50 text-muted-foreground sticky top-0 z-10 backdrop-blur-md">
                            <tr>
                                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider text-foreground dark:text-muted-foreground">Company Name</th>
                                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider hidden md:table-cell text-foreground dark:text-muted-foreground">Industry</th>
                                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider hidden lg:table-cell text-foreground dark:text-muted-foreground">Location</th>
                                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider text-foreground dark:text-muted-foreground">Status</th>
                                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider hidden xl:table-cell text-foreground dark:text-muted-foreground">Last Interaction</th>
                                <th className="px-6 py-4 font-medium uppercase text-[10px] tracking-wider text-right text-foreground dark:text-muted-foreground">Users</th>
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border dark:divide-white/5">
                            {companies.map((company, i) => (
                                <tr key={i} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
                                    <td className="px-6 py-4 font-medium text-foreground flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-primary/10 dark:bg-surface-alt flex items-center justify-center text-xs font-bold text-primary dark:text-muted-foreground group-hover:text-white group-hover:bg-primary/80 transition-all">
                                            {company.name.slice(0, 2).toUpperCase()}
                                        </div>
                                        <span className="text-foreground dark:text-white">{company.name}</span>
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
                                                            'text-muted-foreground border-border dark:border-white/10'
                                                }
                                            `}
                                        >
                                            {company.status}
                                        </Badge>
                                    </td>
                                    <td className="px-6 py-4 text-muted-foreground hidden xl:table-cell">{company.lastInteraction}</td>
                                    <td className="px-6 py-4 text-right font-mono text-xs text-foreground dark:text-white">{company.users}</td>
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
            </div>
        </Card>
    );
}
