"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip } from "recharts";
import { useEffect, useState } from "react";

interface RevenueMixProps {
    data: { label: string; value: number }[];
}

export function RevenueMixChart({ data }: RevenueMixProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[150px] w-full bg-surface-alt/10 rounded-xl animate-pulse mt-4" />;

    // Add fill color logic if needed, or use a single color
    return (
        <div className="h-full w-full pt-4">
            <ResponsiveContainer width="100%" height={150} minWidth={0} minHeight={0}>
                <BarChart data={data}>
                    <XAxis
                        dataKey="label"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                        dy={10}
                    />
                    <Tooltip
                        cursor={{ fill: 'var(--surface-alt)' }}
                        contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}
                    />
                    <Bar dataKey="value" fill="#4F8BFF" radius={[6, 6, 6, 6]} barSize={32} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
