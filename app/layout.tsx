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
    title: {
        default: "Xluma | Advanced Analytics Dashboard",
        template: "%s | Xluma"
    },
    description: "Production-ready, high-performance analytics dashboard powered by Next.js 14 and Tailwind CSS.",
    metadataBase: new URL("https://xluma-demo.com"), // Placeholder
    openGraph: {
        title: "Xluma Dashboard",
        description: "Experience the next generation of analytics.",
        type: "website",
    }
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
