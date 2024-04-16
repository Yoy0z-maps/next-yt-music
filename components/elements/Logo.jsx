"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import IconButton from "@/components/elements/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export default function Logo({ isInDrawer = false, onClickClose = () => {} }) {
  const { push } = useRouter(); // app router사용
  function onClickLogo() {
    push("/");
  }

  function onClickMenu() {}

  return (
    <section className="flex flex-row items-center gap-3">
      {isInDrawer ? (
        <IconButton
          icon={<IoCloseOutline size={30} />}
          onClickIcon={onClickClose}
        />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image alt="logo" width={100} height={30} src={"/main-logo.svg"} />
      </div>
    </section>
  );
}
