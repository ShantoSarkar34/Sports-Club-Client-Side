import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ManageCoupons() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/admin/coupons")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleAddCopun = (e) => {
    e.preventDefault();
    const form = e.target;
    const coupon = form.coupon.value;
    const discount = form.discount.value;
    const newCoupon = {
      coupon,
      discount,
    };

    fetch("https://sports-club-server-kt5y.onrender.com/admin/coupons", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoupon),
    })
      .then((res) => res.json())
      .then((createdCoupon) => {
        setData((prev) => [...prev, createdCoupon]);
        toast.success("New coupon added !");
        e.target.reset();
      });
  };

  const updateCoupon = (id) => {
    navigate(`/dashboard/admin/coupons/update/${id}`);
  };

  const deleteCoupon = (id) => {
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
        fetch(`https://sports-club-server-kt5y.onrender.com/admin/coupons/${id}`, {
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

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Manage Coupons
      </h2>
      <div>
        <form onSubmit={handleAddCopun} className="flex gap-2 mb-4">
          <input
            name="coupon"
            placeholder="Coupon Code"
            className="border p-2 rounded-lg"
          />
          <input
            name="discount"
            placeholder="Discount"
            className="border p-2 rounded-lg"
          />
          <button
            type="submit"
            className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Add
          </button>
        </form>
      </div>
      {data.map((c) => (
        <div
          key={c._id}
          className="bg-white p-4 rounded-lg shadow-md mb-3 flex justify-between items-center"
        >
          <span>
            {c.coupon} – {c.discount}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => updateCoupon(c._id)}
              className="bg-blue-500 cursor-pointer text-white px-3 py-1 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => deleteCoupon(c._id)}
              className="bg-red-500 cursor-pointer text-white px-3 py-1 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
