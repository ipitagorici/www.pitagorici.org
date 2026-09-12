"use client";
import { TriangleIcon } from "lucide-react";
import { CustomLinkType } from "../types/CustomLinkType";
import Brand from "./Brand";
import { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import useViewportSize from "../lib/useViewportSize";

export default function Navbar({ links }: { links: CustomLinkType[] }) {
  const viewportSizeWrapper = useViewportSize(() => {
    if (window.innerWidth > 1024) {
      setHideMenu(false);
    }
  });
  const [hideMenu, setHideMenu] = useState(
    viewportSizeWrapper.viewportSize.width < 1024,
  );
  const hideMenuHandler = () => { 
    if (window.innerWidth > 1024) {
      setHideMenu(false);
    }
  }
  return (
    <nav className="relative bg-black py-2 px-10 w-full xl:w-[80%] mx-auto sticky top-0 xl:top-5 xl:rounded-lg flex flex-col lg:flex-row lg:justify-between z-1">
      <div className="flex justify-between items-center lg:inline-block">
        <Brand direction="horizontal" size="sm" />
        <button
          className="lg:hidden cursor-pointer"
          onClick={() => {
            setHideMenu((prev) => !prev);
          }}
        >
          <TriangleIcon
            className={`scale-125 inline-block ${!hideMenu ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      <ol
        className={clsx(
          "list-none flex flex-col lg:flex-row justify-center py-10 gap-6 lg:gap-3 2xl:gap-10 lg:py-0",
          {
            hidden: hideMenu,
          },
        )}
      >
        {links.map((link) => (
          <li className="my-auto text-nowrap flex gap-3" key={link.href}>
            <span className="flex gap-2 text-accent">
              {link.icon}{" "}
              <Link href={link.href}>
                {" "}
                <span>{link.label || link.href}</span>
              </Link>
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
}
