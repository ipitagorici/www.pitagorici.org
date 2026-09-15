import Marquee from "react-fast-marquee";
import { cn } from "../_lib/utils";
import { Article } from "../_types/Article";
import NewsCard from "./NewsCard";
import { use } from "react";

type DailyCarouselProps = {
  articles: Article[],
  className?: string,
}

export default function DailyCarousel({ articles, className }: DailyCarouselProps) {
  const partitioned = articles.partition(3);
  return (
    <div className={cn(className)}>
      <Marquee autoFill pauseOnHover>
        {partitioned.at(0)?.map((art) => (
          <NewsCard key={art.estratto} article={art} />
        ))}
      </Marquee>
      <Marquee autoFill pauseOnHover direction="right">
        {partitioned.at(1)?.map((art) => (
          <NewsCard key={art.estratto} article={art} />
        ))}
      </Marquee>
      <Marquee autoFill pauseOnHover speed={75}>
        {partitioned.at(2)?.map((art) => (
          <NewsCard key={art.estratto} article={art} />
        ))}
      </Marquee>
    </div>
  );
}
