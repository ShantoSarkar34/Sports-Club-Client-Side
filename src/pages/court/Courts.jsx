import { useEffect, useState, use } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../authProvider/AuthProvider";
import { toast } from "react-toastify";
import axios from "axios";

export default function Courts() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedCourt, setSelectedCourt] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchSlot, setSearchSlot] = useState("");
  const { user } = use(AuthContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    document.title = "Sports-Club | Courts";
    axios
      .get("https://sports-club-server-kt5y.onrender.com/admin/courts")
      .then((res) => {
        setData(res.data);
        setFilteredData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) setCurrentPage(page);
  };

  const handleBookNow = (court) => {
    if (!user) {
      navigate("/login");
    } else {
      setSelectedCourt(court);
      setSelectedSlot(court.slots[0]);
      setSelectedDate("");
      setQuantity(1);
      setShowModal(true);
    }
  };

  const handleBookingSubmit = () => {
    if (!selectedDate) {
      toast.warn("Please choose a date");
      return;
    }
    const totalPrice = quantity * selectedCourt.price;
    const bookingData = {
      courtId: selectedCourt.id,
      courtType: selectedCourt.type,
      slot: selectedSlot,
      date: selectedDate,
      quantity,
      totalPrice,
      status: "pending",
      paymentStatus: "due",
      userEmail: user.email,
      userName: user.displayName,
    };
    fetch("https://sports-club-server-kt5y.onrender.com/all-court", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Booking request sent for admin approval!");
          setQuantity(1);
        }
      });
    setShowModal(false);
  };

  const sortByType = () => {
    const sorted = [...filteredData].sort((a, b) =>
      a.type.localeCompare(b.type)
    );
    setFilteredData(sorted);
    setCurrentPage(1);
  };

  const sortBySlotTime = () => {
    const sorted = [...filteredData].sort((a, b) => {
      const aTime = a.slots[0] || "";
      const bTime = b.slots[0] || "";
      return aTime.localeCompare(bTime);
    });
    setFilteredData(sorted);
    setCurrentPage(1);
  };

  const searchBySlot = (time) => {
    const filtered = data.filter((court) => court.slots.includes(time));
    setFilteredData(filtered);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center min-h-screen items-center">
        <span className="loading loading-dots loading-xl"></span>
      </div>
    );
  }

  return (
    <section
      className="w-full py-20 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 lg:mb-16 text-white drop-shadow-lg"
      >
        Explore <span className="text-[#0da1ff]"> Our Courts & Sessions</span>
      </motion.h2>

      {/* Sorting & Search */}
      <div className="flex flex-col md:flex-row items-center  gap-4 mb-8 lg:mb-16">
        <button
          onClick={sortByType}
          className="px-4 cursor-pointer py-2 bg-[#0da1ff] text-white rounded-xl hover:bg-[#0a8cd8] transition"
        >
          Sort by Name
        </button>
        <button
          onClick={sortBySlotTime}
          className="px-4 cursor-pointer py-2 bg-[#0da1ff] text-white rounded-xl hover:bg-[#0a8cd8] transition"
        >
          Sort by Slot Time
        </button>
        <input
          type="text"
          placeholder="Search by slot (e.g., 10:00 AM)"
          value={searchSlot}
          onChange={(e) => setSearchSlot(e.target.value)}
          className="border rounded-lg p-2 text-white"
        />
        <button
          onClick={() => searchBySlot(searchSlot)}
          className="px-4 cursor-pointer py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Search
        </button>
      </div>

      {/* Courts Grid */}
      {currentItems.length === 0 ? (
        <p className="text-center text-white text-xl mt-10">
          No court found in this time.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentItems.map((court, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={court.image}
                alt={court.type}
                className="h-56 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#0da1ff] mb-2">
                  {court.type}
                </h3>
                <p className="text-gray-700 mb-3">{court.description}</p>
                <p className="text-gray-600 mb-4 font-semibold">
                  Price per session: ${court.price}
                </p>
                <select
                  className="border rounded-lg p-2 mb-4"
                  defaultValue=""
                  onChange={(e) => setSelectedSlot(e.target.value)}
                >
                  <option value="">Select Slot</option>
                  {court.slots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => handleBookNow(court)}
                  className="mt-auto bg-[#0da1ff] cursor-pointer text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#0a8cd8] transition"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {currentItems.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#0da1ff] text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Booking Modal (unchanged) */}
      {showModal && selectedCourt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full relative"
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-[#0da1ff] mb-4">
              Book {selectedCourt.type}
            </h3>
            <div className="space-y-3 mb-4">
              <div className="text-gray-700">
                <strong>Court:</strong> {selectedCourt.type}
              </div>
              <div className="text-gray-700">
                <strong>Price per session:</strong> ${selectedCourt.price}
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Choose Slot</label>
                <select
                  value={selectedSlot}
                  onChange={(e) => setSelectedSlot(e.target.value)}
                  className="w-full border rounded-lg p-2"
                >
                  {selectedCourt.slots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Choose Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Number of Slots
                </label>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border rounded-lg p-2"
                />
              </div>
              <div className="text-lg font-semibold text-gray-800">
                Total Price: ${quantity * selectedCourt.price}
              </div>
            </div>
            <button
              onClick={handleBookingSubmit}
              className="bg-[#0da1ff] cursor-pointer text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#0a8cd8] transition w-full"
            >
              Confirm Booking
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
