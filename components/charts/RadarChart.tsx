"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart as RechartsRadar, ResponsiveContainer } from "recharts";

const data = [
    { subject: 'Uptime', A: 120, B: 110, fullMark: 150 },
    { subject: 'Security', A: 98, B: 130, fullMark: 150 },
    { subject: 'UX Score', A: 86, B: 130, fullMark: 150 },
    { subject: 'Speed', A: 99, B: 100, fullMark: 150 },
    { subject: 'Scale', A: 85, B: 90, fullMark: 150 },
    { subject: 'Support', A: 65, B: 85, fullMark: 150 },
];

export function RadarChart() {
    return (
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%" minWidth={0} minHeight={0}>
                <RechartsRadar cx="50%" cy="50%" outerRadius="70%" data={data}>
                    <PolarGrid stroke="var(--border)" strokeOpacity={0.5} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--foreground))', fontSize: 10 }} />
                    <Radar
                        name="Mike"
                        dataKey="A"
                        stroke="#00F0FF"
                        strokeWidth={2}
                        fill="#00F0FF"
                        fillOpacity={0.1}
                    />
                    <Radar
                        name="Lily"
                        dataKey="B" // Dummy second dataset for complexity if needed, or remove
                        stroke="#7000FF"
                        strokeWidth={2}
                        fill="#7000FF"
                        fillOpacity={0.1}
                    />
                </RechartsRadar>
            </ResponsiveContainer>
        </div>
    );
}
