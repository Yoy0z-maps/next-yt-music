export default function IconButton({ icon, onClickIcon = () => {} }: any) {
  return (
    <div
      className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer"
      onClick={onClickIcon}
    >
      {icon}
    </div>
  );
}
