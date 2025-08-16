import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AdminProfile() {
  const [user, setUser] = useState();
  const [info, setInfo] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/all-users")
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/admin/courts")
      .then((res) => {
        setInfo(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const totalMember = user?.filter((user) => user.role === "member");
  const admin = user?.filter((ad) => ad.role === "admin");


  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">Admin Profile</h2>
      {admin?.map((res) => (
        <div
          key={res._id}
          className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-6 items-start md:items-center"
        >
          <img
            src={res.photo}
            alt={res.photo}
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          />
          <div>
            <h3 className="text-2xl font-semibold">{res.name}</h3>
            <p className="text-gray-600">{res.email}</p>
            <div className="mt-4 space-y-1">
              <p>
                Total Courts: <span className="font-bold">{info?.length}</span>
              </p>
              <p>
                Total Users: <span className="font-bold">{user?.length}</span>
              </p>
              <p>
                Total Members:{" "}
                <span className="font-bold">{totalMember?.length}</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
