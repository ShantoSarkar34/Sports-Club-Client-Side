import React, { useEffect } from "react";
import { useState } from "react";

export default function ManageUsers() {
  const [search, setSearch] = useState("");
  const [data, setdata] = useState()
  const [loading , setLoading] = useState(true)

  useEffect(()=>{
    fetch('https://sports-club-server-kt5y.onrender.com/all-users')
    .then((res)=> res.json())
    .then((data)=>{
      setdata(data);
      setLoading(false)
    })
    .catch((error)=>{
      console.log(error);
      setLoading(false) 
    })
  },[])
  
   const filtered = data?.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

    if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">All Users</h2>
      <input
        type="text"
        placeholder="Search users"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 rounded-lg w-full md:w-1/3"
      />
      <ul className="space-y-3">
        {filtered.map((u) => (
          <li key={u._id} className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold">{u.name}</p>
            <p>{u.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
