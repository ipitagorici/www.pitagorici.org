"use client"
import { cn } from "../lib/utils";
import EventCard from "../ui/components/EventCard";

export default function EventsList() {
    return <div className="-z-2">
        <h1 className="text-5xl text-center mt-15">I nostri eventi</h1>
        <hr className="w-0 mx-auto py-5"/>
        <section className={cn("px-10 gap-4 w-full", "md:mx-auto md:px-0 grid grid-cols-1 md:grid-cols-2 md:gap-5 md:w-[75%]")}>
            <EventCard mostRecent className="md:col-span-2 mx-auto"/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
            <EventCard/>
        </section>
    </div>
}