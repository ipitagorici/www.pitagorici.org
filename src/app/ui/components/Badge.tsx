import { PropsWithChildren } from "react";
import { cn } from "../../lib/utils";

export default function Badge({ className, children }: {
    className?: string
} & PropsWithChildren) {
    return <div className={cn(className, "rounded-lg p-2")}>
        { children }
    </div>
}