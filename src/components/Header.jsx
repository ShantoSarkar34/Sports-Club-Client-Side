import React, { use, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import logo from "../assets/logo-png.png";
import { toast } from "react-toastify";
import useCurrentUser from "../../useCurrentUser";
import { AuthContext } from "../authProvider/AuthProvider";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { logout } = use(AuthContext);
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    window.location.reload();
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "light" ? "dark" : "light"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`bg-[#2D2D2D] text-white shadow-none w-full fixed z-40 lg:z-50`}
    >
      <div className="container mx-auto px-4 ">
        <div className="navbar p-0 py-2 lg:py-4   mx-auto ">
          <div className="navbar-start">
            <div className="dropdown ">
              <button
                tabIndex={0}
                role="button"
                className="pr-3 pl-8 pt-2 cursor-pointer lg:hidden hover:text-primary focus:text-primary transition-all duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </button>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 pl-4 shadow bg-[#2D2D2D] space-y-[2px]"
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` text-[14px] jakarta-font font-semibold hover:text-primary border-b pb-1 transition-all duration-200 ${
                      isActive
                        ? "text-primary border-primary "
                        : "text-primary border-[#2D2D2D] "
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/courts"
                  className={({ isActive }) =>
                    ` text-[14px] jakarta-font font-semibold text-primary border-b pb-1 transition-all duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-primary border-[#2D2D2D]"
                    }`
                  }
                >
                  Courts
                </NavLink>
              </ul>
            </div>

            <a
              href="/"
              className=" text-sm lg:text-[28px] font-black text-primary flex items-center gap-1"
            >
              <img src={logo} alt="logo" className="w-22 lg:w-28" />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[14px] jakarta-font  font-semibold hover:text-primary transition-all duration-100 border-b-2 py-[1px] px-1 ${
                    isActive ? "text-primary" : "text-white border-[#2D2D2D]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/courts"
                className={({ isActive }) =>
                  ` text-[14px] jakarta-font font-semibold hover:text-primary  transition-all duration-100 border-b-2 py-[1px] px-1  ${
                    isActive ? "text-primary" : "text-white border-[#2D2D2D]"
                  }`
                }
              >
                Courts
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-4">
              {/* theme toggle button */}
              <button
                onClick={toggleTheme}
                className="relative cursor-pointer w-16 h-8 flex items-center rounded-full p-1 bg-gradient-to-r from-yellow-400 to-orange-500 dark:from-gray-700 dark:to-gray-900 shadow-lg transition-all duration-500 hover:scale-105"
              >
                {/* Toggle Circle */}
                <span
                  className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-yellow-400 dark:text-gray-200 transform transition-transform duration-500 ${
                    theme === "dark" ? "translate-x-8" : ""
                  }`}
                >
                  {theme === "light" ? (
                    <Moon size={18} className="text-gray-500" />
                  ) : (
                    <Sun size={18} className="text-yellow-500" />
                  )}
                </span>
              </button>
              {/* buttons */}
              <div>
                {user ? (
                  <div className="dropdown dropdown-center cursor-pointer">
                    <div
                      tabIndex={0}
                      className="w-10 h-10 rounded-full overflow-hidden border-2 transition-all duration-300 hover:border-[#bc26cf] border-[#19a831]"
                    >
                      <img src={user.photo} className=" object-cover" />{" "}
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-gray-500 rounded-box z-1 "
                    >
                      <li>
                        <h4 className="text-sm text-[#bc26cf] capitalize font-semibold">
                          {user.email}{" "}
                        </h4>
                      </li>
                      <li className="py-4">
                        <NavLink
                          to="/dashboard"
                          className={({ isActive }) =>
                            ` text-[14px] jakarta-font font-semibold hover:text-primary pb-[1px] transition-all duration-100 py-[2px] px-1  ${
                              isActive ? "text-white " : "text-primary "
                            }`
                          }
                        >
                          Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className=" rounded-[8px] text-center font-semibold text-[12px] bg-primary text-white lg:text-[16px] cursor-pointer transition-all duration-200"
                        >
                          Log out
                        </button>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="flex gap-4">
                    {/* log in button  */}
                    <NavLink
                      to="/login"
                      className="py-2 px-2 lg:py-[12px] lg:px-[24px] rounded-[8px] text-white font-semibold text-[12px]  lg:text-[16px] cursor-pointer hover:shadow-sm shadow-primary bg-primary transition-all duration-200"
                    >
                      Log In
                    </NavLink>
                    <NavLink
                      to="/signup"
                      className="py-2 px-2 lg:py-[12px] lg:px-[24px] rounded-[8px] text-white font-semibold text-[12px]  lg:text-[16px] cursor-pointer hover:shadow-sm shadow-primary bg-primary transition-all duration-200"
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
