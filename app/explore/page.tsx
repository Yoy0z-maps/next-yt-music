import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";

export default async function ExplorePage() {
  /* const playlistArray = await getAllPlaylist();
  const songListTop10 = await getSongListTop10(); */

  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4"></div>
      <Category />
      <div className="mt=20"></div>
      <PlayListCarousel
        playlistArray={playlistArray}
        title="New Album & Single"
      />
      <div className="mt=20"></div>
      <SongListCarousel songListTop10={songListTop10} title="Chart - Top 10" />
    </PagePadding>
  );
}
