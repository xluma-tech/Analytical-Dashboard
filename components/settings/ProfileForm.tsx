"use client";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ProfileForm() {
    return (
        <Card className="p-6">
            <div className="mb-6">
                <h3 className="text-lg font-semibold">Workspace Profile</h3>
                <p className="text-sm text-muted-foreground">Manage your workspace settings.</p>
            </div>

            <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                    <label className="text-sm font-medium">Workspace Name</label>
                    <input
                        type="text"
                        defaultValue="Orton Finance HQ"
                        className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Timezone</label>
                        <select className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                            <option>UTC+02</option>
                            <option>UTC+00</option>
                            <option>UTC-05</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Default Currency</label>
                        <select className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                            <option>USD</option>
                            <option>EUR</option>
                            <option>GBP</option>
                        </select>
                    </div>
                </div>

                <div className="pt-4">
                    <Button>Save changes</Button>
                </div>
            </div>
        </Card>
    );
}
