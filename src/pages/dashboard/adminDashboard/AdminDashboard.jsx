import { NavLink, Outlet } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import AdminLogin from "./adminLogin/AdminLogin";

export default function AdminDashboard() {
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const links = [
    { name: "Admin Profile", path: "/dashboard/admin/profile" },
    {
      name: "Manage Bookings Approval",
      path: "/dashboard/admin/bookings-approval",
    },
    { name: "Manage Members", path: "/dashboard/admin/members" },
    { name: "All Users", path: "/dashboard/admin/users" },
    { name: "Manage Courts", path: "/dashboard/admin/courts" },
    { name: "Confirmed Bookings", path: "/dashboard/admin/confirmed-bookings" },
    { name: "Manage Coupons", path: "/dashboard/admin/coupons" },
    { name: "Manage Announcements", path: "/dashboard/admin/announcements" },
  ];

  return (
    <div className="">
              <div  className="flex min-h-screen bg-gray-100">
          <div
            className={`fixed md:static inset-y-0 left-0 rounded-lg z-40 w-64 bg-slate-500  text-white transform ${
              open ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 md:translate-x-0 shadow-xl`}
          >
            <div className="p-6 text-center text-lg lg:text-xl font-bold border-b border-white/30">
              Admin Dashboard
            </div>
            <nav className="p-4 flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "bg-white text-indigo-600"
                        : "hover:bg-white/20 hover:text-white"
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="fixed top-4 left-2 md:hidden z-50 cursor-pointer bg-[#7890b1] text-white p-2 rounded-lg shadow-lg "
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>

          <div className="flex-1 p-2 md:p-5">
            <Outlet />
          </div>
        </div>
    </div>
  );
}


