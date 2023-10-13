"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "../../../public/assets/logo.png";
import SessionLoginBtn from "../form/SessionLoginBtn";
import DropdownButton from "../form/Dropdown";

function NavBar() {
  const [connected, setConnected] = useState(false);
  const handleConnect = () => {
    setConnected(!connected);
  };
  return (
    <nav className="fixed w-full p-4 flex items-center justify-between bg-green-600 z-10">
      <Link
        href={"/"}
        className="mix-blend-multiply flex flex-col lg:flex-row lg:gap-6 items-center"
      >
        <Image
          alt="useless for the moment"
          //   src={"https://fakeimg.pl/300/"}
          src={logo}
          className="rounded-md mix-blend-multiply"
          width={60}
          height={60}
        />
        <h1 className="text-justify text-xl lg:text-3xl italic font-bold">
          Title App
        </h1>
      </Link>
      <ul className=" absolute top-full left-0 md:relative flex md:justify-evenly md:bg-transparent  justify-center gap-4 bg-green-700 w-full md:w-1/2">
        <li className="tracking-wider font-semibold w-max py-2 px-4 rounded border border-opacity-50 border-green-700 hover:shadow-xl transition-shadow duration-500 ">
          <Link href={"/tchat"}>tchat</Link>
        </li>
        <li className="tracking-wider font-semibold w-max py-2 px-4 rounded border border-opacity-50 border-green-700 hover:shadow-xl transition-shadow duration-500 ">
          <Link href={"/page/1"}>Page 1</Link>
        </li>
        <li className="tracking-wider font-semibold w-max py-2 px-4 rounded border border-opacity-50 border-green-700 hover:shadow-xl transition-shadow duration-500 ">
          <Link href={"/page/2"}>Page 2</Link>
        </li>
      </ul>
      <div>
        <SessionLoginBtn />
      </div>
    </nav>
  );
}

export default NavBar;
