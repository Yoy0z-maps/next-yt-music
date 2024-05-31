import Category from "./components/Category";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";

export default async function Home() {
  const dummyPlaylistArray_copy_1 = [...dummyPlaylistArray];
  const dummyPlaylistArray_copy_2 = [await getPlaylistById(1)];
  const dummyPlaylistArray_copy_3 = [await getPlaylistById(2)];
  const dummyPlaylistArray_copy_4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9"></div>
        <Category />
        <div className="mt=20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray_copy_1]}
          Thumbnail={
            <div className="w-[56px] h-[56px]">
              <UserIcon size="lg" />
            </div>
          }
          title="Listen Again"
          subTitle="John Han"
        />
        <div className="mt=20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray_copy_2]}
          title="Joyuri - Waltz:Y in Minor"
          subTitle="New Album"
        />
        <div className="mt=20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray_copy_3]}
          title="Community"
        />
        <div className="mt=20"></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray_copy_4]}
          title="Cover & Remix"
        />
      </div>
    </PagePadding>
  );
}
