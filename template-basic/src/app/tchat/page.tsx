"use client";
import React from "react";

function Tchat() {
  function handleForm(event: any) {
    event.preventDefault();
  }
  return (
    <section>
      <h1 className="text-center px-4 py-2 font-semibold text-lg">
        Welcome to the Tchat Room
      </h1>
      <div id="Tchat">
        <ul className="border w-5/6 max-h-44 overflow-y-scroll overscroll-contain py-3 px-2 mx-auto">
          <li id="UserMessage" className="px-3 py-2">
            <span
              id="UserName"
              className="text-green-600 tracking-wider font-semibold underline"
            >
              Username
            </span>
            {" : "}
            <span className="text-justify">
              Message content, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt dignissimos eum reprehenderit pariatur
              atque exercitationem, porro quia vitae debitis tenetur consectetur
              natus nesciunt ut explicabo? Quae ea aperiam porro enim!
            </span>
          </li>
          <li id="OtherUserMessage" className="px-3 py-2">
            <span
              id="UserName"
              className="text-red-600 tracking-wider font-semibold underline"
            >
              Other User
            </span>
            {" : "}
            <span>
              Message content, Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Incidunt dignissimos eum reprehenderit pariatur
              atque exercitationem, porro quia vitae debitis tenetur consectetur
              natus nesciunt ut explicabo? Quae ea aperiam porro enim!
            </span>
          </li>
        </ul>
      </div>
      <form onSubmit={handleForm}>
        <input type="text" />
        <button type="submit">send</button>
      </form>
    </section>
  );
}

export default Tchat;
