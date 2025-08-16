import React, { useEffect } from "react";
import { useState } from "react";
export default function ManageConfirmedBookings() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  const filtered = data?.filter((b) =>
    b.courtName.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("https://sports-club-server-kt5y.onrender.com/member/payment")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Confirmed Bookings
      </h2>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 mb-4 rounded-lg w-full md:w-1/3"
      />
      {filtered.map((b) => (
        <div key={b._id} className="bg-white p-4 rounded-lg shadow-md mb-3">
          <p className="font-semibold">{b.courtName}</p>
          <p>{b.slot}</p>
          <p>{b.date}</p>
          <p>User: {b.userName}</p>
        </div>
      ))}
    </div>
  );
}
