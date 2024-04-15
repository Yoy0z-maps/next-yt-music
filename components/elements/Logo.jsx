"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "@/components/elements/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Logo() {
  const { push } = useRouter(); // app router사용
  function onClickLogo() {
    push("/");
  }

  function onClickMenu() {}

  return (
    <section className="flex flex-row items-center gap-3">
      <IconButton icon={<RxHamburgerMenu size={24} />} onClick={onClickMenu} />
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
}
