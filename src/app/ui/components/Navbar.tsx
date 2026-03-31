export default function Navbar({ links }: {
    links?: string[]
}) {
    return <nav className="bg-black py-5 px-10 w-[75%] mx-auto sticky top-5 rounded-lg flex justify-between">
        <div>
            BRAND
        </div>
        <ol className="list-none flex justify-center gap-10">
            <li>Home</li>
            <li>Chi siamo</li>
            <li>Rassegne</li>
            <li>Eventi futuri</li>
        </ol>
    </nav>
}