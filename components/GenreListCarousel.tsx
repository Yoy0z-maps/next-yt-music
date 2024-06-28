import { TopSong } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { chunkArray } from "@/lib/utils";
import GenreCard from "./GenreCard";

interface GenreListCarouselProps {
  title: string;
  subTitle?: string;
  Thumbnail?: React.ReactNode;
  genreList: string[];
}

function GenreColumn({ genreList = [] }: { genreList: string[] }) {
  return (
    <div className="flex flex-col gap-4">
      {genreList.map((genre, index) => {
        return <GenreCard key={index} genre={genre} />;
      })}
    </div>
  );
}

const GenreListCarousel: React.FC<GenreListCarouselProps> = ({
  title,
  subTitle,
  Thumbnail,
  genreList,
}) => {
  const chunkedGenretList = chunkArray(genreList, 4) as string[][];

  return (
    <div className="w-full">
      <Carousel>
        <div className="flex flex-row justify-between items-end my-2">
          <article className="flex flex-row gap-3">
            {Thumbnail}
            <div className="flex flex-col justify-center">
              <div className="text-neutral-500">
                {subTitle && <div>{subTitle}</div>}
              </div>
              <div className="text-[34px] font-bold leading-[34px]">
                {title}
              </div>
            </div>
          </article>
          <div className="relative left-[-45px]">
            <div className="absolute bottom-[20px]">
              <CarouselPrevious className="right-2" />
              <CarouselNext className="left-2" />
            </div>
          </div>
        </div>
        <CarouselContent className="mt-4">
          {chunkedGenretList?.map((genreList, index) => {
            return (
              <CarouselItem key={index} className="basis-1/3 lg:basis-1/4">
                <GenreColumn genreList={genreList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
