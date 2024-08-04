"use client";
import React from "react";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  PersonIcon,
  HeartFilledIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import * as Avatar from "@radix-ui/react-avatar";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { toast } from "react-toastify";
import "./style.css";

const Navbar = () => {
  const user = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : undefined;
  console.log("user", user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("access_token");

    toast.success("Logged out Successfully!");

    window.location.href = "/";
  };

  return (
    <nav className="flex flex-row justify-between bg-[#1f1f1f] rounded-xl p-4">
      <div className="ml-4 text-white">
        <Link href={"/"}>
          <Image src="/logo-no-bg.png" width={50} height={30} alt="logo" />
        </Link>
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
        <HeartFilledIcon className="text-white h-6 w-6" />

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <Avatar.Root className="AvatarRoot AvatarFallback">
              {user ? (
                `${user.firstName[0]}${user.lastName[0]}`
              ) : (
                <PersonIcon />
              )}
            </Avatar.Root>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={10}
              alignOffset={10}
            >
              {user ? (
                <>
                  <DropdownMenu.Item className="DropdownMenuItem">
                    Profile
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="DropdownMenuSeparator" />
                  <DropdownMenu.Item
                    className="DropdownMenuItem"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </DropdownMenu.Item>
                </>
              ) : (
                <Link href={"/login"}>
                  <DropdownMenu.Item className="DropdownMenuItem">
                    Login
                  </DropdownMenu.Item>
                </Link>
              )}

              <DropdownMenu.Arrow className="DropdownMenuArrow" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </nav>
  );
};

export default Navbar;
