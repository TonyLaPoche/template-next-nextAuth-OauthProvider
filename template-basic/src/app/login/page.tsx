import React from "react";

function Login() {
  return (
    <div className="">
      <h1>Login View</h1>
      <form className="flex flex-col gap-y-2">
        <input type="text" name="user" id="user" placeholder="Username" />
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
