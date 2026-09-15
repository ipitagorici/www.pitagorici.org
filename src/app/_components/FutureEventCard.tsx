"use client";
import Image from "next/image";
import { CalendarClockIcon, MapIcon, NotebookPenIcon } from "lucide-react";

export default function FutureEventCard({
  id,
  className,
  eventInsight,
}: {
  id?: string;
  className?: string;
  eventInsight?: any;
}) {
  const DEFAULT_SIZE = 1000;
  return (
    <article className="w-full flex flex-col xl:flex-row">
      <div className="bg-black xl:min-w-[30%] my-auto mx-auto xl:mx-0 xl:my-0">
        <Image
          src={"/imgs/locandina-sample.png"}
          alt="Locandina"
          className="bg-black mask-b-from-90% mask-b-to-100% xl:mask-none"
          width={DEFAULT_SIZE}
          height={DEFAULT_SIZE}
        />
      </div>
      <div className="bg-black grow rounded-b-lg flex flex-col xl:rounded-b-none xl:rounded-e-lg p-10">
        <h3 className="text-xl md:text-2xl lg:text-3xl">Estasi Pitagorica</h3>
        <p className="text-md md:text-xl lg:text-2xl">
          L'eterno spettacolo della Matematica
        </p>
        <p className="text-md md:text-lg lg:text-xl mt-5 lg:mt-10 text-balance">
          Descrizione dell'evento / Programma (non troppo lunga) Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Reprehenderit ipsa, earum
          animi assumenda cum a cupiditate corrupti at esse minima, aut non fuga
          odit laudantium incidunt ullam temporibus qui excepturi?
        </p>
        <div className="mt-10 xl:mt-auto flex flex-col gap-5 lg:gap-0">
          <p className="text-md md:text-xl lg:text-xl flex flex-col lg:flex-none lg:inline-block">
            <strong>
              <CalendarClockIcon className="inline-block" /> Quando?
            </strong>
            <span className="ms-0 lg:ms-5">Quando mi pare</span>
          </p>
          <p className="text-md md:text-xl lg:text-xl flex flex-col lg:flex-none lg:inline-block">
            <strong>
              <MapIcon className="inline-block" /> Dove?
            </strong>
            <span className="ms-0 lg:ms-5">Dove mi pare</span>
          </p>
          <p className="text-md md:text-xl lg:text-xl flex flex-col lg:flex-none lg:inline-block">
            <strong>
              <NotebookPenIcon className="inline-block" /> Ulteriori info
            </strong>
            <span className="ms-0 lg:ms-5">Se mi pare</span>
          </p>
        </div>
      </div>
    </article>
  );
}
