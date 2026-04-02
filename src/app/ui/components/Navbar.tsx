"use client"
import { TriangleIcon } from "lucide-react"
import { Link } from "../../types/Link"
import Brand from "./Brand"
import { useEffect, useState } from "react"

export default function Navbar({ links }: {
    links: Link[]
}) {
    const [viewportSize, setViewportSize] = useState({
        width: 0,
        height: 0,
    });
    // TODO: Refactor when possible, it works but it is ugly!
    useEffect(() => {
        const handleResize = () => {
            setViewportSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            if (window.innerWidth > 1024) {
                setHideMenu(false)
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [hideMenu, setHideMenu] = useState(viewportSize.width < 1024)
    return <nav className="bg-black py-2 px-10 w-full lg:w-[75%] mx-auto sticky top-0 lg:top-5 lg:rounded-lg flex flex-col lg:flex-row lg:justify-between z-1">
        <div className="flex justify-between items-center lg:inline-block">
            <Brand direction="horizontal" size="sm" />
            <button className="lg:hidden cursor-pointer" onClick={() => { setHideMenu((prev) => !prev) }}>
                <TriangleIcon className={`scale-125 inline-block ${!hideMenu ? "rotate-180" : ""}`} />
            </button>
        </div>
        <ol className={`list-none flex flex-col lg:flex-row justify-center gap-10 py-10 lg:py-0 ${hideMenu  ? "hidden" : ""}`}>
            {links.map(link => <li className="my-auto flex gap-2 text-(--accent) text-nowrap" key={link.href}>
                {link.icon} <a href={link.href}> <span>{link.label || link.href}</span></a>
            </li>)}
        </ol>
    </nav>
}