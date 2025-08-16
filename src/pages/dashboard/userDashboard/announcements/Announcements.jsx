import axios from "axios";
import React, { useEffect, useState } from "react";

const Announcements = () => {
  const [announcement, setAnnouncement] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/admin/announcement")
      .then((res) => {
        setAnnouncement(res.data);
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

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6">Announcements</h2>
      <div className="space-y-6">
        {announcement.map((res, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#0da1ff]"
          >
            <h3 className="text-xl font-semibold text-gray-800">{res.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{res.date}</p>
            <p className="text-gray-700">{res.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
