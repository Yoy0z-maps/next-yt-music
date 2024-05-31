"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import IconButton from "./IconButton";
import { IoCloseOutline } from "react-icons/io5";

export default function Logo({
  isInDrawer = false,
  onClickClose = () => {},
}: {
  isInDrawer: boolean;
  onClickClose: VoidFunction;
}) {
  const { push } = useRouter();
  const onClickLogo = () => {
    push("/");
  };
  const onClickMenu = () => {};

  return (
    <section className="flex flex-row gap-3 items-center">
      {isInDrawer ? (
        <IconButton
          onClickIcon={onClickClose}
          icon={<IoCloseOutline size={30} />}
        />
      ) : (
        <IconButton
          onClickIcon={onClickMenu}
          icon={<RxHamburgerMenu size={24} />}
        />
      )}
      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} width={100} height={30} alt="logo" />
      </div>
    </section>
  );
}
