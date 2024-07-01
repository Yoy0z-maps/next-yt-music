"use client";
import useUiState from "@/hooks/useUiState";
import { useEffect } from "react";

export default function HeaderBgChanger({ imageSrc }) {
  const { setHeaderImageSrc } = useUiState();
  console.log(imageSrc);

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc, setHeaderImageSrc]);

  return <></>;
}
