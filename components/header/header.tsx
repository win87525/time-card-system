import Link from "next/link";
interface Link {
  href: string;
  label: string;
}
const link: Link[] = [
  {
    href: "/",
    label: "我要打卡",
  },
  {
    href: "/",
    label: "我要補卡",
  },
  {
    href: "/",
    label: "我要請假",
  },
  {
    href: "/",
    label: "我要加班",
  },
];
export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex items-center justify-between w-full gap-2">
          {link.map((item, index) => (
            <li key={index} className="flex-1 flex justify-center items-center text-center ">
              <Link href={item.href} className="block w-full py-3 bg-yellow-500 rounded-tr-xl rounded-tl-xl">{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
