"use client";
import { BarLoader } from "react-spinners";

export default function LoadingBar() {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
}
