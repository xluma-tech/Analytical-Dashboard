"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Plus, MoreVertical, Paperclip, MessageSquare, Calendar } from "lucide-react";

// Dummy avatars for the people section
const avatars = [
    "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    "https://i.pravatar.cc/150?u=a04258114e29026302d",
    "https://i.pravatar.cc/150?u=a04258114e29026702d",
    "https://i.pravatar.cc/150?u=a04258114e29026708c",
    "https://i.pravatar.cc/150?u=a04258114e29026701d",
];

const projects = [
    {
        title: "API V2 Refactor",
        client: "Engineering",
        status: "In Progress",
        completion: 65,
        deadline: "Nov 24",
        team: [avatars[0], avatars[1], avatars[2]],
        color: "bg-primary",
        brief: "Migrating legacy endpoints to GraphQL for better performance."
    },
    {
        title: "Mobile App Beta",
        client: "Product",
        status: "Review",
        completion: 90,
        deadline: "Oct 12",
        team: [avatars[3], avatars[4]],
        color: "bg-accent",
        brief: "Final polish and QA before public release to App Store."
    },
    {
        title: "Customer Portal",
        client: "Web Team",
        status: "Planning",
        completion: 25,
        deadline: "Dec 01",
        team: [avatars[5], avatars[0]],
        color: "bg-yellow-400",
        brief: "Self-service dashboard for billing and user management."
    },
    {
        title: "Infrastructure Scaling",
        client: "DevOps",
        status: "Completed",
        completion: 100,
        deadline: "Sep 30",
        team: [avatars[1], avatars[2], avatars[4]],
        color: "bg-success",
        brief: "Moved core database to managed cluster with auto-scaling."
    },
    {
        title: "Q4 Roadmap Planning",
        client: "Strategy",
        status: "In Progress",
        completion: 45,
        deadline: "Oct 30",
        team: [avatars[3]],
        color: "bg-primary",
        brief: "Defining OKRs and resource allocation for next quarter."
    },
    {
        title: "Security Audit",
        client: "Security",
        status: "Planning",
        completion: 10,
        deadline: "Nov 15",
        team: [avatars[4], avatars[2]],
        color: "bg-accent",
        brief: "Annual penetration testing and compliance review."
    }
];

export default function ProjectsPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">Projects</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Track progress and manage team workload.</p>
                </div>
                <Button variant="primary" className="shadow-neon w-full md:w-auto">
                    <Plus className="size-4 mr-2" /> New Project
                </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, i) => (
                    <CardContainer key={i} className="inter-var w-full h-full" containerClassName="py-0 block">
                        <CardBody className="bg-surface-deep relative group/card dark:hover:shadow-2xl dark:hover:shadow-primary/[0.1] border-white/5 w-full aspect-square rounded-3xl p-6 border transition-all hover:border-primary/50 flex flex-col justify-between">

                            <div className={`absolute top-0 left-0 w-full h-1 ${project.color} rounded-t-3xl`} />

                            <CardItem translateZ="50" className="w-full mt-2">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <Badge variant="neutral" className="mb-2">{project.client}</Badge>
                                        <h3 className="font-bold text-lg leading-tight group-hover/card:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                                        <MoreVertical className="size-4" />
                                    </Button>
                                </div>
                            </CardItem>

                            <CardItem as="p" translateZ="60" className="text-sm text-muted-foreground mb-6 line-clamp-2 min-h-[40px] w-full">
                                {project.brief}
                            </CardItem>

                            {/* Progress */}
                            <CardItem translateZ="40" className="w-full mb-6">
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
                            </CardItem>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto w-full">
                                <CardItem translateZ="20" className="flex -space-x-2">
                                    {project.team.map((src, idx) => (
                                        <img
                                            key={idx}
                                            src={src}
                                            alt="Team member"
                                            className="size-8 rounded-full border-2 border-surface bg-surface-alt object-cover"
                                        />
                                    ))}
                                </CardItem>

                                <CardItem translateZ="30" className="flex items-center gap-3 text-muted-foreground text-xs">
                                    <div className="flex items-center gap-1 hover:text-white transition-colors">
                                        <Paperclip className="size-3.5" /> 2
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-white transition-colors">
                                        <MessageSquare className="size-3.5" /> 5
                                    </div>
                                    <div className={`flex items-center gap-1 font-medium ${project.completion === 100 ? 'text-success' : 'text-accent'}`}>
                                        <Calendar className="size-3.5" /> {project.deadline}
                                    </div>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
}
