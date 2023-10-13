import Link from "next/link";
import React from "react";

function Rooms() {
  const fakeDataRooms = [
    {
      id: 1,
      value: "nameNameanlazdqdqsd",
      statue: "online",
      codeName: "codeName",
    },
  ];

  return (
    <div className="px-2">
      <h2 className="text-center font-bold capitalize tracking-wide italic text-2xl py-3">
        LOBBY
      </h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {fakeDataRooms.map((item, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{item.id}</td>
              <td className="border px-4 py-2">{item.value}</td>
              <td className="border px-4 py-2">{item.statue}</td>
              <td className="border px-4 py-2">
                <Link
                  href={`/rooms/${item.codeName}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Enter
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
