"use client";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";
import usePlayerState from "@/hooks/usePlayerState";

export default function PlayListHead({ playlist = {} } = {}) {
  const { playlistName, owner, songList } = playlist;

  const { addSongList } = usePlayerState();
  function onClickPlay() {
    addSongList(songList);
  }

  return (
    <section>
      <div className="flex flex-row gap-[50px]">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image
            alt="songImg"
            fill
            src={getRandomElementFromArray(songList)?.imageSrc}
          />
        </div>
        <article className="flex flex-col justify-center">
          <div className="font-bord text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`EP · ${owner} · 2019`}</div>
            <div>{`${songList.length}곡 · 18분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton
              onClick={onClickPlay}
              className={"w-[85px] "}
              icon={<FiPlay />}
              label="Play"
            />
            <DarkButton
              className={"w-[135px] "}
              icon={<FiFolderPlus />}
              label="Save"
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          className={"w-[85px] "}
          icon={<FiPlay />}
          label="Play"
          onClick={onClickPlay}
        />
        <DarkButton
          className={"w-[135px] "}
          icon={<FiFolderPlus />}
          label="Save"
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
}
