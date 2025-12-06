"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MetricCard } from "@/components/overview/MetricCard";
import { SemiCircleGauge } from "@/components/charts/SemiCircleGauge";
import { CompaniesTable } from "@/components/overview/CompaniesTable";
import { ActivityFeed } from "@/components/overview/ActivityFeed";
import dynamic from 'next/dynamic';
import { Search, Plus, Bell, ChevronDown, ArrowUpRight } from "lucide-react";
import { DominanceChart } from "@/components/charts/DominanceChart";

// Dynamic imports for 3D components
const Hero3D = dynamic(() => import('@/components/canvas/Hero3D'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-surface-alt/10 animate-pulse" />
});

const Plan3D = dynamic(() => import('@/components/canvas/Plan3D'), {
    ssr: false
});

export default function OverviewPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500 pb-10">
            {/* Header / Top Bar (Could be moved to global if consistent) */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-white mb-1">
                        Hi, <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-cyan to-neon-purple">Adam!</span>
                    </h2>
                    <p className="text-muted-foreground">Welcome Back</p>
                </div>
                {/* Search Bar matching screenshot */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search across companies..."
                            className="w-full h-10 pl-9 pr-4 rounded-xl bg-surface-deep border border-white/5 focus:ring-1 focus:ring-neon-purple outline-none text-sm shadow-inner"
                        />
                    </div>
                </div>
            </div>

            {/* Main Grid Layout: Left (Content) vs Right (Widgets) */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">

                {/* LEFT COLUMN - MAIN CONTENT (Span 3) */}
                <div className="xl:col-span-3 space-y-6">
                    {/* Companies Table (Large) */}
                    <div className="h-[500px]">
                        <CompaniesTable />
                    </div>

                    {/* Bottom Row: Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Semi Circle Gauge (Enhanced) */}
                        <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-6 relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-purple to-neon-pink" />
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="font-bold text-lg text-white">$70 000</h3>
                                    <p className="text-muted-foreground text-xs">Earnings today</p>
                                </div>
                            </div>
                            <div className="h-48 flex items-center justify-center">
                                <SemiCircleGauge value={70000} max={100000} label="" sublabel="" />
                            </div>
                            <div className="flex justify-between items-end mt-2">
                                <div>
                                    <div className="text-xs text-muted-foreground">Income</div>
                                    <div className="text-lg font-bold text-white">$50 000</div>
                                </div>
                                <div className="h-8 w-[1px] bg-white/10" />
                                <div className="text-right">
                                    <div className="text-xs text-muted-foreground">Profit</div>
                                    <div className="text-lg font-bold text-neon-pink">$43 384</div>
                                </div>
                            </div>
                        </Card>

                        {/* Dominance Chart */}
                        <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-white">Dominance</h3>
                                <button className="text-xs text-muted-foreground hover:text-white transition-colors">View All</button>
                            </div>
                            <DominanceChart />
                        </Card>
                    </div>

                    <div className="h-64">
                        {/* Placeholder for "Company activity over the last 24 hours" Area Chart */}
                        <Card className="bg-surface-deep/50 border-white/5 backdrop-blur-md p-6 h-full flex flex-col justify-end relative overflow-hidden">
                            <h3 className="absolute top-6 left-6 font-bold text-lg text-white">Company Activity</h3>
                            <p className="absolute top-12 left-6 text-sm text-muted-foreground">Over the last 24 hours</p>
                            <div className="w-full h-32 flex items-end gap-1 opacity-50">
                                {Array.from({ length: 40 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 bg-white/20 rounded-t-sm hover:bg-neon-cyan transition-colors"
                                        style={{ height: `${Math.random() * 100}%` }}
                                    />
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>


                {/* RIGHT COLUMN - WIDGETS (Span 1) */}
                <div className="xl:col-span-1 space-y-6">
                    {/* Linked Card (Glass Neon) */}
                    <div className="relative h-48 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-neon border border-neon-cyan/20 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="absolute inset-0 bg-surface-deep/90 backdrop-blur-xl" />
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-transparent" />
                        <div className="absolute right-0 top-0 w-32 h-32 bg-neon-cyan/20 blur-3xl rounded-full" />

                        <div className="relative z-10 flex justify-between items-start">
                            <div>
                                <h4 className="text-neon-cyan text-sm font-semibold tracking-wide">Linked Card</h4>
                                <p className="text-white/50 text-xs font-mono mt-1">4520 **** **** 0012</p>
                            </div>
                            <div className="size-8 rounded-full border border-white/20 flex items-center justify-center">
                                <div className="size-4 bg-neon-cyan rounded-full animate-pulse" />
                            </div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-3xl font-bold text-white tracking-tight">$1 848 302</div>
                            <div className="text-success text-xs font-mono mt-1">+5.14% this week</div>
                        </div>
                    </div>

                    {/* Dominance/Mini Metrics */}
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { l: "Bitcoin", v: "46.2%", c: "text-neon-purple" },
                            { l: "Ton", v: "36.8%", c: "text-neon-pink" },
                            { l: "Ethereum", v: "12.9%", c: "text-neon-cyan" }
                        ].map((m, i) => (
                            <Card key={i} className="bg-surface-deep border-white/5 p-3 text-center">
                                <div className="text-[10px] text-muted-foreground">{m.l}</div>
                                <div className={`font-bold text-sm ${m.c}`}>{m.v}</div>
                            </Card>
                        ))}
                    </div>

                    {/* Professional Plan Widget (3D) */}
                    <div className="relative h-80 rounded-3xl overflow-hidden bg-black border border-white/10 group">
                        <Plan3D />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-10">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="size-2 rounded-full bg-neon-pink" />
                                <span className="text-white text-xs uppercase tracking-widest font-bold">Your Current Plan</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 leading-none">Professional Plan</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed mb-4">
                                Advanced analytics and extended reporting tools are enabled.
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="text-neon-pink font-bold">My Plan</div>
                                <div className="h-8 w-12 rounded-full border border-white/20 flex items-center justify-center">
                                    <ArrowUpRight className="size-4 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-surface-deep/50 rounded-2xl border border-white/5 backdrop-blur-md p-6">
                        <h3 className="font-bold text-white mb-4">Recent Activity</h3>
                        <ActivityFeed />
                    </div>
                </div>
            </div>
        </div>
    );
}
