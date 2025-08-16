import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function ManageCourts() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [slotInput, setSlotInput] = useState("");
  const [slots, setSlots] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/admin/courts")
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

  // handle add
  const handleAddCourt = (e) => {
    e.preventDefault();
    if (!image || !type || slots.length === 0 || !price) {
      toast.warn("Please fill all fields and add at least one slot");
      return;
    }
    const newCourt = {
      type,
      price: parseFloat(price),
      image,
      slots,
    };
    fetch("https://sports-club-server-kt5y.onrender.com/admin/courts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCourt),
    })
      .then((res) => res.json())
      .then((createdCourt) => {
        setData((prev) => [...prev, createdCourt]);
        toast.success("New Court added!");
      })
      .catch((err) => console.error(err));
    setImage("");
    setType("");
    setPrice("");
    setSlots([]);
    setSlotInput("");
    setShowModalAdd(false);
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/admin/courts/update/${id}`);
  };

  const handleDelete = (id) => {
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
        fetch(`https://sports-club-server-kt5y.onrender.com/admin/courts/${id}`, {
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
          text: "Your Court has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleAddSlot = () => {
    if (slotInput.trim() === "") return;
    setSlots([...slots, slotInput.trim()]);
    setSlotInput("");
  };

  const handleRemoveSlot = (slotToRemove) => {
    setSlots(slots.filter((s) => s !== slotToRemove));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Top section button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Manage Courts</h2>
        <button
          onClick={() => setShowModalAdd(true)}
          className="px-5 cursor-pointer py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          + Add New Court
        </button>
      </div>

      {/* Courts Table */}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Court Name
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Price / Session
              </th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">
                Slots
              </th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((court) => (
              <tr
                key={court._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="py-3 px-4">{court.type}</td>
                <td className="py-3 px-4">${court.price}</td>
                <td className="py-3 px-4">
                  {court.slots?.length > 0 ? (
                    <ul className="list-disc pl-5">
                      {court.slots.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className="italic text-gray-500">No slots</span>
                  )}
                </td>
                <td className="py-3 px-4 text-right space-x-2">
                  <button
                    onClick={() => handleUpdate(court._id)}
                    className="px-4 cursor-pointer py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(court._id)}
                    className="px-4 cursor-pointer py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-6 text-gray-500 italic"
                >
                  No courts available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Court Modal */}
      {showModalAdd && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModalAdd(false)}
            >
              <X size={22} />
            </button>
            <h3 className="text-xl font-bold mb-6 text-gray-800">
              Add New Court
            </h3>
            <form onSubmit={handleAddCourt} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1">
                  Court Image URL
                </label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="https://example.com/court.jpg"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Court Type</label>
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="e.g. Tennis Court"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Multi Slot Add */}
              <div>
                <label className="block text-gray-700 mb-1">Add Slots</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={slotInput}
                    onChange={(e) => setSlotInput(e.target.value)}
                    placeholder="e.g. 6:00 AM - 7:00 AM"
                    className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button
                    type="button"
                    onClick={handleAddSlot}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                  >
                    Add Slot
                  </button>
                </div>
                {/* Slot chips */}
                <div className="flex flex-wrap mt-2 gap-2">
                  {slots.map((s, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                    >
                      {s}
                      <button
                        type="button"
                        onClick={() => handleRemoveSlot(s)}
                        className="text-red-500 hover:text-red-700"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-1">
                  Price per Session ($)
                </label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter price"
                  className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Add Court
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
