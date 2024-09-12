import Image from "next/image";
interface User {
  name: string;
  title: string;
}
const user: User = {
  name: "William",
  title: "工程師",
};
export default function Home() {
  return (
    <div className="flex gap-5 p-3">
      <div className="flex-1 flex gap-3 flex-col relative">
        {/* 頭像 */}
        <div className="flex items-center justify-evenly w-full">
            <Image
              src="/avatar.png"
              alt="頭像"
              width={70}
              height={70}
            className="rounded-full"
          />
          <div className="">
            <p className="text-xl font-bold">姓名：{user.name}</p>
            <p className="text-sm">行銷部 {user.title}</p>
          </div>
        </div>
        <div className="flex gap-3 text-center rounded-xl border-2 border-purple-400 overflow-hidden"> 
          <div className="flex-1 p-3">
            <p>100 小時</p>
            <p>特休時數</p>
          </div>
          <div className="flex-1 p-3 bg-purple-liner text-white">
            <p>100 小時</p>
            <p>特休可用時數</p>
          </div>
        </div>
      </div>

      <div className="flex-1">2</div>
      <div className="flex-1">3</div>
    </div>
  );
}
