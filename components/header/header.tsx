import Image from "next/image";
import Link from "next/link";
import { ElementType } from "react";
import { FaCheck } from "react-icons/fa";

interface Link {
  href: string;
  label: string;
  icon: ElementType;
}
const link: Link[] = [
  {
    href: "/",
    label: "打卡",
    icon: FaCheck
  },
  {
    href: "/",
    label: "補卡",
    icon: FaCheck
  },
  {
    href: "/",
    label: "請假",
    icon: FaCheck
  },
  {
    href: "/",
    label: "加班",
    icon: FaCheck
  },
];
export default function Header() {
  return (
    <header className="w-[10%] min-w-[180px] h-[100%] flex flex-col items-center justify-between p-4 ">
      <Image
        src="/avatar.png"
        alt="logo"
        width={100}
        height={100}
        className="rounded-full"
      />
      <nav className="w-full">
        <ul className="flex flex-col gap-4 text-white">
          {link.map((item) => (
            <li key={item.label} className="flex flex-col items-center gap-2">
              <Link
                href={item.href}
                className="flex items-center flex-col gap-1 p-2 w-full group"
              >
                <item.icon className="text-5xl rounded-full p-3 duration-200 group-hover:bg-black group-hover:text-white" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-center flex flex-col gap-2">
        <Image
          src="/avatar.png"
          alt="logo"
          width={100}
          height={100}
          className="rounded-sm"
        />
        <div>
          <p>William</p>
          <p>前端工程師</p>
        </div>
      </div>
    </header>
  );
}
