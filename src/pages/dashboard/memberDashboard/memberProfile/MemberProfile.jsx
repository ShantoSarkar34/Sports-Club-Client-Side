import React, { useEffect, useState } from "react";
import useCurrentUser from "../../../../../useCurrentUser";

export default function MemberProfile() {
  const { user } = useCurrentUser();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sports-club-server-kt5y.onrender.com/all-users`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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

  const filterMember = data?.filter(
    (em) => em.email === user.email && em.role === user.role
  );


  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6">My Profile</h2>
      {filterMember.map((res, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-xl shadow-md"
        >
          <img
            src={res.photo}
            alt={res.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-[#0da1ff]"
          />
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">{res.name}</h3>
            <p className="text-gray-600">{res.email}</p>
            <p className="text-gray-500 mt-2">
              Member since:{" "}
              <span className="font-medium text-gray-700">
                {res.memberSince}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
