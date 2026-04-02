import Marquee from "react-fast-marquee";
import { cn } from "../../lib/utils";
import { Article } from "../../types/Article";
import NewsCard from "./NewsCard";

export default function DailyCarousel({ className }: { className?: string }) {
    const mockArticles: Article[] = [
        {
            date: "April 2, 2026",
            text: "A groundbreaking advancement in quantum computing was announced today, promising to revolutionize modern cryptography.",
            journalName: "Wired",
            journalLink: "https://www.wired.com/story/quantum-breakthrough"
        },
        {
            date: "April 1, 2026",
            text: "The new Next.js features aim to drastically improve compilation times for large-scale enterprise applications.",
            journalName: "Frontend Daily",
            journalLink: "https://frontenddaily.example.com/nextjs-updates"
        },
        {
            date: "March 29, 2026",
            text: "Electric vehicle adoption reaches a new global milestone, pushing past previous conservative estimates.",
            journalName: "The Verge"
        },
        {
            date: "March 28, 2026",
            text: "Local tech startup secures $5M in seed funding to build AI-driven agricultural solutions for urban farming.",
            journalName: "Tech Insider"
        },
        {
            date: "March 25, 2026",
            text: "Venture capital funding sees a massive shift towards sustainable energy startups in Q3.",
            journalName: "TechCrunch",
            journalLink: "https://techcrunch.com/sustainability-q3"
        },
        {
            date: "March 22, 2026",
            text: "Accessibility in web design is no longer an afterthought, but a core metric for measuring user experience success.",
            journalName: "Smashing Magazine",
            journalLink: "https://www.smashingmagazine.com/accessibility-first"
        },
        {
            date: "March 18, 2026",
            text: "The James Webb Space Telescope has captured stunning new images of star formation in the Orion Nebula.",
            journalName: "Space Chronicle"
        },
        {
            date: "March 15, 2026",
            text: "Global supply chains show signs of stabilization after months of unprecedented volatility.",
            journalName: "Bloomberg",
            journalLink: "https://www.bloomberg.com/supply-chain-recovery"
        },
        {
            date: "March 12, 2026",
            text: "New studies indicate that a four-day work week significantly boosts employee productivity and mental health.",
            journalName: "Workplace Weekly",
            journalLink: "https://workplaceweekly.example.com/four-day-week"
        },
        {
            date: "March 10, 2026",
            text: "Cybersecurity researchers have uncovered a massive vulnerability affecting millions of IoT devices worldwide.",
            journalName: "Ars Technica"
        },
        {
            date: "March 8, 2026",
            text: "Indie game developers are increasingly turning to open-source engines like Godot to build their next big hits.",
            journalName: "Game Dev Digest"
        },
        {
            date: "March 5, 2026",
            text: "Biologists have discovered a novel enzyme capable of breaking down certain plastics in a matter of days.",
            journalName: "Nature",
            journalLink: "https://www.nature.com/articles/plastic-enzyme"
        },
        {
            date: "March 2, 2026",
            text: "The latest smartphone flagship introduces a revolutionary solid-state battery, offering double the capacity.",
            journalName: "Engadget",
            journalLink: "https://www.engadget.com/solid-state-battery-phone"
        },
        {
            date: "February 27, 2026",
            text: "Advances in natural language processing models are making real-time translation nearly flawless across 50 languages.",
            journalName: "AI Research Quarterly"
        },
        {
            date: "February 20, 2026",
            text: "Major tech firms announce a collaborative initiative to establish ethical guidelines for artificial general intelligence.",
            journalName: "The Wall Street Journal",
            journalLink: "https://www.wsj.com/tech-agi-ethics"
        }
    ];
    const partitioned = mockArticles.partition(3)
    return <div className={cn(className)}>
        <Marquee autoFill pauseOnHover>
            {partitioned.at(0)?.map(art => <NewsCard key={art.text} article={art} />)}
        </Marquee>
        <Marquee autoFill pauseOnHover direction="right">
            {partitioned.at(1)?.map(art => <NewsCard key={art.text} article={art} />)}
        </Marquee>
        <Marquee autoFill pauseOnHover speed={75}>
            {partitioned.at(2)?.map(art => <NewsCard key={art.text} article={art} />)}
        </Marquee>
    </div>
}