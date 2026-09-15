import Image from "next/image";
import { cn, formatDate } from "../_lib/utils";
import Badge from "./ui/Badge";
import { CalendarDays, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { PastEvent } from "../_types/PastEvent";

export default function EventCard({
  mostRecent,
  className,
  eventInsight,
}: {
  mostRecent?: boolean;
  className?: string;
  eventInsight?: PastEvent;
}) {
  
  const defaultCover = {
    src: "/imgs/img-placeholder.jpg",
    width: 640,
    height: 1355,
  }
  
  return (
    <article
      className={cn(
        className,
        "relative",
        mostRecent && "accentify lg:flex lg:flex-row",
      )}
    >
      <Link href={"/rassegne/" + eventInsight?.id}>
        <Image
          src={eventInsight?.cover?.contenuto ?? defaultCover.src}
          alt={eventInsight?.nome + " thumbnail"}
          width={eventInsight?.cover?.larghezza ?? defaultCover.width}
          height={eventInsight?.cover?.altezza ?? defaultCover.height}
        />
        {mostRecent && (
          <Badge className="absolute text-sm left-2 top-2 bg-accent text-black ring-2 shadow-lg">
            Più recente
          </Badge>
        )}
        <div className="text-center md:absolute w-full flex flex-col items-center bottom-0 p-5 bg-black/75 md:rounded-tr-lg md:rounded-tl-lg">
          <p className="text-sm flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-1 py-3">
            <span className="text-center align-middle">
              <MapPinIcon className="inline" /> {eventInsight?.localita.nome}, {eventInsight?.localita.citta}
            </span>
            <span className="hidden">{" "} | {" "}</span>
            <span className="text-nowrap content-center">
              <CalendarDays className="inline" /> {formatDate(eventInsight?.data)}
            </span>
          </p>
          <h3 className="text-2xl mt-3">{eventInsight?.nome}</h3>
          {eventInsight?.sottotitolo && (
            <p className="text-lg">{eventInsight.sottotitolo}</p>
          )}
        </div>
      </Link>
    </article>
  );
}
