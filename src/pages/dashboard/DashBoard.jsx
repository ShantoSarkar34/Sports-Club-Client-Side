import { NavLink, Outlet } from "react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import useCurrentUser from "../../../useCurrentUser";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const { user } = useCurrentUser();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://sports-club-server-kt5y.onrender.com/all-users`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
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

  const filterUserEmail = data?.filter((em) => em.email === user?.email);
  const filteredUser = filterUserEmail?.filter(
    (res) => res.role === user?.role
  );

  const navItems = [
    { name: "User Dashboard", path: "/dashboard/user/profile" },
    { name: "Member Dashboard", path: "/dashboard/member/profile" },
    { name: "Admin Dashboard", path: "/dashboard/admin/profile" },
  ];

  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 z-40 min-h-screen w-64 bg-slate-600 text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 shadow-2xl`}
      >
        {/* Header */}
        <div className="p-6 text-center lg:text-start  text-2xl font-bold border-b border-white/30">
          Sports Club
        </div>

        {/* Nav Items */}
        {filteredUser.map((userData, idx) => (
          <nav key={idx} className="p-4 flex flex-col gap-2">
            {userData?.role === "user" ? (
              <NavLink
                to={navItems[0].path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-white text-[#0da1ff]"
                      : "hover:bg-white/20 hover:text-white"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {navItems[0].name}
              </NavLink>
            ) : (
              <></>
            )}

            {userData?.role === "member" ? (
              <NavLink
                to={navItems[1].path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-white text-[#0da1ff]"
                      : "hover:bg-white/20 hover:text-white"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {navItems[1].name}
              </NavLink>
            ) : (
              <></>
            )}

            {userData?.role === "admin" ? (
              <NavLink
                to={navItems[2].path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-white text-[#0da1ff]"
                      : "hover:bg-white/20 hover:text-white"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {navItems[2].name}
              </NavLink>
            ) : (
              <></>
            )}

            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#0da1ff]"
                    : "hover:bg-white/20 hover:text-white"
                }`
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </nav>
        ))}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-2 md:hidden z-50 cursor-pointer bg-[#0d4466] text-white p-2 rounded-lg shadow-lg "
      >
        {open ? <X size={16} /> : <Menu className="" size={16} />}
      </button>

      {/* Main Content */}
      <div className="flex-1 md:ml-0 ml-0 p-1">
        <Outlet />
      </div>
    </div>
  );
}
