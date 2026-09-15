import Image from "next/image"
import { cn } from "../_lib/utils"
import { Article } from "../_types/Article"
import { TriangleIcon } from "lucide-react"

export default function NewsCard({ className, article }: {
    className?: string, article: Article
}) {
    const iconMaxSize = 128
    return <blockquote className={cn("border rounded-lg bg-black/75 p-5 block mx-10 h-[200px] flex flex-col", className)}>
        {/*{ article && <Image src={article.journalIcon} alt={article.journalName} width={iconMaxSize} height={iconMaxSize} />}*/}
        <p className="italic max-w-[400px] text-ellipsis">{ article.estratto }</p>
        <cite className="w-full inline-block text-end mt-auto text-normal"><TriangleIcon className="inline scale-75 text-(--accent)"/> {article.testata.nome ? <a href={article.link} className="inline-block after:content-['_↗']">{article.testata.nome}</a> : article.testata.nome}, {article.data_pubblicazione}</cite>
    </blockquote>
}