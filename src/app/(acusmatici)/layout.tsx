import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../_components/Navbar";
import ClickSpark from "../_components/ClickSpark";
import Footer from "../_components/Footer";
import { CustomLinkType } from "../_types/CustomLinkType";
import { CalendarClockIcon, HomeIcon, PersonStandingIcon, TheaterIcon } from "lucide-react";
import Grainient from "../_components/background/Grainient";

const interFont = Inter({
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pitagorici APS",
  description: "Our website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appLinks: CustomLinkType[] = [
    { href: '/', label: 'Home', icon: <HomeIcon /> },
    { href: '/chi-siamo', label: 'Chi siamo', icon: <PersonStandingIcon /> },
    { href: '/rassegne', label: 'Rassegne', icon: <TheaterIcon /> },
    { href: '/eventi-futuri', label: 'Eventi futuri', icon: <CalendarClockIcon /> },
    // { href: '/blog', label: 'Blog', icon: <BookOpenIcon /> },
  ]
  return (
    <html
      lang="it"
      className={`${interFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <ClickSpark sparkColor="#ffffff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={1000}
          easing="ease-out"
          extraScale={2}>
          <Grainient className="-z-10 fixed top-0 right-0 left-0"
            color1="#00052d"
            color2="#4a4131"
            color3="#bb5c6c"
            timeSpeed={1.1}
            colorBalance={0.4}
            warpStrength={0}
            warpFrequency={11}
            warpSpeed={2}
            warpAmplitude={70}
            blendAngle={0}
            blendSoftness={0.3}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1.45}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
          <Navbar links={appLinks} />
          <main className="grow -z-1">
            {children}
          </main>
          <Footer links={appLinks} />
        </ClickSpark>
      </body>
    </html>
  );
}
