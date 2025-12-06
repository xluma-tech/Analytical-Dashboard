"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MetricCard } from "@/components/overview/MetricCard";
import { SemiCircleGauge } from "@/components/charts/SemiCircleGauge";
import { RevenueMixChart } from "@/components/charts/RevenueMixChart";
import { FunnelRadar } from "@/components/charts/FunnelRadar";
import { CompaniesTable } from "@/components/overview/CompaniesTable";
import { ActivityFeed } from "@/components/overview/ActivityFeed";
import dynamic from 'next/dynamic';

const Hero3D = dynamic(() => import('@/components/canvas/Hero3D'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-surface-alt/10 animate-pulse" />
});

export default function OverviewPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="relative w-full h-[320px] rounded-3xl overflow-hidden bg-surface dark:bg-[#0C1228] border border-border shadow-strong group">
                <Hero3D />

                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-10" />

                <div className="relative z-20 p-10 flex flex-col justify-center h-full max-w-2xl">
                    <Badge variant="default" className="w-fit mb-4">Dashboard v2.0</Badge>
                    <h2 className="text-5xl font-bold mb-4 tracking-tight text-foreground">
                        Hi, <span className="text-primary">Adam</span>. Welcome back 👋
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Real-time insights into your revenue, customers, and financial health — all in one place.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <Button variant="primary" className="shadow-primary/25 shadow-xl">View Reports</Button>
                        <Button variant="outline" className="bg-background/50 backdrop-blur-sm">Manage Wallet</Button>
                    </div>
                </div>

                {/* Right Widget Overlaid */}
                <div className="absolute right-8 bottom-8 z-20 hidden lg:block hover:translate-y-[-4px] transition-transform duration-300">
                    <MetricCard
                        label="Linked Card Balance"
                        value="$1,848,302"
                        change="+5.14%"
                        chip="USD Corporate"
                        chartValues={[38, 44, 42, 46, 52, 51, 57, 62, 59, 66]}
                    />
                </div>
            </section>

            {/* Analytics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="h-80 flex flex-col p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Earnings Today</h3>
                        <p className="text-sm text-muted-foreground">Global activity (UTC)</p>
                    </div>
                    <div className="flex-1">
                        <SemiCircleGauge value={70000} max={100000} label="USD" sublabel="Income" />
                    </div>
                    <div className="flex justify-center gap-4 mt-2">
                        <div className="text-center">
                            <div className="text-xs text-muted-foreground">Profit</div>
                            <div className="font-semibold text-success">$43,384</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xs text-muted-foreground">Income</div>
                            <div className="font-semibold">$50,000</div>
                        </div>
                    </div>
                </Card>

                <Card className="h-80 flex flex-col p-6">
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="text-lg font-semibold">Revenue Mix</h3>
                            <p className="text-sm text-muted-foreground">By payment rail</p>
                        </div>
                        <Badge variant="neutral">Updated 2m ago</Badge>
                    </div>
                    <div className="flex-1">
                        <RevenueMixChart data={[
                            { label: "Card", value: 46.2 },
                            { label: "Bank", value: 36.8 },
                            { label: "Wallet", value: 12.9 }
                        ]} />
                    </div>
                </Card>

                <Card className="h-80 flex flex-col p-6">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold">Acquisition Funnel</h3>
                        <p className="text-sm text-muted-foreground">Visitor to Advocate</p>
                    </div>
                    <div className="flex-1">
                        <FunnelRadar data={[
                            { subject: "Visitors", A: 4200, B: 3950 },
                            { subject: "Trials", A: 1300, B: 1200 },
                            { subject: "Active", A: 980, B: 910 },
                            { subject: "Retained", A: 720, B: 680 },
                            { subject: "Advocates", A: 380, B: 340 }
                        ]} />
                    </div>
                </Card>
            </div>

            {/* Bottom Section: Table & Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <CompaniesTable />
                </div>
                <div>
                    <ActivityFeed />
                </div>
            </div>
        </div>
    );
}
