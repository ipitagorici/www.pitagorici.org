"use client";
import Image from "next/image";
import FullScreenSection from "@/src/app/_components/FullScreenSection";
import {
  ArrowDownCircleIcon,
  CameraIcon,
  PaperclipIcon,
  TriangleIcon,
  VideoIcon,
} from "lucide-react";
import Badge from "@/src/app/_components/ui/Badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { PastEventDetails } from "@/src/app/_types/PastEventDetails";
import { api } from "@/src/app/_lib/apiRequest";
import { formatDate } from "@/src/app/_lib/utils";

export default function EventDetailsClient({ slug }: { slug: string }) {
  const [showArrowDown, setShowArrowDown] = useState<boolean>(false);
  const [event, setEvent] = useState<PastEventDetails>()

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowArrowDown(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    api.get<PastEventDetails>("/past-event/" + slug).then(fetched => {
      setEvent(fetched)
    })
  }, [slug])

  return (
    <>
      <FullScreenSection className="items-center justify-center -mt-20">
        <div className="bg-black/75 w-full grow flex flex-col gap-3 items-center justify-center relative">
          {event?.cover && <Image
            src={event?.cover.contenuto}
            className="w-full h-full absolute -z-1 object-cover mask-b-from-90% mask-b-to-100%"
            width={1920}
            height={1080}
            alt="cover"
          />}
          <Badge className="ring-2 text-sm md:text-lg mb-5">
            <small>
              {event?.localita.nome}, {event?.localita.citta}{" "}
              <TriangleIcon className="scale-75 inline-block pb-1 text-accent motion-safe:animate-pulse" />{" "}
              {formatDate(event?.data)}
            </small>
          </Badge>
          <h1 className="text-3xl md:text-5xl">{ event?.nome }</h1>
          {event?.sottotitolo && <p className="text-xl md:text-3xl px-5 text-center">{event?.sottotitolo}</p>}
          <div className="w-[50%] gap-5 lg:gap-0 flex flex-col items-center md:flex-row justify-between pt-10">
            {event?.videoYT && <Link href={event?.videoYT} className="text-nowrap">
              <VideoIcon className="inline-block me-2" /> Registrazione dell&apos;evento
            </Link>}
            <Link href={""} className="text-nowrap">
              <PaperclipIcon className="inline-block me-1" /> Locandina
            </Link>
          </div>
          {showArrowDown && (
            <Link href="#gallery" className="normal absolute bottom-10">
              <ArrowDownCircleIcon className="text-accent scale-125 inline-block motion-safe:animate-bounce" />
            </Link>
          )}
        </div>
      </FullScreenSection>
      <FullScreenSection id="gallery" className="pt-10 px-10 md:px-20 lg:px-50">
        <article>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <h2 className="text-2xl md:text-4xl pb-5 w-fit">Galleria</h2>
            <p className="text-sm md:text-lg pb-5 w-fit italic">
              <CameraIcon className="scale-75 inline-block" />
              {event?.foto.crediti.map(each => ` ${ each.nome } ${each.cognome}`).join(",")}
            </p>
          </div>
          <RowsPhotoAlbum photos={
            event?.foto?.immagini.map((picture) => {
              return {
                src: picture.contenuto,
                width: picture.larghezza,
                height: picture.altezza
              } as { src: string; width: number; height: number; }
            }
            ) ?? []} />
        </article>
      </FullScreenSection>
    </>
  );
}
