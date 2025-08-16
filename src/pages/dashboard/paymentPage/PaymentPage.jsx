import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function PaymentPage() {
  const { state: data } = useLocation();
  const [coupon, setCoupon] = useState("");
  const [coupons, setCoupons] = useState([]);
  const [finalPrice, setFinalPrice] = useState(data?.totalPrice || 0);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const navigate = useNavigate();
  const date = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    fetch("https://sports-club-server-kt5y.onrender.com/admin/coupons")
      .then((res) => res.json())
      .then((dbCoupons) => {
        setCoupons(dbCoupons);
      })
      .catch((err) => console.error("Failed to load coupons", err));
  }, []);

  // Apply coupon
  const applyCoupon = () => {
    if (!coupon.trim()) {
      toast.warn("Please enter a coupon code");
      return;
    }

    // find coupon from DB list
    const found = coupons.find(
      (c) => c.coupon.toLowerCase() === coupon.trim().toLowerCase()
    );

    if (!found) {
      toast.error("Invalid coupon code");
      setAppliedCoupon(null);
      setFinalPrice(data.totalPrice);
      return;
    }

    const discountPercent = parseFloat(found.discount.replace("%", ""));
    const newPrice =
      data.totalPrice - (data.totalPrice * discountPercent) / 100;

    setFinalPrice(newPrice.toFixed(2));
    setAppliedCoupon(found);
    toast.success(`Coupon "${found.coupon}" applied! (${found.discount} off)`);
  };
  // submit payment
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const courtName = form.court.value;
    const slot = form.slot.value;
    const status = "Paid";
    const userName = data.userName;
    const userEmail = data.userEmail;
    const payStatus = {
      courtName,
      userName,
      userEmail,
      slot,
      finalPrice,
      paymentMethod,
      date,
      status,
    };

    // First: save payment
    fetch("https://sports-club-server-kt5y.onrender.com/member/payment", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payStatus),
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.insertedId) {
          // Second: update paymentStatus in all-court
          fetch(`https://sports-club-server-kt5y.onrender.com/all-court/${data._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ paymentStatus: "paid" }), 
          })
            .then((res) => res.json())
            .then((updateRes) => {
              if (updateRes.modifiedCount > 0) {
                toast.success("Payment Successful and status updated!");
                navigate("/dashboard/member/confirmed");
              }
            });
        }
      });
  };

  if (!data) return <p>No booking data.</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-[#0da1ff] mb-6">Payment</h2>

      {/* Coupon input */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="border p-2 rounded-lg flex-1"
        />
        <button
          onClick={applyCoupon}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
        >
          Apply
        </button>
      </div>

      {/* Booking details */}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          readOnly
          value={data.userEmail || "user@example.com"}
          className="border p-2 w-full rounded-lg"
        />
        <div>
          <p className="pb-1">Court Name</p>
          <input
            readOnly
            name="court"
            value={data.courtType}
            className="border p-2 w-full rounded-lg"
          />
        </div>
        <div>
          <p className="pb-1"> Slot</p>
          <input
            readOnly
            name="slot"
            value={data.slot}
            className="border p-2 w-full rounded-lg"
          />
        </div>
        <div>
          <p className="pb-1">Payment Date</p>
          <input
            readOnly
            value={date}
            className="border p-2 w-full rounded-lg"
          />
        </div>
        {/* Payment method dropdown */}
        <div>
          <p className="pb-1">Payment Method</p>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="border p-2 w-full rounded-lg"
          >
            <option value="Card">Card</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>

        {/* Final price */}
        <div>
          <p htmlFor="" className="pb-1">
            Price
          </p>
          <input
            readOnly
            value={`$${finalPrice}`}
            className="border p-2 w-full rounded-lg font-bold text-lg"
          />
        </div>

        {/* Show applied coupon */}
        {appliedCoupon && (
          <p className="text-green-600 text-sm">
            ✅ Applied: {appliedCoupon.coupon} ({appliedCoupon.discount} off)
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-[#0da1ff] hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold"
        >
          Submit Payment
        </button>
      </form>
    </div>
  );
}
