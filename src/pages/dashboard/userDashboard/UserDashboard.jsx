import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Outlet } from "react-router";

export default function UserDashboard() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "My Profile", path: "/dashboard/user/profile" },
    { name: "Announcements", path: "/dashboard/user/announcements" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static inset-y-0 left-0 rounded-lg z-40 w-64 bg-slate-500  text-white transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0`}
      >
        <div className="p-6 text-lg lg:text-xl font-bold border-b border-white/30 text-center ">
          User Dashboard
        </div>
        <nav className="p-4 flex flex-col gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#0da1ff]"
                    : "hover:bg-white/20 hover:text-white"
                }`
              }
              onClick={() => setOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-2 md:hidden z-50 cursor-pointer bg-[#7890b1] text-white p-2 rounded-lg shadow-lg "
      >
        {open ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10">
        <Outlet />
      </div>
    </div>
  );
}
