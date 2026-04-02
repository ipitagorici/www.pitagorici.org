import Image from "next/image";
import FullScreenSection from "../../ui/components/FullScreenSection";

export default async function EventDetails({ params }: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    return <>
        <FullScreenSection className="mt-10">
            {/* <Image src={""} alt="cover"/> */}
            <h1>Rassegna ID: {slug}</h1>
        </FullScreenSection>
    </>
}