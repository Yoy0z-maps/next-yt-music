export default function PagePadding({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto px-[10px] py-[2px] lg:px-[100px]">{children}</div>
  );
}
