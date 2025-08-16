import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateAnnouncements = () => {
  const navigate = useNavigate();
  const announcement = useLoaderData();

  const handleUpdateForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const des = form.des.value;
    const date = new Date().toISOString().slice(0, 10);
    const formData = {
      title,
      des,
      date,
    };
    fetch(`https://sports-club-server-kt5y.onrender.com/admin/announcement/${announcement._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Announcement info Updated Successfully!");
          navigate("/dashboard/admin/announcements");
          e.target.reset();
        }
      });
  };

  const handleNavigate = () => {
    navigate("/dashboard/admin/announcements");
  };
  return (
    <div>
      <div className=" flex items-center justify-center  z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
          <button
            onClick={() => handleNavigate()}
            className="absolute cursor-pointer px-2 rounded-md top-3 right-3 text-gray-500 hover:text-gray-800 bg-slate-200"
          >
            ✕
          </button>
          <h3 className="text-xl font-bold text-indigo-600 mb-4">
            Update Announcement
          </h3>
          <form onSubmit={handleUpdateForm}>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={announcement.title}
              className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="des"
              defaultValue={announcement.des}
              className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
              rows="3"
            ></textarea>
            <div className="mb-4 text-gray-600 text-sm">
              Last Update Date:{" "}
              <span className="font-semibold">{announcement.date}</span>
            </div>
            <button
              type="submit"
              className="bg-[#0da1ff] cursor-pointer text-white w-full py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Update Announcement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateAnnouncements;
