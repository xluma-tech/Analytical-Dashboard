import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-poppins",
});

export const metadata: Metadata = {
    title: "Nova Analytics",
    description: "Premium SaaS Analytics Dashboard",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={cn(poppins.variable, "font-sans bg-background text-foreground min-h-screen selection:bg-primary selection:text-white text-[17px]")}>
                {children}
            </body>
        </html>
    );
}
