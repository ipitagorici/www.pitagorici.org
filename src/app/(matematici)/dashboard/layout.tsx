import { Metadata } from "next";
import { Inter } from "next/font/google";

const interFont = Inter({
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Pitagorici APS",
    description: "Our website",
};

export default function RootAdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <html
        lang="it"
        className={`${interFont.variable} h-full antialiased`}
    >
        <body className="min-h-full flex flex-col overflow-x-hidden">
            {children}
        </body>
    </html>
}