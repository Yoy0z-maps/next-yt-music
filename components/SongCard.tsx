"use client";
import { TopSong } from "@/types";
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
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { addSongList } = usePlayerState();

  function onClickPlay() {
    console.log("click");
    addSongList([song]);
  }

  return (
    <article
      className="flex flex-row gap-4 h-[48px] w-full items-center relative group"
      onClick={onClickPlay}
    >
      <div className="w-[48px] h-[48px] relative ">
        <Image src={song.imageSrc} alt="img" fill className="object-cover" />
        <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black bg-opacity-70 cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={7} className="mx-[1.5px]" />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div>{song.rank + 1}</div>
      </div>
      <div>{song.name}</div>
      <section className="hidden group-hover:flex absolute top-0 items-center left-0 flex-row h-[48px] right-0 w-full justify-end">
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
