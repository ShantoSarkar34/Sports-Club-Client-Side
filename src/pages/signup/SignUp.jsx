import React, { useEffect, useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { AuthContext } from "../../authProvider/AuthProvider";
const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [passError, setPassError] = useState("");
  const [nameError, setNameError] = useState("");

  const { logIn } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Sports-Club | SignUp";
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value.trim();
    const photo = form.photo.value;
    const email = form.email.value.trim();
    const password = form.password.value;
    const role = "user";
    const date = new Date().toISOString().slice(0, 10);

    // validation
    if (name.length < 5) {
      setNameError("Name should be more than 5 characters");
      return;
    } else {
      setNameError("");
    }

    if (password.length < 6) {
      setPassError("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setPassError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setPassError("Password must contain at least one lowercase letter");
      return;
    } else {
      setPassError("");
    }

    const userInfo = {
      name,
      photo,
      email,
      password,
      role,
      date,
    };

    fetch("https://sports-club-server-kt5y.onrender.com/all-users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => {
        if (res.status === 409) {
          throw new Error("User already exists with this email");
        }
        return res.json();
      })
      .then((data) => {
        if (data.insertedId) {
          logIn(userInfo); // login from context
          toast.success("Sign up successful!");
          navigate("/");
          window.location.reload();
        }
      })
      .catch((err) => {
        toast.error(err.message); // Show proper message
        console.error("Sign-up error:", err);
      });
  };

  return (
    <div className="">
      <div className="py-10">
        <div className="flex flex-col max-w-md mx-auto p-6 rounded-md sm:p-10 bg-[#dde5de] text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold text-primary">Sign Up</h1>
            <p className="text-sm text-[#292929]">
              Sign up to access your account
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-12">
            <div className="space-y-4">
              {/* name */}
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-primary"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full placeholder:text-[#292929] focus:outline-primary px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
                {nameError && (
                  <p className="text-sm text-red-500 mt-1">{nameError}</p>
                )}
              </div>

              {/* photo url */}
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-sm text-primary"
                >
                  Your Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL"
                  className="w-full placeholder:text-[#292929] focus:outline-primary px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>

              {/* email */}
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
                  id="email"
                  required
                  placeholder="example@email.com"
                  className="w-full placeholder:text-[#292929] focus:outline-primary px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>

              {/* password */}
              <div>
                <div className="mb-2">
                  <label htmlFor="password" className="text-sm text-primary">
                    Password
                  </label>
                </div>
                <div className="relative">
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    placeholder="Your password"
                    className="w-full placeholder:text-[#292929] px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
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
                {passError && (
                  <p className="pt-1 text-sm text-red-500 mt-1">{passError}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <button type="submit" className="w-full btn btn-primary">
                  Sign Up
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[#292929]">
                Already have an account?
                <NavLink to="/login" className="underline pl-1 text-primary">
                  Log In
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
