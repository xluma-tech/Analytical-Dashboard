"use client";

import {
    Area,
    Bar,
    CartesianGrid,
    ComposedChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useEffect, useState } from "react";

interface RevenueChartProps {
    data: {
        name: string;
        revenue: number;
        refunds: number;
    }[];
}

export function RevenueRefundsChart({ data }: RevenueChartProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[400px] w-full bg-surface-alt/10 rounded-2xl animate-pulse mt-4" />;

    return (
        <div className="h-[400px] w-full mt-4">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <ComposedChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                    <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                        dy={10}
                    />
                    <YAxis
                        yAxisId="left"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                        tickFormatter={(val) => `$${val / 1000}k`}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'var(--text-muted)', fontSize: 12 }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px' }}
                        cursor={{ fill: 'var(--surface-alt)', opacity: 0.4 }}
                    />
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4F8BFF" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#4F8BFF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        yAxisId="left"
                        type="monotone"
                        dataKey="revenue"
                        stroke="#4F8BFF"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                        name="Revenue"
                    />
                    <Bar
                        yAxisId="right"
                        dataKey="refunds"
                        barSize={12}
                        fill="#FF4B6E"
                        radius={[4, 4, 4, 4]}
                        name="Refunds"
                        opacity={0.8}
                    />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
}
