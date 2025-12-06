"use client";

import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Video, MessageSquare, MoreHorizontal, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface Contact {
    name: string;
    role: string;
    company: string;
    segment: string;
    avatarSeed: string;
    nextStep: string;
    nextStepAt: string;
    highlighted?: boolean;
    pinned?: boolean;
    channels: string[];
}

interface CustomerCardProps {
    contact: Contact;
}

export function CustomerCard({ contact }: CustomerCardProps) {
    const isHighlighted = contact.highlighted;

    return (
        <Card
            variant={isHighlighted ? "glass" : "default"}
            className={cn(
                "p-6 flex flex-col gap-4 relative transition-all duration-300 hover:shadow-lg",
                isHighlighted && "border-primary/30 shadow-primary/5"
            )}
        >
            {contact.pinned && (
                <div className="absolute top-4 right-4 text-primary">
                    <span className="text-xs font-semibold bg-primary/10 px-2 py-1 rounded-full">Pinned</span>
                </div>
            )}

            <div className="flex items-start gap-4">
                <div className={cn(
                    "h-12 w-12 rounded-full overflow-hidden shrink-0 border-2",
                    isHighlighted ? "border-primary" : "border-surface-alt"
                )}>
                    <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${contact.avatarSeed}`}
                        alt={contact.name}
                        className="h-full w-full object-cover bg-surface-alt"
                    />
                </div>
                <div>
                    <h4 className="font-semibold text-lg leading-tight">{contact.name}</h4>
                    <p className="text-sm text-muted-foreground">{contact.role}</p>
                    <p className="text-xs font-medium text-primary mt-0.5">{contact.company}</p>
                </div>
            </div>

            <div className="border-t border-border/50 my-1" />

            <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Segment</span>
                    <Badge variant={contact.segment === "Enterprise" ? "default" : "neutral"}>
                        {contact.segment}
                    </Badge>
                </div>

                <div className="bg-surface-alt/50 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-1">
                        <Calendar size={12} className="text-muted-foreground" />
                        <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Next Step</span>
                    </div>
                    <p className="text-sm font-medium">{contact.nextStep}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        {new Date(contact.nextStepAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-2 mt-auto pt-2">
                {contact.channels.includes("email") && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-primary/10 hover:text-primary">
                        <Mail size={14} />
                    </Button>
                )}
                {contact.channels.includes("call") && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-success/10 hover:text-success">
                        <Phone size={14} />
                    </Button>
                )}
                {contact.channels.includes("video") && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-accent/10 hover:text-accent">
                        <Video size={14} />
                    </Button>
                )}
                {contact.channels.includes("chat") && (
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full hover:bg-warning/10 hover:text-warning">
                        <MessageSquare size={14} />
                    </Button>
                )}

                <div className="ml-auto">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-full">
                        <MoreHorizontal size={14} />
                    </Button>
                </div>
            </div>
        </Card>
    );
}
