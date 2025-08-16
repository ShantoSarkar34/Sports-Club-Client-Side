import React, { useEffect, useRef, useState, use } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../authProvider/AuthProvider";

export default function LogIn() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const location = useLocation();
  const { logIn } = use(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    fetch("https://sports-club-server-kt5y.onrender.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Invalid email or password");
        }
        return res.json();
      })
      .then((user) => {
        logIn(user);
        setSuccess(true);
        setError("");
        toast.success("Login successful!");
        navigate(location.state ? location.state : "/");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        setSuccess(false);
        setError("Invalid email or password");
      });
  };

  useEffect(() => {
    document.title = "Sports-Club | LogIn";
    if (error) {
      toast.warn(error);
    }
  }, [error]);

  return (
    <div className="">
      <div className="py-10">
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-[#dde5de] text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-primary">Log In</h1>
            <p className="text-sm text-[#292929]">
              Login to access your account
            </p>
          </div>
          <form onSubmit={handleLogIn} className="space-y-12">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-primary"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  ref={emailRef}
                  id="email"
                  placeholder="leroy@jenkins.com"
                  className="w-full px-3 placeholder:text-[#292929] py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label htmlFor="password" className="text-sm text-primary">
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs hover:underline text-primary cursor-pointer"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="flex relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="*****"
                    className="w-full px-3 placeholder:text-[#292929] py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setShow(!show);
                    }}
                    className="cursor-pointer absolute right-4 top-[14px]"
                  >
                    {show ? (
                      <FaRegEyeSlash className="text-[#292929]" />
                    ) : (
                      <FaRegEye className="text-[#292929]" />
                    )}
                  </button>
                </div>
                {error && (
                  <p className="text-sm text-red-500 mt-2">
                    Invalid email or password!
                  </p>
                )}
                {success && (
                  <p className="text-sm text-green-600 mt-2">
                    Login Successfully
                  </p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button type="submit" className="w-full btn btn-primary mb-1">
                  Log In
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[#292929]">
                Don't have an account yet?
                <NavLink
                  to="/signup"
                  className="underline text-default-600 pl-1 text-primary"
                >
                  Sign up
                </NavLink>
                .
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
