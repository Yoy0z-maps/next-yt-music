import { cn } from "@/lib/utils";

export default function WhiteButton({
  icon,
  label,
  className = "",
  onClick = () => {},
  ...props
}: {
  icon: React.ReactNode;
  label: string;
  className: string;
  onClick: any;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "cursor-pointer bg-white text-black hover:bg-neutral-200 rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
