"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { time: "00:00", value: 30 },
    { time: "04:00", value: 20 },
    { time: "08:00", value: 60 },
    { time: "12:00", value: 40 },
    { time: "16:00", value: 90 },
    { time: "20:00", value: 50 },
    { time: "24:00", value: 70 },
];

export function CompanyActivityChart() {
    return (
        <div className="w-full h-[200px] flex-1">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#7000FF" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#7000FF" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1A1D26", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#7000FF"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
