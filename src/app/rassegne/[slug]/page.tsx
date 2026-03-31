export default async function EventDetails({ params }: {
  params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    return <>
        <h1>Rassegna ID: {slug}</h1>
    </>
}