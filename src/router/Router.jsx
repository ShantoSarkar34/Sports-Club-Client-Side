import { createBrowserRouter } from "react-router";
import Root from "../components/root/Root";
import Error from "../pages/error/Error";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";
import PrivetRoute from "../authProvider/PrivetRoute";
import DashBoard from "../pages/dashboard/DashBoard";
import MemberDashboard from "../pages/dashboard/memberDashboard/MemberDashboard";
import UserDashboard from "../pages/dashboard/userDashboard/UserDashboard";
import AdminDashboard from "../pages/dashboard/adminDashboard/AdminDashboard";
import UserProfile from "../pages/dashboard/userDashboard/userProfile/UserProfile";
import Announcements from "../pages/dashboard/userDashboard/announcements/Announcements";
import MemberProfile from "../pages/dashboard/memberDashboard/memberProfile/MemberProfile";
import PendingBookings from "../pages/dashboard/memberDashboard/pendingBookings/PendingBookings";
import MemberAnnouncements from "../pages/dashboard/memberDashboard/MemberAnnouncements/MemberAnnouncements";
import PaymentHistory from "../pages/dashboard/memberDashboard/paymentHistory/PaymentHistory";
import PaymentPage from "../pages/dashboard/paymentPage/PaymentPage";
import ConfirmedBookings from "../pages/dashboard/memberDashboard/confirmedBookings/ConfirmedBookings";
import ApprovedBookings from "../pages/dashboard/memberDashboard/approvedBookings/ApprovedBookings";
import ManageAnnouncements from "../pages/dashboard/adminDashboard/manageAnnouncements/ManageAnnouncements";
import ManageCoupons from "../pages/dashboard/adminDashboard/manageCoupons/ManageCoupons";
import ManageConfirmedBookings from "../pages/dashboard/adminDashboard/manageConfirmedBookings/ManageConfirmedBookings";
import ManageCourts from "../pages/dashboard/adminDashboard/manageCourts/ManageCourts";
import ManageUsers from "../pages/dashboard/adminDashboard/manageUsers/ManageUsers";
import ManageMembers from "../pages/dashboard/adminDashboard/manageMembers/ManageMembers";
import ManageBookingsApproval from "../pages/dashboard/adminDashboard/manageBookingsApproval/ManageBookingsApproval";
import AdminProfile from "../pages/dashboard/adminDashboard/adminProfile/AdminProfile";
import UpdateCourt from "../pages/dashboard/adminDashboard/updateCourt";
import UpdateAnnouncements from "../pages/dashboard/adminDashboard/UpdateAnnouncements";
import UpdateCoupon from "../pages/dashboard/adminDashboard/UpdateCoupon";
import CourtHome from "../pages/court/courtHome/CourtHome";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Root,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/courts",
        Component: CourtHome,
      },
      {
        path: "/dashboard",
        element: (
          <PrivetRoute>
            <DashBoard />
          </PrivetRoute>
        ),
        children: [
          {
            path: "user",
            element: (
              <PrivetRoute>
                <UserDashboard></UserDashboard>
              </PrivetRoute>
            ),
            children: [
              {
                path: "profile",
                element: (
                  <PrivetRoute>
                    <UserProfile></UserProfile>
                  </PrivetRoute>
                ),
              },
              {
                path: "announcements",
                element: (
                  <PrivetRoute>
                    <Announcements></Announcements>
                  </PrivetRoute>
                ),
              },
            ],
          },
          {
            path: "member",
            element: (
              <PrivetRoute>
                <MemberDashboard></MemberDashboard>
              </PrivetRoute>
            ),
            children: [
              {
                path: "profile",
                element: (
                  <PrivetRoute>
                    <MemberProfile></MemberProfile>
                  </PrivetRoute>
                ),
              },
              {
                path: "pending",
                element: (
                  <PrivetRoute>
                    <PendingBookings></PendingBookings>
                  </PrivetRoute>
                ),
              },
              {
                path: "approved",
                element: (
                  <PrivetRoute>
                    <ApprovedBookings></ApprovedBookings>
                  </PrivetRoute>
                ),
              },
              {
                path: "confirmed",
                element: (
                  <PrivetRoute>
                    <ConfirmedBookings></ConfirmedBookings>
                  </PrivetRoute>
                ),
              },
              {
                path: "payment/:bookingId",
                element: (
                  <PrivetRoute>
                    <PaymentPage></PaymentPage>
                  </PrivetRoute>
                ),
              },
              {
                path: "payments",
                element: (
                  <PrivetRoute>
                    <PaymentHistory></PaymentHistory>
                  </PrivetRoute>
                ),
              },
              {
                path: "announcements",
                element: (
                  <PrivetRoute>
                    <MemberAnnouncements></MemberAnnouncements>
                  </PrivetRoute>
                ),
              },
            ],
          },
          {
            path: "admin",
            element: (
              <PrivetRoute>
                <AdminDashboard></AdminDashboard>
              </PrivetRoute>
            ),
            children: [
              {
                path: "profile",
                element: (
                  <PrivetRoute>
                    <AdminProfile></AdminProfile>
                  </PrivetRoute>
                ),
              },
              {
                path: "bookings-approval",
                element: (
                  <PrivetRoute>
                    <ManageBookingsApproval></ManageBookingsApproval>
                  </PrivetRoute>
                ),
              },

              {
                path: "members",
                element: (
                  <PrivetRoute>
                    <ManageMembers></ManageMembers>
                  </PrivetRoute>
                ),
              },
              {
                path: "users",
                element: (
                  <PrivetRoute>
                    <ManageUsers></ManageUsers>
                  </PrivetRoute>
                ),
              },
              {
                path: "courts",
                element: (
                  <PrivetRoute>
                    <ManageCourts></ManageCourts>
                  </PrivetRoute>
                ),
              },
              {
                path: "/dashboard/admin/courts/update/:id",
                loader: ({ params }) =>
                  fetch(
                    `https://sports-club-server-kt5y.onrender.com/admin/courts/${params.id}`
                  ),
                element: (
                  <PrivetRoute>
                    <UpdateCourt></UpdateCourt>
                  </PrivetRoute>
                ),
              },
              {
                path: "/dashboard/admin/announcements/update/:id",
                loader: ({ params }) =>
                  fetch(
                    `https://sports-club-server-kt5y.onrender.com/admin/announcement/${params.id}`
                  ),
                element: (
                  <PrivetRoute>
                    <UpdateAnnouncements></UpdateAnnouncements>
                  </PrivetRoute>
                ),
              },
              {
                path: "/dashboard/admin/coupons/update/:id",
                loader: ({ params }) =>
                  fetch(
                    `https://sports-club-server-kt5y.onrender.com/admin/coupons/${params.id}`
                  ),
                element: (
                  <PrivetRoute>
                    <UpdateCoupon></UpdateCoupon>
                  </PrivetRoute>
                ),
              },
              {
                path: "confirmed-bookings",
                element: (
                  <PrivetRoute>
                    <ManageConfirmedBookings></ManageConfirmedBookings>
                  </PrivetRoute>
                ),
              },
              {
                path: "coupons",
                element: (
                  <PrivetRoute>
                    <ManageCoupons></ManageCoupons>
                  </PrivetRoute>
                ),
              },
              {
                path: "announcements",
                element: (
                  <PrivetRoute>
                    <ManageAnnouncements></ManageAnnouncements>
                  </PrivetRoute>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
]);
