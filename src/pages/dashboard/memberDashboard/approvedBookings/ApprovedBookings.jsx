import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import useCurrentUser from "../../../../../useCurrentUser";

export default function ApprovedBookings() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const {user} = useCurrentUser()

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/all-court")
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

  const cancelBooking = (id) => {
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

  const handlePayment = (data) => {
    navigate(`/dashboard/member/payment/${data._id}`, { state: data });
  };

  

  const pendingRequests = data?.filter(
    (req) => req.status !== "pending" && req.paymentStatus === "due"
  );

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6">
        Approved Bookings
      </h2>

      {pendingRequests?.length > 0 ? (
        <div className="space-y-4">
          {pendingRequests?.map((b) => (
            <div key={b._id}>
              {b.paymentStatus === "due" ? (
                <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500 flex justify-between items-center">
                  <div>
                    <p className="text-gray-500 text-sm mb-1">{b.userEmail}</p>
                    <p className="font-medium">{b.courtType}</p>
                    <p>Slot: {b.slot}</p>
                    <p>Price: ${b.totalPrice}</p>
                    <p>Date: {b.date}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handlePayment(b)}
                      className="bg-[#0da1ff] hover:bg-blue-600 text-white py-2 cursor-pointer px-4 rounded-lg"
                    >
                      Pay Now
                    </button>
                    <button
                      onClick={() => cancelBooking(b._id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-2 cursor-pointer px-4 rounded-lg"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 py-10">No approved bookings..!</p>
      )}
    </div>
  );
}
