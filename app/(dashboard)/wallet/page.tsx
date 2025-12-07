"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Plus, MoreHorizontal, Wallet, Send } from "lucide-react";
import { MetricCard } from "@/components/overview/MetricCard";

export default function WalletPage() {
    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">E-Wallet</h1>
                    <p className="text-muted-foreground mt-1 text-sm md:text-base">Manage cards, assets, and transfers.</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <Button variant="outline" className="gap-2 flex-1 md:flex-none">
                        <Plus className="size-4" /> Add Card
                    </Button>
                    <Button variant="primary" className="shadow-neon flex-1 md:flex-none">
                        Top Up Wallet
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Cards & Actions */}
                <div className="lg:col-span-1 space-y-6">
                    {/* Virtual Card */}
                    <div className="relative h-56 w-full rounded-2xl p-6 flex flex-col justify-between overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF] to-[#7000FF] opacity-90" />
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="absolute -right-10 -top-10 size-40 bg-white/20 blur-3xl rounded-full" />

                        <div className="relative z-10 flex justify-between items-start">
                            <div className="size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/10">
                                <Wallet className="text-white size-5" />
                            </div>
                            <Badge variant="outline" className="bg-black/20 text-white border-white/20">Virtual</Badge>
                        </div>

                        <div className="relative z-10">
                            <div className="text-white/80 text-sm mb-1">Total Balance</div>
                            <div className="text-3xl font-bold text-white tracking-tight">$42,983.00</div>
                            <div className="flex justify-between items-center mt-6">
                                <div className="text-white/60 font-mono">**** 9482</div>
                                <div className="text-white/60 text-xs">EXP 12/28</div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 hover:border-primary/50 hover:bg-primary/5">
                            <Send className="size-5 text-primary" />
                            <span className="text-xs">Transfer</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-1 hover:border-accent/50 hover:bg-accent/5">
                            <ArrowDownLeft className="size-5 text-accent" />
                            <span className="text-xs">Request</span>
                        </Button>
                    </div>

                    <Card className="p-0 overflow-hidden border-white/5 bg-surface/30">
                        <div className="p-4 border-b border-white/5">
                            <h3 className="font-semibold">Linked Methods</h3>
                        </div>
                        <div className="p-2 space-y-1">
                            {['Mastercard **** 4492', 'Visa **** 1029', 'PayPal Account'].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="size-8 rounded-full bg-surface-alt flex items-center justify-center">
                                            <CreditCard className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                    <MoreHorizontal className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>

                {/* Right Column: Analytics & Transactions */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MetricCard
                            label="Monthly Spending"
                            value="$12,402"
                            change="+12.5%"
                            chartValues={[30, 45, 35, 60, 50, 70, 65, 80]}
                            chip="Limit: $50k"
                        />
                        <MetricCard
                            label="Total Income"
                            value="$58,210"
                            change="+8.1%"
                            chartValues={[20, 30, 45, 40, 50, 55, 60, 65]}
                            chip="Source: Stripe"
                        />
                    </div>

                    <Card className="flex-1 min-h-[400px]">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-semibold">Transaction History</h3>
                            <Button variant="ghost" size="sm">Download CSV</Button>
                        </div>
                        <div className="space-y-4">
                            {[
                                { name: "AWS Infrastructure", date: "Today, 10:23 AM", amount: "-$2,400.00", type: "out", icon: "aws" },
                                { name: "Stripe Settlement", date: "Yesterday, 4:45 PM", amount: "+$14,230.50", type: "in", icon: "stripe" },
                                { name: "Figma Subscription", date: "Mar 20, 2024", amount: "-$45.00", type: "out", icon: "figma" },
                                { name: "Vercel Pro Team", date: "Mar 18, 2024", amount: "-$120.00", type: "out", icon: "vercel" },
                                { name: "Upwork Escrow", date: "Mar 15, 2024", amount: "-$850.00", type: "out", icon: "upwork" },
                            ].map((tx, i) => (
                                <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all group">
                                    <div className="flex items-center gap-4">
                                        <div className={`size-10 rounded-full flex items-center justify-center ${tx.type === 'in' ? 'bg-success/10 text-success' : 'bg-surface-alt text-muted-foreground'}`}>
                                            {tx.type === 'in' ? <ArrowDownLeft className="size-5" /> : <ArrowUpRight className="size-5" />}
                                        </div>
                                        <div>
                                            <div className="font-medium text-foreground group-hover:text-primary transition-colors">{tx.name}</div>
                                            <div className="text-xs text-muted-foreground">{tx.date}</div>
                                        </div>
                                    </div>
                                    <div className={`font-mono font-medium ${tx.type === 'in' ? 'text-success' : 'text-foreground'}`}>
                                        {tx.amount}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
