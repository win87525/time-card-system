// import Image from "next/image";
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
    icon: FaCheck,
  },
  {
    href: "/",
    label: "補卡",
    icon: FaCheck,
  },
  {
    href: "/",
    label: "請假",
    icon: FaCheck,
  },
  {
    href: "/",
    label: "加班",
    icon: FaCheck,
  },
];
export default function Header() {
  return (
    <div className="w-1/5 h-full rounded-xl bg-white">
      {link.map((item, key) => (
        <Link key={key} href={item.href} className="flex w-full bg-black">
          <item.icon />{item.label}
        </Link>
      ))}
    </div>
  );
}
