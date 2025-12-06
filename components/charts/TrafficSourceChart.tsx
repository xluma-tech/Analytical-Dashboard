"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
    { name: "Mobile", value: 400, color: "#00F0FF" },
    { name: "Desktop", value: 300, color: "#7000FF" },
    { name: "Tablet", value: 300, color: "#FFFFFF" },
];

export function TrafficSourceChart() {
    return (
        <div className="w-full h-full min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={5}
                        dataKey="value"
                        stroke="none"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip
                        contentStyle={{ backgroundColor: "#1A1D26", borderColor: "rgba(255,255,255,0.1)", borderRadius: "8px", fontSize: "12px" }}
                        itemStyle={{ color: "#fff" }}
                    />
                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
