import Logo from "./elements/Logo";
import Navigator from "./elements/Navigator";

export default function Sidebar({ children }: any) {
  return (
    <div className="flex flex-row h-full">
      <nav className="hidden lg:block w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
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
