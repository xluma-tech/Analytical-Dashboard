"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Plus, Mail, MoreHorizontal, Shield, Code, PenTool, BarChart3, Search } from "lucide-react";

const teamFilters = ["All Members", "Engineering", "Design", "Product", "Marketing"];

const members = [
    { name: "Adam Scott", role: "Product Designer", email: "adam@nova.com", status: "Online", department: "Design", icon: PenTool },
    { name: "Sarah Connor", role: "Lead Engineer", email: "sarah@nova.com", status: "In Meeting", department: "Engineering", icon: Code },
    { name: "Michael Chen", role: "Frontend Dev", email: "mike@nova.com", status: "Offline", department: "Engineering", icon: Code },
    { name: "Emily Watson", role: "Product Manager", email: "emily@nova.com", status: "Online", department: "Product", icon: BarChart3 },
    { name: "David Kim", role: "Marketing Lead", email: "david@nova.com", status: "Online", department: "Marketing", icon: BarChart3 },
    { name: "Jessica Lee", role: "UX Researcher", email: "jess@nova.com", status: "Away", department: "Design", icon: PenTool },
];

export default function TeamPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Team Members</h1>
                    <p className="text-muted-foreground mt-1">Manage access and view team activity.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search members..."
                            className="w-full h-10 pl-9 pr-4 rounded-xl bg-surface-alt/50 border border-border focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all"
                        />
                    </div>
                    <Button variant="primary" className="shadow-neon shrink-0">
                        <Plus className="size-4 md:mr-2" /> <span className="hidden md:inline">Invite Member</span>
                    </Button>
                </div>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {teamFilters.map((filter, i) => (
                    <button
                        key={filter}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0
                                ? "bg-primary text-white shadow-neon"
                                : "bg-surface-alt/50 text-muted-foreground hover:text-white hover:bg-surface-alt"
                            }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {members.map((member, i) => (
                    <Card key={i} className="flex flex-col items-center text-center p-6 hover:border-primary/50 transition-colors group relative overflow-hidden">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="absolute top-4 right-4">
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                                <MoreHorizontal className="size-4" />
                            </Button>
                        </div>

                        <div className="relative mb-4">
                            <div className="size-20 rounded-full bg-surface-alt flex items-center justify-center border-2 border-surface shadow-lg group-hover:scale-105 transition-transform duration-300">
                                {/* Simple Initial Avatar */}
                                <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                                    {member.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div className={`absolute bottom-0 right-1 size-4 rounded-full border-2 border-surface ${member.status === 'Online' ? 'bg-success shadow-[0_0_10px_var(--success)]' :
                                    member.status === 'Away' ? 'bg-warning' : 'bg-muted'
                                }`} />
                        </div>

                        <h3 className="font-bold text-lg">{member.name}</h3>
                        <p className="text-primary text-sm font-medium mb-1">{member.role}</p>
                        <p className="text-muted-foreground text-xs mb-6">{member.email}</p>

                        <div className="flex gap-2 w-full mt-auto">
                            <Button variant="outline" className="flex-1 gap-2 text-xs h-9">
                                <Mail className="size-3.5" /> Message
                            </Button>
                            <Button variant="ghost" className="flex-1 gap-2 text-xs h-9 bg-surface-alt/30">
                                <Shield className="size-3.5" /> Access
                            </Button>
                        </div>
                    </Card>
                ))}

                {/* Add New Card */}
                <button className="flex flex-col items-center justify-center p-6 rounded-3xl border-2 border-dashed border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all group h-full min-h-[280px]">
                    <div className="size-16 rounded-full bg-surface-alt/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Plus className="size-8 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <span className="font-semibold text-muted-foreground group-hover:text-primary transition-colors">Invite New Member</span>
                </button>
            </div>
        </div>
    );
}
