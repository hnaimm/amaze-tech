import React from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  PersonIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between bg-[#1f1f1f] rounded-xl p-4">
      <div className="ml-4 text-white">
        <Image src="/logo-no-bg.png" width={50} height={30} alt="logo" />
      </div>
      <div className="flex flex-row space-x-10">
        <Link href="#home" className="uppercase text-white">
          home
        </Link>
        <Link href="#catalogue" className="uppercase text-white">
          catalogue
        </Link>
        <Link href="#collections" className="uppercase text-white">
          collections
        </Link>
        <Link href="#popular" className="uppercase text-white">
          popular
        </Link>
      </div>
      <div className="flex flex-row space-x-4 mr-4">
        <MagnifyingGlassIcon className="text-white h-6 w-6" />
        <PersonIcon className="text-white h-6 w-6" />
        <HeartFilledIcon className="text-white h-6 w-6" />
      </div>
    </nav>
  );
};

export default Navbar;
