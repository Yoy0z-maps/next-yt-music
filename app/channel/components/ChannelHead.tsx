"use client";
import DarkButton from "@/components/elements/DarkButton";
import WhiteButton from "@/components/elements/WhiteButton";
import usePlayerState from "@/hooks/usePlayerState";
import { FaBell } from "react-icons/fa";
import { FiMusic, FiShuffle } from "react-icons/fi";

export default function ChannelHead({ channel }) {
  const { addSongList } = usePlayerState();
  const onClickShuffle = () => {
    addSongList(channel.songList);
  };

  return (
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
            onClick={onClickShuffle}
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
          onClick={onClickShuffle}
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
  );
}
