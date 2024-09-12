export default function Home() {
  return (
    <div className="bg-white w-full h-full rounded-2xl p-10 gap-10 flex flex-col">
      <div className="flex w-full h-[300px] gap-10">
        <div className="flex-1 bg-black"></div>
        <div className="flex-1 bg-gray-200"></div>
      </div>
      <div className="flex w-full h-[300px]">
        <div className="flex-1 bg-black"></div>
      </div>
    </div>
  );
}
