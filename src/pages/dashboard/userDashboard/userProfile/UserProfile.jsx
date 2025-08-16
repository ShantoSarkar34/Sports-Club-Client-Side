import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useCurrentUser from "../../../../../useCurrentUser";

export default function UserProfile() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useCurrentUser();

  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://sports-club-server-kt5y.onrender.com/my-courts?email=${user.email}`
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

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
        fetch(`https://sports-club-server-kt5y.onrender.com/all-court/${id}`, {
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
          text: "Your plant has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6">My Profile</h2>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10 bg-slate-100 p-6 rounded-xl shadow-md">
        <img
          src={user.photo}
          alt={user.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-[#0da1ff]"
        />
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            {user.displayName}
          </h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500 mt-2">
            Registered on:{" "}
            <span className="font-medium text-gray-700">{user.date}</span>
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#0da1ff] mb-4">
        Pending Bookings
      </h3>
      <div>
        {data.length === 0 ? (
          <p className="text-gray-600 text-center py-10">
            No pending bookings...!
          </p>
        ) : (
          <div className="space-y-4">
            {data.map((booking) => (
              <div
                key={booking._id}
                className="flex flex-col md:flex-row justify-between items-end md:items-center bg-white p-4 rounded-lg shadow-md border-l-4 border-[#0da1ff]"
              >
                <div className="">
                  <div className="flex items-center gap-3">
                    <p className="font-semibold text-gray-800">
                      {booking.courtType}
                    </p>
                    {booking.status === "pending" ? (
                      <p className=" border border-gray-300 text-green-600 py-[1px] px-3 text-[10px] rounded-full">
                        {booking.status}
                      </p>
                    ) : (
                      <></>
                    )}
                  </div>
                  <p className="text-gray-600">Slot: {booking.slot}</p>
                  <p className="text-gray-600">Quantity: {booking.quantity}</p>
                  <p className="text-gray-600">Price: ${booking.totalPrice}</p>
                </div>
                {booking.status === "pending" ? (
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className=" bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-colors"
                  >
                    Cancel
                  </button>
                ) : (
                  <p className="border-green-500 border px-4 rounded-full text-sm p-1 text-gray-500">
                    Approved
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
