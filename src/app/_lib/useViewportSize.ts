"use client";
import { useEffect, useState } from "react";

const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

type Breakpoint = keyof typeof BREAKPOINTS;

export default function useViewportSize(resizingHandler?: () => void) {
  const [viewportSize, setViewportSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const readWindowSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const onResize = () => {
      readWindowSize();
      resizingHandler?.();
    };

    readWindowSize();
    resizingHandler?.();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [resizingHandler]);

  const isAboveThreshold = (breakpoint: Breakpoint): boolean => {
    return viewportSize.width >= BREAKPOINTS[breakpoint];
  };

  return {
    viewportSize,
    isAboveThreshold,
  };
}