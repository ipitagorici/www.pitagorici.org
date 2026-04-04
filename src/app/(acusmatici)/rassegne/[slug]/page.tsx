import EventDetailsClient from './EventDetailsClient'

export default async function EventDetails({ params }: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    return <EventDetailsClient slug={slug} />
}