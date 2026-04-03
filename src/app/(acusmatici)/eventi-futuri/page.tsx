import FullScreenSection from "../../components/FullScreenSection";
import FutureEventCard from "../../components/FutureEventCard";

export default function EventiFuturi() {
    return <FullScreenSection className="mt-20 px-10 md:px-20 w-full lg:px-0 lg:mx-auto lg:w-[75%]">
        <h1 className="text-5xl mb-10">Eventi in programma</h1>
        <div className="flex flex-col gap-5">
            <FutureEventCard/>
            <FutureEventCard/>
        </div>
    </FullScreenSection>
}