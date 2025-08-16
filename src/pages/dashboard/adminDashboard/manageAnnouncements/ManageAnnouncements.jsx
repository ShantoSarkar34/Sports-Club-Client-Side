import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ManageAnnouncements() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/admin/announcement")
      .then((res) => {
        setData(res.data);
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

  // Add new announcement
  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const des = form.des.value;
    const date = new Date().toISOString().slice(0, 10);

    const formData = { title, des, date };

    fetch("https://sports-club-server-kt5y.onrender.com/admin/announcement", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newDoc) => {
        setData((prev) => [...prev, newDoc]);
        toast.success("New Announcement added!");
        setShowModal(false);
        form.reset();
      })
      .catch((err) => console.error(err));
    setShowModal(false);
  };

  const updateAnnouncement = (id) => {
    navigate(`/dashboard/admin/announcements/update/${id}`);
  };

  const deleteAnnouncement = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sports-club-server-kt5y.onrender.com/admin/announcement/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((dat) => {
            if (dat.deletedCount) {
              const remainingUser = data.filter((data) => data._id !== id);
              setData(remainingUser);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Announcement has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-indigo-600">
          Manage Announcements
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#0da1ff] cursor-pointer text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          + Add Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div className="space-y-4">
        {data?.map((a) => (
          <div
            key={a._id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{a.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{a.date}</p>
              <p className="text-gray-700">{a.des}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => updateAnnouncement(a._id)}
                className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteAnnouncement(a._id)}
                className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-indigo-600 mb-4">
              Add New Announcement
            </h3>
            <form onSubmit={handleAddAnnouncement}>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter title..."
              />
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="des"
                className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
                placeholder="Enter description..."
                rows="3"
              ></textarea>
              <div className="mb-4 text-gray-600 text-sm">
                Current Date:{" "}
                <span className="font-semibold">
                  {new Date().toISOString().slice(0, 10)}
                </span>
              </div>
              <button
                type="submit"
                className="bg-[#0da1ff] cursor-pointer text-white w-full py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                Add Announcement
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
