"use client";
import { cn } from "../../_lib/utils";
import EventCard from "../../_components/EventCard";
import { PastEventDetails } from "../../_types/PastEventDetails";
import { useEffect, useState } from "react";
import { api } from "../../_lib/apiRequest";

export default function EventsList() {
  const [events, setEvents] = useState<PastEventDetails[]>([])
  useEffect(() => {
    api.get<PastEventDetails[]>("/past-events").then(events => {
      const sorted = events.toSorted((e1, e2) => new Date(e2.data).getTime() - new Date(e1.data).getTime());
      setEvents(sorted)
    })
  }, [])
  return (
    <div className="-z-2">
      <h1 className="text-5xl text-center mt-15">I nostri eventi</h1>
      <hr className="w-0 mx-auto py-5" />
      <section
        className={cn(
          "px-10 gap-4 w-full",
          "md:mx-auto md:px-0 grid grid-cols-1 xl:grid-cols-2 xl:gap-5 md:w-[75%]",
        )}
      >
        {events.map((evt) => <EventCard className="m-auto" mostRecent={evt === events[0]} key={evt.id} eventInsight={evt} />)}
      </section>
    </div>
  );
}
