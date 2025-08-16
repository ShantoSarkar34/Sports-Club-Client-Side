import React, { useEffect } from "react";

import { useState } from "react";

export default function ManageMembers() {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://sports-club-server-kt5y.onrender.com/all-users")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  const mainUser = data.filter((user) => user.role === "member");
  const filtered = mainUser.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    // TODO: API delete
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Manage Members
      </h2>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 rounded-lg w-full md:w-1/3"
      />
      {filtered.map((m) => (
        <div
          key={m._id}
          className="p-4 bg-white rounded-lg shadow-md mb-3 flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{m.name}</p>
            <p>{m.email}</p>
          </div>
          <button
            onClick={() => handleDelete(m._id)}
            className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
