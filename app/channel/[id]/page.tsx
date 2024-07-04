import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import UserIcon from "@/components/UserIcon";
import { getChannelById } from "@/lib/dummyData";
import { getRandomElementFromArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";
import { FaBell } from "react-icons/fa";
import { FiMusic, FiShuffle } from "react-icons/fi";

export default async function ChannelPage(props: any) {
  const channel = await getChannelById(Number(props.params.id));
  if (!channel) permanentRedirect("/");
  const imageSrc = getRandomElementFromArray(channel.songList)?.imageSrc;
  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-[150px]"></div>
      <section>
        <div className="text-[28px] font-bold">{channel.name}</div>

        <article className="lg:hidden mt-4">
          <div className="">
            <DarkButton
              label="Subscribing 43.8k"
              icon={<FaBell size={16} />}
              className="w-[230px] flex justify-center"
            />
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <WhiteButton
              label="Shuffle"
              icon={<FiShuffle size={16} />}
              className=""
            />
            <WhiteButton
              label="Music Station"
              icon={<FiMusic size={16} />}
              className=""
            />
          </div>
        </article>
        <div className="hidden lg:flex flex-row items-center gap-4 text-[14px] mt-4">
          <WhiteButton
            label="Shuffle"
            icon={<FiShuffle size={16} />}
            className=""
          />
          <WhiteButton
            label="Music Station"
            icon={<FiMusic size={16} />}
            className=""
          />
          <DarkButton
            label="Subscribing 43.8k"
            icon={<FaBell size={16} />}
            className="w-[230px] flex justify-center"
          />
        </div>
      </section>
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
