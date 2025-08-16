import axios from "axios";
import React, { useEffect, useState } from "react";
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

export default function AdminProfile() {
  const [user, setUser] = useState([]);
  const [info, setInfo] = useState([]);
  const [coupon, setCoupon] = useState([]);
  const [announcement, setAnnouncement] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get("https://sports-club-server-kt5y.onrender.com/all-users"),
      axios.get("https://sports-club-server-kt5y.onrender.com/admin/courts"),
      axios.get("https://sports-club-server-kt5y.onrender.com/admin/coupons"),
      axios.get(
        "https://sports-club-server-kt5y.onrender.com/admin/announcement"
      ),
    ])
      .then(([userRes, courtRes, couponRes, announcementRes]) => {
        setUser(userRes.data);
        setInfo(courtRes.data);
        setCoupon(couponRes.data);
        setAnnouncement(announcementRes.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const totalMember = user?.filter((u) => u.role === "member");
  const admin = user?.filter((ad) => ad.role === "admin");

  // Top 5 most booked courts (fake impressions based on random count)
  const courtData = info?.map((court) => ({
    name: court.type,
    bookings: court.slots?.length || Math.floor(Math.random() * 10),
  }));

  const pieData = [
    { name: "Members", value: totalMember?.length || 0 },
    { name: "Users", value: user?.length || 0 },
    { name: "Courts", value: info?.length || 0 },
    { name: "Coupons", value: coupon?.length || 0 },
    { name: "Announcements", value: announcement?.length || 0 },
  ];

  const COLORS = ["#0088FE", "#FFBB28", "#FF8042", "#00C49F", "#645EFF"];

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      {admin?.map((res) => (
        <div
          key={res._id}
          className="bg-gradient-to-r from-indigo-500 to-purple-500  p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 items-center text-white"
        >
          <img
            src={res.photo}
            alt={res.photo}
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <div>
            <h3 className="text-3xl font-bold">{res.name}</h3>
            <p className="text-lg opacity-90">{res.email}</p>
            <div className="mt-4 flex gap-6 text-sm">
              <p className="bg-white/20 px-4 py-2 rounded-lg">
                Courts: <span className="font-bold">{info?.length}</span>
              </p>
              <p className="bg-white/20 px-4 py-2 rounded-lg">
                Users: <span className="font-bold">{user?.length}</span>
              </p>
              <p className="bg-white/20 px-4 py-2 rounded-lg">
                Members:{" "}
                <span className="font-bold">{totalMember?.length}</span>
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Charts Section */}
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
        <div className="bg-white rounded-xl p-6 shadow-md">
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
        </div>
      </div>
    </div>
  );
}
