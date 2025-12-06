import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "glass-dark";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl transition-all duration-300",
                    {
                        "bg-surface border border-border shadow-sm": variant === "default",
                        "bg-white/85 dark:bg-[#0C1228]/85 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg": variant === "glass",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";
