import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

type FullScreenSectionProps = {
    id?: string,
    className?: string
} & PropsWithChildren

export default function FullScreenSection({ id, className, children }: FullScreenSectionProps) {
    return <section {...(id ? { id } : {})} className={twMerge("min-h-dvh flex flex-col", className || "")}>
        { children }
    </section>
}