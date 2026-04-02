"use client"
import { useEffect, useState } from "react";

export default function useViewportSize(resizingHandler?: () => any) {
    const [viewportSize, setViewportSize] = useState({
        width: 0,
        height: 0,
    });
    
    useEffect(() => {
        const readWindowSize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        readWindowSize();
        if (resizingHandler) {
            resizingHandler();
        }
        window.addEventListener("resize", readWindowSize);
        if (resizingHandler) {
            window.addEventListener("resize", resizingHandler);
        }
        return () => {
            window.removeEventListener("resize", readWindowSize)
            if (resizingHandler) {
                window.removeEventListener("resize", resizingHandler)
            }
        };
    }, []);
    return { 
        viewportSize, 
        isAboveThreshold: (threshold: "sm" | "md" | "lg" | "xl" | "2xl"): boolean => {
            switch (threshold) {
                case "sm": return viewportSize.width >= 640
                case "md": return viewportSize.width >= 768
                case "lg": return viewportSize.width >= 1024
                case "xl": return viewportSize.width >= 1280
                case "2xl": return viewportSize.width >= 1536
                default: throw new Error("Unexpected threshold received! [" + threshold + "]")
            }
        }
    }
}