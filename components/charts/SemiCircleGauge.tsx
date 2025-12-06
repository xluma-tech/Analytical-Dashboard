"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

interface GaugeProps {
    value: number;
    max: number;
    label: string;
    sublabel: string;
}

export function SemiCircleGauge({ value, max, label, sublabel }: GaugeProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const data = [
        { name: "Value", value: value },
        { name: "Remaining", value: max - value },
    ];

    // Custom colors: Primary vs SurfaceAlt
    const COLORS = ["#4F8BFF", "var(--surface-alt)"];

    if (!mounted) return (
        <div className="h-full flex flex-col items-center justify-center relative">
            <div className="w-full h-32 bg-surface-alt/10 rounded-full opacity-50 animate-pulse" />
        </div>
    );

    return (
        <div className="h-full w-full flex flex-col items-center justify-center relative">
            <div className="w-full h-32">
                <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                    <PieChart>
                        <Pie
                            data={data}
                            cy={120} // Move closer to bottom
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={180}
                            endAngle={0}
                            paddingAngle={0}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="absolute bottom-4 text-center">
                <div className="text-2xl font-bold">{value.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
            </div>
        </div>
    );
}
