import Link from "next/link";
import React from "react";

type Utilisateur = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      latitude: number;
      longitude: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function DynamiquePage() {
  const data = await getData();

  return (
    <div>
      {data.map((user: Utilisateur) => {
        return (
          <div className="flex flex-col p-4 border rounded" key={user.id}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </div>
        );
      })}
      <Link
        href="/"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center"
      >
        Home
      </Link>
    </div>
  );
}

export default DynamiquePage;
