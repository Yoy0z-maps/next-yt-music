"use client";
import Image from "next/image";
import UserIcon from "./UserIcon";
import PagePadding from "./PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import useUiState from "@/hooks/useUiState";

export function HeaderDrawer({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer
              onClickClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
          <Navigator />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default function Header({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef();

  const { headerImageSrc } = useUiState();

  useEffect(() => {
    const currentHeadRef = headRef.current;

    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      console.log(scrollValue);
      setIsScrolled(scrollValue !== 0);
    };

    currentHeadRef.addEventListener("scroll", handleScroll);
    return () => {
      currentHeadRef.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute top-0 w-full">
        <div className="relative h-[400px] w-full">
          <Image
            alt="headerItem"
            className="object-cover"
            fill
            src={
              headerImageSrc ||
              "https://yt3.googleusercontent.com/tYHeCHmQEfdw6Tv64mnYiC7om8yNErgVhcsHHrLUjEZjK089dkKyVR-mG-C8_lRqhc7f8ABjFQM=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            }
          />
          <div className="absolute top-0 bg-black opacity-40 w-full h-[400px]"></div>
          <div className="absolute top-0 bg-gradient-to-t from-black w-full h-[400px]"></div>
        </div>
      </section>
      <section
        className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className={cn(
                "lg:flex flex-row items-center h-[42px] min-w-[480px] hidden bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px]",
                isScrolled && " border border-neutral-500"
              )}
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                type="text"
                className="h-full w-full bg-transparent"
                placeholder="Search Song, Album, Artist, Podcast..."
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>
            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
}
