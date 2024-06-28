import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import PlaylistCard from "@/components/PlaylistCard";
import { getRandomElementFromArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

export default function LibraryPage() {
  return (
    <PagePadding>
      <div className="mt-9"></div>
      <Category />
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 gap-6 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
        <PlaylistCard
          playlist={getRandomElementFromArray(dummyPlaylistArray)}
        />
      </section>
      <div className="mt-12"></div>
    </PagePadding>
  );
}
