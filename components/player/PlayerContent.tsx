"use client";
import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { Slider } from "../ui/slider";
import { useAudio } from "react-use";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import usePlayerState from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";
import { IoMdReturnLeft } from "react-icons/io";
import { useCallback, useEffect } from "react";

export default function PlayerContent() {
  const { activeSong, prevPlayerQue, nextPlayerQue, playPrev, playNext } =
    usePlayerState();

  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src!,
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  function onClickPlayButton() {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  }
  function onClickPauseButton() {
    controls.pause();
  }
  function onClickPrevButton() {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQue.length === 0) return;
    playPrev();
  }

  const onClickNextButton = useCallback(() => {
    if (nextPlayerQue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQue]);

  useEffect(() => {
    const refAudio = ref.current;
    refAudio!.addEventListener("ended", onClickNextButton);
    return () => {
      refAudio!.removeEventListener("ended", onClickNextButton);
    };
  }, [ref, onClickNextButton]);

  return (
    <div className="h-full w-full relative">
      <div className="absolute top-[-16px] w-full">
        <Slider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="h-full flex flex-row items-center gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickPrevButton}
          />
          {isLoading ? (
            <ClipLoader color="#fff" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseButton}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickPlayButton}
            />
          )}
          <IoPlaySkipForwardSharp
            size={24}
            className="cursor-pointer"
            onClick={onClickNextButton}
          />
        </div>
        <article className=" flex flex-row gap-4 items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image
              fill
              className="object-cover"
              alt="img"
              src={activeSong?.imageSrc!}
            />
          </div>
          <div className="flex flex-col">
            <div>{activeSong?.name}</div>
            <div className="text-neutral-500 text-[14px]">
              {activeSong?.channel} · 78.8k views
            </div>
          </div>
        </article>
        <div>
          <div className="flex flex-row items-center gap-4">
            <div className="flex-row gap-4 hidden lg:flex">
              <IoVolumeHighOutline size={24} className="cursor-pointer" />
              <IoShuffle size={24} className="cursor-pointer" />
              <RxLoop size={24} className="cursor-pointer" />
            </div>
            <div>
              <AiFillCaretUp />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
/*
   <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={controls.pause}>Pause</button>
      <button onClick={controls.play}>Play</button>
      <br />
      <button onClick={controls.mute}>Mute</button>
      <button onClick={controls.unmute}>Un-mute</button>
      <br />
      <button onClick={() => controls.volume(0.1)}>Volume: 10%</button>
      <button onClick={() => controls.volume(0.5)}>Volume: 50%</button>
      <button onClick={() => controls.volume(1)}>Volume: 100%</button>
      <br />
      <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
      <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>   
*/
