"use client"
import { HeartIcon, MailIcon } from "lucide-react";
import Brand from "./Brand";
import { CustomLinkType } from "../_types/CustomLinkType";
import InstagramIcon from "./icons/InstagramIcon";
import useViewportSize from "../_lib/useViewportSize";
import Link from "next/link";

export default function Footer({ links }: { links?: CustomLinkType[] }) {
    const videoHeight = 600;
    const viewportSizeObj = useViewportSize()
    return <footer style={{ minHeight: Math.min(videoHeight, viewportSizeObj.viewportSize.width) + "px" }} className="w-full bg-black flex flex-col -z-1 mt-10 overflow-x-hidden">
        <video style={{ maxHeight: Math.min(videoHeight, viewportSizeObj.viewportSize.width) + "px"}} className={`
        mix-blend-difference absolute bottom-0
        opacity-50 z-1`} src="/videos/05-moving-3d.mp4" playsInline autoPlay loop muted />
        <div className="z-2 mt-10 lg:mt-auto w-full bg-black/50 px-10 lg:px-30">
            <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 md:pt-10">
                <Brand direction={viewportSizeObj.isAboveThreshold("lg") ? "horizontal" : "vertical"} size="lg"/>
                <div className="border-s border-white"></div>
                <article className="flex flex-col" style={{ minWidth: "max-content" }}>
                    <h3 className="uppercase">Contatti</h3>
                    <ol className="my-auto pt-3 flex flex-col gap-2">
                        <li className="flex gap-2"><MailIcon className="text-accent"/> <Link href="mailto:info@pitagorici.org">info@pitagorici.org</Link></li>
                        <li className="flex gap-2"><InstagramIcon/> <Link href="https://www.instagram.com/ipitagorici/?hl=it">@ipitagorici</Link></li>
                    </ol>
                </article>
                <div className="border-s border-white"></div>
                <article className="flex flex-col" style={{ minWidth: "max-content" }}>
                    <h3 className="uppercase">Sito web</h3>
                    <ol className="pt-3 flex flex-col gap-2 my-auto">
                        {links?.map(link => <li key={link.href}>
                            <Link href={link.href} rel="noopener noreferrer">{link.label}</Link>
                        </li>)}
                    </ol>
                </article>
            </div>
            <small className="inline-block w-full text-center py-5 mt-5 lg:mt-0"><b>Handmade</b> with <HeartIcon className="motion-safe:animate-pulse text-accent inline scale-75"/> by <a target="_blank" href="https://nicholasmagi.it">@Nickolausen</a></small>
        </div>
    </footer>
}