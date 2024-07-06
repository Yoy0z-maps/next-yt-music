import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import ChannelHead from "../components/ChannelHead";

export default async function ChannelPage(props: any) {
  const channel = await getChannelById(Number(props.params.id));
  if (!channel) permanentRedirect("/");
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <ChannelHead channel={channel} />
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">Music</div>
        <div className="mt-[20px]">
          <ul className="flex flex-col gap-2">
            {channel.songList.map((song, index) => {
              return <SongCardRowExpand song={song} key={index} />;
            })}
          </ul>
        </div>
      </section>
      <section className="mt-[80px]">
        <div className="text-[28px] font-bold">Album</div>{" "}
        <PlayListCarousel playlistArray={[...channel.playlistArray]} />
      </section>
      <section className="mt-[80px]" />
    </PagePadding>
  );
}
