"use client"; // CSR을 사용하는게 좋음
import { BarLoader } from "react-spinners";

export default function LoadingBar() {
  return (
    <div className="w-full">
      <BarLoader color="red" cssOverride={{ width: "100%" }} />
    </div>
  );
}
