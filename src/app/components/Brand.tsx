import Image from "next/image";
import styles from "./Brand.module.css";
import { cn } from "../lib/utils";
import clsx from "clsx";

const LOGO_SIZE = {
    "sm": 64,
    "md": 64,
    "lg": 128,
    "xl": 300,
    "xxl": 512
}

const TITLE_SIZES = {
    "sm": "text-lg",
    "md": "text-xl",
    "lg": "text-3xl",
    "xl": "text-3xl md:text-5xl lg:text-8xl",
    "xxl": "text-8xl"
}

const SUBTITLE_SIZES: Partial<Record<"sm" | "md" | "lg" | "xl" | "xxl", string>> = {
    "xl": "text-md md:text-lg lg:text-3xl"
}

export default function Brand({ className, direction = "vertical", size = "md" }: 
    { className?: string, direction?: "horizontal" | "vertical", size?: "sm" | "md" | "lg" | "xl" | "xxl" }) {
        const chosenLogoSize = LOGO_SIZE[size];
        return <div className={cn("flex items-center", className, { 
            "flex-col text-center justify-center": direction === "vertical"
        })}>
            <Image loading="eager" className={styles.logo} width={chosenLogoSize} height={chosenLogoSize} src={"/imgs/pitagorici-logo.png"} alt="Pitagorici APS Logo"/>
            <div className={clsx({"my-auto": direction === "horizontal"})}>
                <h2 className={TITLE_SIZES[size]}>Pitagorici APS</h2>
                { size !== "sm" && <p className={SUBTITLE_SIZES[size] || "text-lg"}>Errare humanum est, perseverare... <b>pythagoricum!</b></p> } 
            </div>
        </div>
}