"use client"
import { PropsWithChildren } from "react";
import { cn } from "../../_lib/utils";

export default function Badge({ className, children }: {
    className?: string
} & PropsWithChildren) {
    return <div className={cn(className, "rounded-lg py-1 px-4")}>
        { children }
    </div>
}