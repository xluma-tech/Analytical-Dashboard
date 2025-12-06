"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";
import { useEffect, useState } from "react";

interface FunnelProps {
    data: { subject: string; A: number; B: number }[];
}

export function FunnelRadar({ data }: FunnelProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[180px] w-full bg-surface-alt/10 rounded-full animate-pulse opacity-20" />;

    return (
        <div className="h-full w-full">
            <ResponsiveContainer width="100%" height={180} minWidth={0} minHeight={0}>
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-muted)', fontSize: 10 }} />
                    <Radar
                        name="This Month"
                        dataKey="A"
                        stroke="#37D493"
                        strokeWidth={2}
                        fill="#37D493"
                        fillOpacity={0.2}
                    />
                    <Radar
                        name="Last Month"
                        dataKey="B"
                        stroke="#4F8BFF"
                        strokeWidth={2}
                        fill="#4F8BFF"
                        fillOpacity={0.2}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}
