"use client";
import useUiState from "@/hooks/useUiState";
import { useEffect } from "react";

export default function HeaderBgChanger() {
  const { setHeaderImageSrc } = useUiState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc]);

  return <></>;
}
