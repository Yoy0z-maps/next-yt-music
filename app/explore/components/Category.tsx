import { FiBarChart, FiMusic, FiSmile } from "react-icons/fi";

export default function Category() {
  return (
    <div className="flex flex-col gap-4 w-full lg:flex-row">
      <CategoryMenu icon={<FiMusic color="#AAAAAA" />} label="Latest Musics" />
      <CategoryMenu icon={<FiBarChart color="#AAAAAA" />} label="Hot Chart" />
      <CategoryMenu icon={<FiSmile color="#AAAAAA" />} label="Genere" />
    </div>
  );
}

function CategoryMenu({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="w-full h-[56px] py-4 px-[24px] flex flex-row gap-4 items-center bg-neutral-700 text-[20px] cursor-pointer rounded-sm hover:bg-neutral-800 transition">
      {icon}
      {label}
    </div>
  );
}
