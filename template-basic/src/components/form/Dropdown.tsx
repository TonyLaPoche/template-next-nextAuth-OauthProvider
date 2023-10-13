import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { Icon } from "@iconify/react";

const DropdownButton = () => {
  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    const provider = event.currentTarget.name;
    console.log(event.currentTarget.name);
    signIn(provider);
  };

  return (
    <div className="group inline-block relative  font-semibold">
      <button className="bg-gray-300 text-gray-700 py-2 px-4 group-hover:rounded-t group-hover:rounded-b-none rounded inline-flex items-center">
        <span className="mr-1">Connexion</span>
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </button>
      <ul className="absolute hidden text-gray-700 group-hover:block group-hover:w-full border rounded-b-lg ">
        {/* <span className="block px-4 pt-2 bg-gray-200 font-normal text-center text-xs italic">
          Déjà un compte ?
        </span>

        <li className="block px-4 py-2 bg-gray-200  hover:bg-gray-400">
          <button
            className="flex justify-between items-center w-full text-sm "
            onClick={() => alert("Work in Progress")}
            disabled
          >
            <Icon icon="mdi:application-brackets" />
            <span>Se connecter</span>
          </button>
        </li>
        <span className="block px-4 bg-gray-200 font-normal text-center text-xs italic">
          ou
        </span>
        <li className="block px-4 py-2 bg-gray-200  hover:bg-gray-400">
          <button
            className="flex justify-between items-center w-full text-sm "
            onClick={() => alert("Work in Progress")}
            disabled
          >
            <Icon icon="mdi:application-brackets" />
            <span>S&apos;inscrire</span>
          </button>
        </li>
        <span className="block px-4 bg-gray-200 font-normal text-center text-xs italic">
          Sinon
        </span> */}
        <li className="block  bg-gray-200  hover:bg-gray-400">
          <button
            name="discord"
            className="flex px-4 py-2 justify-between items-center w-full text-sm text-left"
            onClick={handleSignIn}
          >
            <Icon icon="ic:baseline-discord" />
            <span>Discord</span>
          </button>
        </li>

        <li className="block bg-gray-200  hover:bg-gray-400">
          <button
            name="github"
            className="flex  px-4 py-2 justify-between items-center w-full text-sm text-left"
            onClick={handleSignIn}
          >
            <Icon icon="mdi:github" />
            <span>GitHub</span>
          </button>
        </li>

        <li className="block bg-gray-200  hover:bg-gray-400 rounded-b-lg">
          <button
            name="google"
            className="flex  px-4 py-2 justify-between items-center w-full text-sm text-left"
            onClick={handleSignIn}
          >
            <Icon icon="devicon:google" />
            <span>Google</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownButton;
