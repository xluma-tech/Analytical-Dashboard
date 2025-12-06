"use client";

import { Line, LineChart, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

interface SparklineProps {
    data: number[];
    color?: string;
    height?: number;
}

export function Sparkline({ data, color = "#4F8BFF", height = 50 }: SparklineProps) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const chartData = data.map((val, i) => ({ i, val }));

    if (!mounted) return <div style={{ height }}></div>;

    return (
        <div style={{ height }}>
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <LineChart data={chartData}>
                    <Line
                        type="monotone"
                        dataKey="val"
                        stroke={color}
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
