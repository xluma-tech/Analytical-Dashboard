"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    spotlight?: boolean;
    spotlightColor?: string;
    variant?: "default" | "glass" | string;
}

export function Card({ className, children, spotlight = true, spotlightColor = "rgba(0, 240, 255, 0.1)", variant = "default", ...props }: CardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    const variantStyles = variant === "glass"
        ? "bg-surface-deep/50 backdrop-blur-md border-white/10"
        : "bg-surface-deep border-white/5"; // default

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "rounded-2xl text-card-foreground shadow-sm transition-all duration-300 relative overflow-hidden group",
                variantStyles,
                className
            )}
            {...props}
        >
            {spotlight && (
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                    }}
                />
            )}
            {/* Inner content layer */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}
