"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Plus, MoreVertical, Paperclip, MessageSquare, Calendar } from "lucide-react";

const projects = [
    {
        title: "Neon Branding",
        client: "Aurora Tech",
        status: "In Progress",
        completion: 65,
        deadline: "Nov 24",
        team: ["/avatars/1.png", "/avatars/2.png", "/avatars/3.png"],
        color: "bg-primary",
        brief: "Rebranding for a fintech startup focusing on Gen Z."
    },
    {
        title: "Dashboard UI Kit",
        client: "Internal",
        status: "Review",
        completion: 90,
        deadline: "Oct 12",
        team: ["/avatars/4.png", "/avatars/5.png"],
        color: "bg-accent",
        brief: "Comprehensive dark mode dashboard system."
    },
    {
        title: "Mobile App Redesign",
        client: "Vortex Inc",
        status: "Planning",
        completion: 25,
        deadline: "Dec 01",
        team: ["/avatars/6.png", "/avatars/1.png"],
        color: "bg-yellow-400",
        brief: "UX audit and visual overhaul for iOS app."
    },
    {
        title: "Marketing Website",
        client: "Solaris",
        status: "Completed",
        completion: 100,
        deadline: "Sep 30",
        team: ["/avatars/2.png", "/avatars/3.png", "/avatars/5.png"],
        color: "bg-success",
        brief: "Landing page with 3D interactions and WebGL."
    },
    {
        title: "Q4 Financial Report",
        client: "Finance Dept",
        status: "In Progress",
        completion: 45,
        deadline: "Oct 30",
        team: ["/avatars/3.png"],
        color: "bg-primary",
        brief: "Data visualization and investor deck preparation."
    },
    {
        title: "User Testing",
        client: "Product",
        status: "Planning",
        completion: 10,
        deadline: "Nov 15",
        team: ["/avatars/4.png", "/avatars/2.png"],
        color: "bg-accent",
        brief: "Conducting user interviews for the new feature set."
    }
];

export default function ProjectsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Projects</h1>
                    <p className="text-muted-foreground mt-1">Track progress and manage team workload.</p>
                </div>
                <Button variant="primary" className="shadow-neon">
                    <Plus className="size-4 mr-2" /> New Project
                </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <Card key={i} className="hover:border-primary/50 transition-colors group cursor-pointer relative overflow-hidden">
                        {/* Top Decoration */}
                        <div className={`absolute top-0 left-0 w-full h-1 ${project.color}`} />

                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <Badge variant="neutral" className="mb-2">{project.client}</Badge>
                                <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{project.title}</h3>
                            </div>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                                <MoreVertical className="size-4" />
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[40px]">
                            {project.brief}
                        </p>

                        {/* Progress */}
                        <div className="mb-6">
                            <div className="flex justify-between text-xs mb-2">
                                <span className={project.completion === 100 ? "text-success" : "text-muted-foreground"}>Progress</span>
                                <span className="font-mono">{project.completion}%</span>
                            </div>
                            <div className="h-1.5 w-full bg-surface-alt rounded-full overflow-hidden">
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ${project.color}`}
                                    style={{ width: `${project.completion}%` }}
                                />
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex -space-x-2">
                                {project.team.map((src, idx) => (
                                    <div key={idx} className="size-8 rounded-full border-2 border-surface bg-surface-alt" />
                                    // Placeholder for avatars if images fail
                                ))}
                            </div>

                            <div className="flex items-center gap-3 text-muted-foreground text-xs">
                                <div className="flex items-center gap-1 hover:text-white transition-colors">
                                    <Paperclip className="size-3.5" /> 2
                                </div>
                                <div className="flex items-center gap-1 hover:text-white transition-colors">
                                    <MessageSquare className="size-3.5" /> 5
                                </div>
                                <div className={`flex items-center gap-1 font-medium ${project.completion === 100 ? 'text-success' : 'text-accent'}`}>
                                    <Calendar className="size-3.5" /> {project.deadline}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
