import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/users/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Test() {
  const data = await getData();

  return (
    <div>
      <h1>Page de TEST</h1>
      {data.map((user: any, index: number) => (
        <div className="p-2 border rounded mt-2" key={index}>
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default Test;
