"use client";
import { Grid2X2 } from "lucide-react";
import { GridLoader } from "react-spinners";

export default function Error() {
  return (
    <div className="my-20 flex flex-col justify-center items-center gap-4">
      <GridLoader color="red" />
      <div className="text-[50px]">Oops!</div>
      <div> 잠시 후 다시 확인해주세요...</div>
    </div>
  );
}
