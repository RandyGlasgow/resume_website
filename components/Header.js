import Link from "next/link";
import { Disclosure, Menu } from "@headlessui/react";

export default function Header() {
  return (
    <div className="flex flex-row justify-between h-16 bg-gray-300">
      <div className="flex flex-row gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  );
}
