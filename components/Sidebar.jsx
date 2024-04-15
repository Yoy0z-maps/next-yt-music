import Navigation from "@/components/elements/Navigator";
import Logo from "@/components/elements/Logo";

export default function SideBar({ children }) {
  return (
    <div className="flex flex-row h-full">
      <nav className="w-[240px] border-r-[1px] border-neutral-600">
        <div className="p-[24px]">
          <Logo />
        </div>
        <div>
          <Navigation />
        </div>
      </nav>
      <div className="flex-1">{children}</div>
    </div>
  );
}
