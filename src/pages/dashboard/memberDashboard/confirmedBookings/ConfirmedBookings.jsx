import { useEffect, useState } from "react";
import useCurrentUser from "../../../../../useCurrentUser";

export default function ConfirmedBookings() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { user } = useCurrentUser();

  useEffect(() => {
    fetch("https://sports-club-server-kt5y.onrender.com/member/payment")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
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
  // const filterData = data?.filter((val) => val.userEmail === user?.email);

  return (
    <div>
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6">
        Confirmed Bookings
      </h2>
      {data.length === 0 ? (
        <p className="text-gray-600">No confirmed bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {data.map((b) => (
            <div
              key={b._id}
              className="p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <p className="font-semibold">{b.courtName}</p>
              <p>Slot: {b.slot}</p>
              <p>Price: ${b.finalPrice}</p>
              <p>Date: {b.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
