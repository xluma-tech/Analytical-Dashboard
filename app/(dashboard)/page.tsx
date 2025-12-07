"use client";

import { Card } from "@/components/ui/Card";
import { CompaniesTable } from "@/components/overview/CompaniesTable";
import { ActivityFeed } from "@/components/overview/ActivityFeed";
import { SemiCircleGauge } from "@/components/charts/SemiCircleGauge";
import { DominanceChart } from "@/components/charts/DominanceChart";
import { RadarChart } from "@/components/charts/RadarChart";
import { CompanyActivityChart } from "@/components/charts/CompanyActivityChart";
import { TrafficSourceChart } from "@/components/charts/TrafficSourceChart";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { Search, Bell, User, Settings } from "lucide-react";

export default function OverviewPage() {
    return (
        <div className="space-y-6 pb-10 relative">
            <CursorGlow />

            {/* Header / Top Bar */}
            <div className="flex justify-between items-center mb-6 relative z-10">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground dark:text-white mb-1">
                        Hi, <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#7000FF]">Adam!</span>
                    </h2>
                    <p className="text-muted-foreground text-sm">Welcome Back</p>
                </div>

                <div></div>
            </div>

            {/* Main Grid Layout: 12 Columns */}
            {/* Left Main (Col 9) | Right Widgets (Col 3) */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 relative z-10">

                {/* === LEFT MAIN AREA === */}
                <div className="xl:col-span-9 space-y-6">

                    {/* Row 1: Companies Table */}
                    <ScrollAnimation delay={0.1}>
                        <CompaniesTable />
                    </ScrollAnimation>

                    {/* Row 2: Charts Row (Gauge | Radar | Stats) */}
                    {/* This row mimics the middle section of the image */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* 1. Earnings Quality (Gauge) */}
                        <ScrollAnimation delay={0.2} className="h-full w-full">
                            <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-6 relative overflow-hidden group h-full flex flex-col justify-between">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#7000FF] to-[#00F0FF]" />
                                <div>
                                    <h3 className="font-bold text-2xl text-foreground dark:text-white text-center mt-4">$70 000</h3>
                                    <p className="text-muted-foreground text-[10px] text-center uppercase tracking-widest">Earnings Quality</p>
                                </div>
                                <div className="h-32 w-full flex items-center justify-center -mt-4">
                                    <SemiCircleGauge value={70000} max={100000} label="" sublabel="" />
                                </div>
                                <div className="flex justify-between items-end border-t border-white/5 pt-4">
                                    <div>
                                        <div className="text-[10px] text-muted-foreground uppercase">Traffic</div>
                                        <div className="text-sm font-bold text-foreground dark:text-white">50 000</div>
                                    </div>
                                    <div className="h-6 w-[1px] bg-white/10" />
                                    <div className="text-right">
                                        <div className="text-[10px] text-muted-foreground uppercase">Revenue</div>
                                        <div className="text-sm font-bold text-[#00F0FF]">$43 384</div>
                                    </div>
                                </div>
                            </Card>
                        </ScrollAnimation>

                        {/* 2. Bar Chart (Radar in image) */}
                        <ScrollAnimation delay={0.3} className="h-full w-full">
                            <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-4 h-full flex flex-col">
                                <h3 className="font-bold text-foreground dark:text-white mb-2">System Capabilities</h3>
                                <div className="flex-1 min-h-0">
                                    <RadarChart />
                                </div>
                                <div className="flex justify-between text-[10px] text-foreground mt-2 px-2">
                                    <span>Current</span>
                                    <span>Target</span>
                                </div>
                            </Card>
                        </ScrollAnimation>

                        {/* 3. Dominance (Line/Area Sparkline or Stats) */}
                        <ScrollAnimation delay={0.4} className="h-full">
                            <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-6 h-full flex flex-col justify-around">
                                <h3 className="font-bold text-foreground dark:text-white mb-2">Platform Usage</h3>
                                {/* Simulated Stats matching image */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs text-muted-foreground">Web App</span>
                                            <span className="text-xs text-[#7000FF] font-bold">46.2%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-surface-alt rounded-full overflow-hidden">
                                            <div className="h-full bg-[#7000FF] w-[46%]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs text-muted-foreground">Mobile</span>
                                            <span className="text-xs text-[#00F0FF] font-bold">36.8%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-surface-alt rounded-full overflow-hidden">
                                            <div className="h-full bg-[#00F0FF] w-[36%]" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs text-muted-foreground">API</span>
                                            <span className="text-xs text-foreground dark:text-white font-bold">12.9%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-surface-alt rounded-full overflow-hidden">
                                            <div className="h-full bg-foreground dark:bg-white w-[12%]" />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </ScrollAnimation>
                    </div>

                    {/* Row 3: Bottom Charts (Col 2 grid) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Dominance Bar Chart */}
                        <ScrollAnimation delay={0.5} className="h-full w-full">
                            <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-4 h-full flex flex-col">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-foreground dark:text-white">Active Sessions</h3>
                                    <div className="flex gap-2">
                                        <div className="size-3 bg-foreground/20 dark:bg-white/20 rounded-sm" />
                                        <div className="size-3 bg-[#7000FF] rounded-sm" />
                                        <div className="size-3 bg-[#00F0FF] rounded-sm" />
                                    </div>
                                </div>
                                <div className="flex-1 w-full min-h-0">
                                    <DominanceChart />
                                </div>
                            </Card>
                        </ScrollAnimation>

                        {/* Recent Activity / Area Chart */}
                        <ScrollAnimation delay={0.6} className="h-full w-full">
                            <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-6 h-full flex flex-col relative overflow-hidden">
                                <h3 className="absolute top-6 left-6 font-bold text-foreground dark:text-white z-10">Company activity</h3>
                                <p className="absolute top-12 left-6 text-xs text-muted-foreground z-10">Over the last 24 hours</p>
                                <div className="flex-1 mt-8 min-h-0">
                                    <CompanyActivityChart />
                                </div>
                            </Card>
                        </ScrollAnimation>
                    </div>

                </div>

                {/* === RIGHT WIDGET AREA (Col 3) === */}
                {/* === RIGHT WIDGET AREA (Col 3) === */}
                <div className="xl:col-span-3 space-y-6 sticky top-24 h-fit self-start">

                    {/* Linked Card - The visual from the image */}
                    <ScrollAnimation delay={0.7}>
                        <div className="relative h-48 rounded-2xl p-6 flex flex-col justify-between overflow-hidden bg-[#0C121D] border border-white/10 group shadow-lg hover:shadow-neon/20 transition-all">
                            {/* Card Visual Background */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                            <div className="absolute top-[-50%] right-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,240,255,0.1)_0%,transparent_50%)]" />

                            <div className="relative z-10 flex justify-between items-start">
                                <div>
                                    <h4 className="text-white text-sm font-medium tracking-wide">Linked Card</h4>
                                    <p className="text-white/40 text-[10px] font-mono mt-1">4520 **** **** 0012</p>
                                </div>
                                <Settings className="size-4 text-white/50 hover:text-white transition-colors cursor-pointer" />
                            </div>

                            <div className="relative z-10">
                                <div className="text-2xl font-bold text-white tracking-tight">$1 848 302</div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 text-[10px] font-bold">+5.14%</div>
                                    <span className="text-[10px] text-white/40">this week</span>
                                </div>
                            </div>

                            {/* QR Code visual hint */}
                            <div className="absolute bottom-6 right-6 size-8 bg-white p-0.5 rounded-sm">
                                <div className="w-full h-full bg-black flex items-center justify-center">
                                    <div className="grid grid-cols-2 gap-0.5">
                                        <div className="size-1.5 bg-white" /> <div className="size-1.5 bg-white" />
                                        <div className="size-1.5 bg-white" /> <div className="size-1.5 bg-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                    {/* Recent Activity Feed (Right vertical list) */}
                    {/* Traffic Sources Chart */}
                    <ScrollAnimation className="bg-surface-deep/50 rounded-2xl border border-white/5 backdrop-blur-md p-6 h-[250px] overflow-hidden flex flex-col" delay={0.8}>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-foreground dark:text-white">Traffic Sources</h3>
                        </div>
                        <div className="flex-1 min-h-0">
                            <TrafficSourceChart />
                        </div>
                    </ScrollAnimation>

                    {/* Marketing / Conversions (Placeholder for another chart to match) */}
                    <ScrollAnimation className="bg-surface-deep/50 rounded-2xl border border-white/5 backdrop-blur-md p-6 h-[220px] overflow-hidden flex flex-col" delay={0.9}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-foreground dark:text-white">Conversions</h3>
                            <div className="text-xs text-green-400">+12%</div>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>Direct</span>
                                    <span className="text-foreground dark:text-white">65%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-alt rounded-full overflow-hidden">
                                    <div className="h-full bg-[#00F0FF] w-[65%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>Social</span>
                                    <span className="text-foreground dark:text-white">25%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-alt rounded-full overflow-hidden">
                                    <div className="h-full bg-[#7000FF] w-[25%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs text-muted-foreground mb-1">
                                    <span>Organic</span>
                                    <span className="text-foreground dark:text-white">10%</span>
                                </div>
                                <div className="h-2 w-full bg-surface-alt rounded-full overflow-hidden">
                                    <div className="h-full bg-foreground dark:bg-white w-[10%]" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>

                </div>

            </div>
        </div>
    );
}

