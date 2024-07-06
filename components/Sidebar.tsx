"use client";
import usePlayerState from "@/hooks/usePlayerState";
import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";
import { cn } from "@/lib/utils";

export default function Sidebar({ children }: any) {
  const { addSongList } = usePlayerState();
  const { isVisible } = usePlayerState();

  return (
    <div
      className={cn("flex flex-row h-full", isVisible && "h-[calc(100vh-72])")}
    >
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo isInDrawer={false} onClickClose={() => {}} />
        </div>
        <div>
          <Navigator />
        </div>
      </nav>
      {/* 데스크뷰에서 사이드바 공간을 제외한 나머지 공간을 children이 갖는다 */}
      <div className="w-full lg:w-[calc(100%-240px)]">{children}</div>
    </div>
  );
}
