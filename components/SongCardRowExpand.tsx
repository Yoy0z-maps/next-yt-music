"use client";
import { Song } from "@/types";
import Image from "next/image";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;
  const { push } = useRouter();
  const { addSongList } = usePlayerState();

  function onClickChannel() {
    push(`/channel/${channelId}`);
  }

  function onClickPlay() {
    addSongList([song]);
  }

  return (
    <article className="flex flex-row gap-4 h-[48px] w-full items-center relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section
          onClick={onClickPlay}
          className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black bg-opacity-70 cursor-pointer"
        >
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-500 hover:underline cursor-pointer"
        >
          {channel}
        </div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 items-center flex-row h-[48px] right-0 w-[120px] justify-end">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
