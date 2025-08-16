import axios from "axios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

function AdminLogin({ setLogin }) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://sports-club-server-kt5y.onrender.com/login", {
        email,
        password,
      });
      
      localStorage.setItem("token", res.data.token);
     if(res.data.token){
         setLogin(true);
     }
      toast.success("Admin login successful!");
    } catch (err) {
      console.error(err);
      toast.warn("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center p-6">
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-indigo-700">
          Admin Login
        </h2>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            placeholder="admin@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => {
                setShow(!show);
              }}
              className="cursor-pointer absolute right-4 top-[18px]"
            >
              {show ? (
                <FaRegEyeSlash className="text-[#292929]" />
              ) : (
                <FaRegEye className="text-[#292929]" />
              )}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
