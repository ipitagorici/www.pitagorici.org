import Image from "next/image";
import { cn } from "../lib/utils";
import Badge from "./ui/Badge";
import { Clock2Icon, MapPinIcon } from "lucide-react";
import Link from "next/link";

export default function EventCard({ mostRecent, className, eventInsight }:
    { mostRecent?: boolean, className?: string, eventInsight?: any }) {
    if (!mostRecent) {
        return <article className={cn(className, "relative")}>
            <Link href="/rassegne/2">
                <Image src="/imgs/img-placeholder.jpg"
                    alt="Rassegna Image" width={640} height={1355} />
                <div className="text-center md:absolute w-full flex flex-col items-center bottom-0 p-5 bg-black/75 md:rounded-tr-lg md:rounded-tl-lg">
                    <p className="md:text-sm"><MapPinIcon className="inline" /> Luogo | <Clock2Icon className="inline" /> Data</p>
                    <h3 className="md:text-2xl mt-3">TITOLO DELLA RASSEGNA</h3>
                    <p className="md:text-lg">SOTTITOLO DELLA RASSEGNA</p>
                </div>
            </Link>
        </article>
    }

    return <article className={cn(className, "accentify relative lg:flex lg:flex-row")}>
        <Link href="/rassegne/1">
            <Image src="/imgs/img-placeholder.jpg"
                alt="Rassegna Image" width={640} height={1355} />
            <Badge className="absolute text-sm left-2 top-2 bg-(--accent) text-black ring-2 shadow-lg">Più recente</Badge>
            <div className="w-full flex flex-col items-center justify-center lg:relative bottom-0 p-5 bg-black/75 lg:rounded-e-lg">
                <p className="md:text-sm"><MapPinIcon className="inline" /> Luogo | <Clock2Icon className="inline" /> Data</p>
                <h3 className="text-2xl mt-3">TITOLO DELLA RASSEGNA</h3>
                <p className="text-lg">SOTTITOLO DELLA RASSEGNA</p>
            </div>
        </Link>
    </article>
}