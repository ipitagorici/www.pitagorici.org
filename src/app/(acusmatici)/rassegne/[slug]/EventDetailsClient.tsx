"use client"
import Image from "next/image";
import FullScreenSection from "../../../components/FullScreenSection";
import { ArrowDownCircleIcon, CameraIcon, PaperclipIcon, TriangleIcon, VideoIcon } from "lucide-react";
import Badge from "../../../components/ui/Badge";
import Link from "next/link";
import { usePhotoGalleryLoader } from "../../../lib/usePhotoGalleryLoader";
import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

export default function EventDetailsClient({ slug }: { slug: string }) {
    const [ showArrowDown, setShowArrowDown ] = useState<boolean>(false)
    const PHOTOS_QTY = 5
    const { photos, targetRowHeight } = usePhotoGalleryLoader(Array
        .from({ length: PHOTOS_QTY * 2 }, (_, i) => ((i + 1) % PHOTOS_QTY) + 1)
        .map(photoNr => `/imgs/groups/g${photoNr}.jpg`))

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowArrowDown(true)
        }, 5000)
        return () => clearTimeout(timeout)
    }, [])

    return <>
        <FullScreenSection className="items-center justify-center -mt-20">
            <div className="bg-black/75 w-full grow flex flex-col gap-3 items-center justify-center relative">
                <Image src={"/imgs/groups/g2.jpg"} className="w-full h-full absolute -z-1 object-cover mask-b-from-90% mask-b-to-100%" width={1920} height={1080} alt="cover"/>
                <Badge className="ring-2 text-sm md:text-lg mb-5">
                    <small>Palazzo del Ridotto, Cesena FC <TriangleIcon className="scale-75 inline-block pb-1 text-(--accent) motion-safe:animate-pulse"/> 22 Maggio 2023</small>
                </Badge>
                <h1 className="text-3xl md:text-5xl">Rassegna ID: {slug}</h1>
                <p className="text-xl md:text-3xl">Qualunque sottotitolo va bene</p>
                <div className="w-[50%] flex flex-col items-center md:flex-row justify-between pt-10">
                    <Link href={""} className="text-nowrap">
                        <VideoIcon className="inline-block"/> Registrazione dell'evento
                    </Link>
                    <Link href={""} className="text-nowrap">
                        <PaperclipIcon className="inline-block"/> Locandina
                    </Link>
                </div>
                {
                    showArrowDown && 
                    <Link href="#gallery" className="normal absolute bottom-10">
                        <ArrowDownCircleIcon className="text-(--accent) scale-125 inline-block motion-safe:animate-bounce"/> 
                    </Link>
                }
            </div>
        </FullScreenSection>
        <FullScreenSection id="gallery" className="pt-10 px-10 md:px-20 lg:px-50">
            <article>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                    <h2 className="text-2xl md:text-4xl pb-5 w-fit">Galleria</h2>
                    <p className="text-sm md:text-lg pb-5 w-fit italic"><CameraIcon className="scale-75 inline-block"/> Marcello Parini, Nicolas Moltrasio</p>
                </div>
                <RowsPhotoAlbum targetRowHeight={targetRowHeight} photos={photos}/>
            </article>
        </FullScreenSection>
    </>
}