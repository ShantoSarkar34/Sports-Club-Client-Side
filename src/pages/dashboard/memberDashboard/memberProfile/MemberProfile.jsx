import React, { useEffect, useState } from "react";
import useCurrentUser from "../../../../../useCurrentUser";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import axios from "axios";

export default function MemberProfile() {
  const { user } = useCurrentUser();
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [confirm, setConfirm] = useState([]);
  const [announcement, setAnnouncement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get("https://sports-club-server-kt5y.onrender.com/all-users"),
      axios.get("https://sports-club-server-kt5y.onrender.com/all-court"),
      axios.get("https://sports-club-server-kt5y.onrender.com/member/payment"),
      axios.get(
        "https://sports-club-server-kt5y.onrender.com/admin/announcement"
      ),
    ])
      .then(([userRes, courtRes, confirmRes, annRes]) => {
        setData(userRes.data);
        setNewData(courtRes.data);
        setConfirm(confirmRes.data);
        setAnnouncement(annRes.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
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
  const pendingRequests = newData.filter((req) => req.status === "pending");
  const approve = newData?.filter(
    (req) => req.status !== "pending" && req.paymentStatus === "due"
  );

  const pieData = [
    { name: "Pending", value: pendingRequests?.length || 0 },
    { name: "Approved", value: approve?.length || 0 },
    { name: "Confirm", value: confirm?.length || 0 },
    { name: "Announcement", value: announcement?.length || 0 },
  ];

  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F", "#645EFF"];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6 ">My Profile</h2>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            System Overview
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Bar Chart */}
        {/* <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">
                  Top Booked Courts
                </h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={courtData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#555" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="bookings" fill="#6366F1" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div> */}
      </div>
    </div>
  );
}
