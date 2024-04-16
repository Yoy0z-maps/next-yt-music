import { sleep } from "@/lib/utils";

export default async function Home() {
  await sleep(2000);
  return (
    <div className="min-h-[600px]">
      Home...<div className="h-[500px]">TEST</div>
      <div className="h-[500px] bg-slate-500">TEST</div>
      <div className="h-[500px]">TEST</div>
      <div className="h-[500px]">TEST</div>
      <div className="h-[500px]">TEST</div>
    </div>
  );
}
