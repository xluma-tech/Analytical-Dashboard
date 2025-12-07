import {
    LayoutGrid,
    Activity,
    Wallet,
    Layers,
    Users,
    Settings,
    ShieldCheck
} from "lucide-react";

export const APP_NAME = "Xluma";

export const MENU_SECTIONS = [
    {
        title: "Main Menu",
        groups: [
            {
                id: "dashboards",
                label: "Dashboard",
                icon: LayoutGrid,
                items: [
                    { label: "Home", href: "/", icon: LayoutGrid },
                    { label: "Revenue", href: "/revenue", icon: Activity },
                    { label: "E-Wallet", href: "/wallet", icon: Wallet },
                ]
            }
        ]
    },
    {
        title: "Workspace",
        groups: [
            {
                id: "applications",
                label: "Applications",
                icon: Layers,
                items: [
                    { label: "Projects", href: "/projects", icon: Layers },
                    { label: "Clients", href: "/customers", icon: Users },
                    { label: "Team", href: "/team", icon: ShieldCheck },
                ]
            }
        ]
    },
    {
        title: "Administration",
        groups: [
            {
                id: "settings",
                label: "Settings",
                href: "/settings",
                icon: Settings
            }
        ]
    }
];
