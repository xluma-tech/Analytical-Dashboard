import * as React from "react";
// import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Make sure to install: npm install class-variance-authority
// or just implement simple switch. Let's stick to simple for now to avoid extra deps if not installed yet.
// Actually, I didn't install cva. I'll use simple props.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient-border";
    size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20",
            secondary: "bg-surface-alt text-foreground hover:bg-surface-alt/80",
            outline: "border border-border bg-transparent hover:bg-surface-alt/50",
            ghost: "hover:bg-surface-alt/50 text-foreground",
            "gradient-border": "relative bg-surface text-foreground border border-transparent bg-clip-padding before:absolute before:inset-0 before:-z-10 before:rounded-[inherit] before:p-[1px] before:bg-gradient-to-r before:from-primary before:to-accent before:content-[''] hover:before:brightness-110",
        };

        const sizes = {
            sm: "h-8 px-3 text-xs",
            md: "h-10 px-4 py-2",
            lg: "h-12 px-6 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";
