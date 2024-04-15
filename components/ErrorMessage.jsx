"use client";
import { GridLoader } from "react-spinners";

// 반드시 CSR을 사용해야한다

export default function ErrorMessage() {
  return (
    <div className="my-20 flex flex-col justify-center items-center gap-4">
      <GridLoader color="red" />
      <div className="text-[40px]">Ooops... Error Occurs!!!</div>
    </div>
  );
}
