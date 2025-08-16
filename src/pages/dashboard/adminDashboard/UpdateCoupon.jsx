import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";

const UpdateCoupon = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon = form.coupon.value;
    const discount = form.discount.value;
    const newCoupon = {
      coupon,
      discount,
    };
    fetch(`https://sports-club-server-kt5y.onrender.com/admin/coupons/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoupon),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Coupon Updated Successfully!");
          navigate("/dashboard/admin/coupons");
          e.target.reset();
        }
      });
  };

  const handleNavigate = () => {
    navigate("/dashboard/admin/coupons");
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
            Update Coupon
          </h3>
          <form onSubmit={handleUpdateForm}>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="coupon"
              defaultValue={data.coupon}
              className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="discount"
              defaultValue={data.discount}
              className="w-full border rounded-lg p-2 mb-4 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
            <button
              type="submit"
              className="bg-[#0da1ff] cursor-pointer text-white w-full py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Update Coupons
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoupon;
