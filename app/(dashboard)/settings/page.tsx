"use client";

import { ProfileForm } from "@/components/settings/ProfileForm";
import { AppearanceSettings } from "@/components/settings/AppearanceSettings";
import { IntegrationsList } from "@/components/settings/IntegrationsList";

export default function SettingsPage() {
    return (
        <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl mx-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your workspace preferences and integrations.</p>
            </div>

            <ProfileForm />
            <AppearanceSettings />
            <IntegrationsList />
        </div>
    );
}
