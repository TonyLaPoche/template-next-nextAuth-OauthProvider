"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import logo from "../../../public/assets/logo.png";

function NavBar() {
  const [connected, setConnected] = useState(false);
  const handleConnect = () => {
    setConnected(!connected);
  };
  return (
    <nav className="fixed w-full p-4 flex items-center justify-between bg-green-600">
      {/* <div id="testIcon">
        <span className="mdi mdi-menu"></span>
      </div> */}
      <div className="mix-blend-multiply flex flex-col lg:flex-row lg:gap-6 items-center">
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
      </div>
      <ul className=" absolute top-full left-0 md:relative flex md:justify-evenly md:bg-transparent  justify-center gap-4 bg-green-700 w-full md:w-1/2">
        <li className="tracking-wider font-semibold w-max py-2 px-4 rounded border border-opacity-50 border-green-700 hover:shadow-xl transition-shadow duration-500 ">
          <Link href={"#!"}>LINK</Link>
        </li>
        <li className="tracking-wider font-semibold w-max py-2 px-4 rounded border border-opacity-50 border-green-700 hover:shadow-xl transition-shadow duration-500 ">
          <Link href={"#!"}>LINK</Link>
        </li>
        <li className="tracking-wider font-semibold w-max py-2 px-4 rounded border border-opacity-50 border-green-700 hover:shadow-xl transition-shadow duration-500 ">
          <Link href={"#!"}>LINK</Link>
        </li>
      </ul>
      <div>
        <button
          onClick={handleConnect}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center"
        >
          {connected ? (
            <span className="mdi mdi-login"></span>
          ) : (
            <span className="mdi mdi-logout"></span>
          )}

          {connected ? "Disconnect" : "Connect"}
          {connected ? (
            <span>
              <Image
                src={"https://fakeimg.pl/300/"}
                alt="useless for the moment"
                className="rounded-full mix-blend-multiply"
                width={30}
                height={30}
              />
            </span>
          ) : null}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
