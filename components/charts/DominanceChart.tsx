"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, Tooltip, Cell } from "recharts";
import { useEffect, useState } from "react";

const data = [
    { name: "Bitcoin", value: 46.2, color: "#7000FF" },
    { name: "Ton", value: 36.8, color: "#FF5C7A" },
    { name: "Ethereum", value: 12.9, color: "#00F0FF" },
];

export function DominanceChart() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[150px] w-full bg-surface-alt/10 rounded-xl animate-pulse" />;

    return (
        <div className="h-full w-full">
            <div className="flex justify-between items-end mb-4 px-2">
                {data.map((item, i) => (
                    <div key={i} className="text-center">
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{item.name}</div>
                        <div className="text-xl font-bold" style={{ color: item.color }}>{item.value}%</div>
                    </div>
                ))}
            </div>

            <div className="h-[120px]">
                <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                    <BarChart data={data} barGap={10}>
                        <defs>
                            {data.map((entry, index) => (
                                <linearGradient key={`gradient-${index}`} id={`gradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor={entry.color} stopOpacity={1} />
                                    <stop offset="100%" stopColor={entry.color} stopOpacity={0.3} />
                                </linearGradient>
                            ))}
                        </defs>
                        <Tooltip
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            contentStyle={{
                                backgroundColor: 'var(--surface-deep)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                            }}
                        />
                        <Bar dataKey="value" radius={[6, 6, 6, 6]} barSize={40}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={`url(#gradient-${index})`} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="flex gap-2 mt-4">
                <div className="flex-1 space-y-2">
                    <div className="h-8 rounded-lg bg-[#7000FF]/10 border border-[#7000FF]/20 flex items-center justify-center text-xs text-[#7000FF] font-mono">Yearly High</div>
                    <div className="h-8 rounded-lg bg-[#7000FF]/10 border border-[#7000FF]/20 flex items-center justify-center text-xs text-[#7000FF] font-mono">Yearly Low</div>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-8 rounded-lg bg-[#FF5C7A]/10 border border-[#FF5C7A]/20 flex items-center justify-center text-xs text-[#FF5C7A] font-mono">61.0%</div>
                    <div className="h-8 rounded-lg bg-[#FF5C7A]/10 border border-[#FF5C7A]/20 flex items-center justify-center text-xs text-[#FF5C7A] font-mono">61.0%</div>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-8 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center text-xs text-[#00F0FF] font-mono">61.0%</div>
                    <div className="h-8 rounded-lg bg-[#00F0FF]/10 border border-[#00F0FF]/20 flex items-center justify-center text-xs text-[#00F0FF] font-mono">61.0%</div>
                </div>
            </div>
        </div>
    );
}
