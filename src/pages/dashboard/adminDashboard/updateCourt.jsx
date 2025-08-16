import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router";

export default function UpdateCourt() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [slotInput, setSlotInput] = useState("");
  const [slots, setSlots] = useState([]);
  const court = useLoaderData();
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

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const type = form.court.value;
    const price = form.price.value;
    if (!image || !type || slots.length === 0 || !price) {
      toast.warn("Please fill all fields and add at least one slot");
      return;
    }
    const updateCourt = {
      type,
      price: parseFloat(price),
      image,
      slots,
    };
    fetch(`https://sports-club-server-kt5y.onrender.com/admin/courts/${court._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCourt),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Court info Updated Successfully!");
          navigate("/dashboard/admin/courts");
          e.target.reset();
        }
      });
    setSlots([]);
    setSlotInput("");
  };

  const handleAddSlot = () => {
    if (slotInput.trim() === "") return;
    setSlots([...slots, slotInput.trim()]);
    setSlotInput("");
  };

  const handleRemoveSlot = (slotToRemove) => {
    setSlots(slots.filter((s) => s !== slotToRemove));
  };

  const handleNavigate = () => {
    navigate("/dashboard/admin/courts");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* update court modal  */}
      <div className=" flex items-center justify-center z-50">
        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full relative">
          <button
            className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-800"
            onClick={() => handleNavigate()}
          >
            <X size={22} />
          </button>
          <h3 className="text-xl font-bold mb-6 text-gray-800">
            Update Court Informations
          </h3>
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">
                Court Image URL
              </label>
              <input
                type="text"
                name="image"
                defaultValue={court.image}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Court Type</label>
              <input
                type="text"
                defaultValue={court.type}
                name="court"
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
                name="price"
                defaultValue={court.price}
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
    </div>
  );
}
