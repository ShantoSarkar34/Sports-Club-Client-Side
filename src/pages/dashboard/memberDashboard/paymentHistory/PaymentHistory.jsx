import { useEffect, useState } from "react";
import useCurrentUser from "../../../../../useCurrentUser";

export default function PaymentHistory() {
  const [viewMode, setViewMode] = useState("table");
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

  return (
    <div>
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        Payment History
      </h2>

      {/* Toggle button */}
      <button
        onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
        className="mb-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary cursor-pointer transition"
      >
        Switch to {viewMode === "table" ? "Card View" : "Table View"}
      </button>

      {viewMode === "table" ? (
        //  TABLE LAYOUT
        <div className="overflow-x-auto bg-white shadow-md rounded-xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-indigo-100">
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Amount</th>
                <th className="p-3 text-left">Method</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p) => (
                <tr key={p._id} className="border-t hover:bg-gray-50">
                  <td className="p-3">{p.date}</td>
                  <td className="p-3">${p.finalPrice}</td>
                  <td className="p-3">{p.paymentMethod}</td>
                  <td className="p-3 font-medium">{p.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        //  CARD LAYOUT
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((p) => (
            <div
              key={p._id}
              className="bg-white shadow-md rounded-xl p-4 border border-gray-200 hover:shadow-lg transition"
            >
              <p className="font-semibold text-gray-700">
                <span className="text-gray-500">Date:</span> {p.date}
              </p>
              <p className="font-semibold text-gray-700">
                <span className="text-gray-500">Amount:</span> ${p.finalPrice}
              </p>
              <p className="font-semibold text-gray-700">
                <span className="text-gray-500">Method:</span> {p.paymentMethod}
              </p>
              <p className="font-bold mt-2">
                Status: <span className="text-green-600">{p.status}</span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
