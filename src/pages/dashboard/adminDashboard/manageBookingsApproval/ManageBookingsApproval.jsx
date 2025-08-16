import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export default function ManageBookingsApproval() {
  const [newData, setNewData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://sports-club-server-kt5y.onrender.com/all-court")
      .then((res) => {
        setNewData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  // const handleApprove = (id) => {
  //   const status = "approved";
  //   const update = { status };

  //   fetch(`https://sports-club-server-kt5y.onrender.com/all-court/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(update),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       if (result.modifiedCount > 0) {
  //         toast.success("Approved booking!");
  //         setNewData((prevData) =>
  //           prevData.map((item) =>
  //             item._id === id ? { ...item, status: "approved" } : item
  //           )
  //         );
  //       }
  //     })
  //     .catch((err) => console.error(err));
  // };

const handleApprove = (id, userEmail ) => {
  const status = "approved";
  const update = { status };
  console.log(userEmail);
  

  // 1. Approve court booking
  fetch(`https://sports-club-server-kt5y.onrender.com/all-court/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.modifiedCount > 0) {
        // 2. Update user's role to "member"
        const memberUpdate = {
          role: "member",
          memberSince: new Date().toISOString().slice(0, 10),
        };

        fetch(`https://sports-club-server-kt5y.onrender.com/all-users/${userEmail}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(memberUpdate),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.modifiedCount > 0) {
              toast.success("Approved and User Role Updated!");
              setNewData((prevData) =>
                prevData.map((item) =>
                  item._id === id ? { ...item, status: "approved" } : item
                )
              );
            } else {
              toast.warn("Booking approved, but user role not updated");
            }
          });
      }
    })
    .catch((err) => console.error("Error approving booking:", err));
};

  const handleReject = (id) => {
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
              const remainingUser = newData.filter((data) => data._id !== id);
              setNewData(remainingUser);
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

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center ">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  const pendingRequests = newData.filter((req) => req.status === "pending");  

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Manage Bookings Approval
      </h2>

      {pendingRequests.length > 0 ? (
        <div>
          {newData.map((req, idx) => (
            <div key={idx}>
              <div>
                {req.status === "pending" ? (
                  <div className="p-4 bg-white rounded-lg shadow-md mb-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{req.userName}</p>
                      <p>{req.courtType}</p>
                      <p>
                        {req.date} - {req.slot}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApprove(req._id, req.userEmail)}
                        className="bg-green-500 cursor-pointer hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(req._id)}
                        className="bg-red-500 cursor-pointer hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center py-10">
          No pending for bookings...!
        </p>
      )}
    </div>
  );
}
