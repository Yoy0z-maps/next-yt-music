"use client";
import { FiMoreVertical } from "react-icons/fi";
import IconButton from "./elements/IconButton";
import Image from "next/image";
import { getRandomElementFromArray } from "@/lib/utils";

export default function PlayListHead({ playlist = {} } = {}) {
  const { playlistName, owner, songList } = playlist;
  return (
    <section className="flex flex-col items-center gap-[50px] lg:flex-row">
      <div className="relative h-[240px] w-[240px]">
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
        <ul>
          <IconButton icon={<FiMoreVertical size={24} />} />
        </ul>
      </article>
    </section>
  );
}
