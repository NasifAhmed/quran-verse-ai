import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"], // Weights
    variable: "--font-roboto", // CSS variable for global access
});

export const metadata: Metadata = {
    title: "Quran Verse AI",
    description: "Deep contextual search app for Al-Quran",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="light">
            <body className={`${roboto.className} antialiased bg-background`}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
