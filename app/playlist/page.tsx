import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";

export default async function PlaylistPage(props: any) {
  const playlist = await getPlaylistById(Number(props.searchParams.list));
  if (!playlist) permanentRedirect("/");

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
    </PagePadding>
  );
}
