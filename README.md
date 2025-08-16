# 🏀 Sports Club Website

[Live Demo 🌐](https://sports-club.surge.sh/)

---

## 🎯 Description
Welcome to **Sports Club**, a modern and responsive web application for managing sports courts, programs, and memberships.  
Whether you're a beginner or a pro athlete, this platform helps you **explore courts, book sessions, track events, and stay updated with news**—all in one place!  

With a clean UI, smooth animations, and full mobile responsiveness, Sports Club provides a **premium user experience** for players, coaches, and admins.

---

## 💻 Features

- **Courts & Sessions:** Explore all courts with available time slots and book your session instantly.  
- **Sports Programs & Training:** Cards showcasing all sports programs (Football, Basketball, Tennis, Swimming, etc.) with hover animations.  
- **Membership Plans & Pricing:** View packages like Basic, Premium, and VIP with CTA buttons.  
- **Coaches & Trainers:** Professional profiles with ratings and social links.  
- **Events & Tournaments:** Interactive timeline/slider of upcoming matches and events.  
- **Testimonials & Success Stories:** Carousel of member reviews with star ratings.  
- **Sponsors & Partners:** Scrolling carousel of logos for credibility.  
- **Newsletter & CTA:** Fancy subscription form for latest updates and offers.  
- **Light & Dark Mode:** Smooth toggle for a premium experience.  
- **Pagination & Sorting:** Sort courts by type or time slot and search for available sessions.  

---

## 🌐 Live Website
[Click here to explore](https://sports-club.surge.sh/)

---

## 🛠️ Technologies & Languages

- **Frontend:** React, Tailwind CSS, Framer Motion, React Icons  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** Custom Auth with Context API & LocalStorage  
- **API:** Axios for data fetching  

---

## 📦 Packages & Libraries

- **react-router-dom** – Routing  
- **framer-motion** – Animations  
- **axios** – HTTP requests  
- **react-toastify** – Notifications  
- **lucide-react** – Icons  
- **tailwindcss** – Styling & responsiveness  

---

## ⚡ Key Features Implementation

- **Dynamic Court Booking:** Book your court with selected date, slot, and quantity.  
- **Search & Sort:** Sort courts by type or time, with a search input for available slots.  
- **Responsive Design:** Works seamlessly on mobile, tablet, and desktop.  
- **Animations:** Smooth transitions and hover effects using Framer Motion.  
- **Light/Dark Theme:** Toggle button with icons and animations for theme switching.  

---

## 📂 Folder Structure

---

├── 📁 public/
│   ├── 📄 CNAME
│   └── 🖼️ vite.svg
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── 🖼️ busketball.png
│   │   ├── 🖼️ favicon.ico
│   │   ├── 🖼️ footer-logo.png
│   │   ├── 🖼️ logo-black.webp
│   │   ├── 🖼️ logo-png.png
│   │   ├── 🖼️ logo.png
│   │   └── 🖼️ react.svg
│   ├── 📁 authProvider/
│   │   ├── 📄 AuthProvider.jsx
│   │   └── 📄 PrivetRoute.jsx
│   ├── 📁 components/
│   │   ├── 📁 root/
│   │   │   └── 📄 Root.jsx
│   │   ├── 📄 Footer.jsx
│   │   └── 📄 Header.jsx
│   ├── 📁 firebase/
│   │   └── 📄 firebase.js
│   ├── 📁 pages/
│   │   ├── 📁 court/
│   │   │   ├── 📁 courtHome/
│   │   │   │   └── 📄 CourtHome.jsx
│   │   │   ├── 📄 Courts.jsx
│   │   │   ├── 📄 EventsTournaments.jsx
│   │   │   └── 📄 Testimonials.jsx
│   │   ├── 📁 dashboard/
│   │   │   ├── 📁 adminDashboard/
│   │   │   │   ├── 📁 adminLogin/
│   │   │   │   │   └── 📄 AdminLogin.jsx
│   │   │   │   ├── 📁 adminProfile/
│   │   │   │   │   └── 📄 AdminProfile.jsx
│   │   │   │   ├── 📁 manageAnnouncements/
│   │   │   │   │   └── 📄 ManageAnnouncements.jsx
│   │   │   │   ├── 📁 manageBookingsApproval/
│   │   │   │   │   └── 📄 ManageBookingsApproval.jsx
│   │   │   │   ├── 📁 manageConfirmedBookings/
│   │   │   │   │   └── 📄 ManageConfirmedBookings.jsx
│   │   │   │   ├── 📁 manageCoupons/
│   │   │   │   │   └── 📄 ManageCoupons.jsx
│   │   │   │   ├── 📁 manageCourts/
│   │   │   │   │   └── 📄 ManageCourts.jsx
│   │   │   │   ├── 📁 manageMembers/
│   │   │   │   │   └── 📄 ManageMembers.jsx
│   │   │   │   ├── 📁 manageUsers/
│   │   │   │   │   └── 📄 ManageUsers.jsx
│   │   │   │   ├── 📄 AdminDashboard.jsx
│   │   │   │   ├── 📄 UpdateAnnouncements.jsx
│   │   │   │   ├── 📄 UpdateCoupon.jsx
│   │   │   │   └── 📄 updateCourt.jsx
│   │   │   ├── 📁 memberDashboard/
│   │   │   │   ├── 📁 MemberAnnouncements/
│   │   │   │   │   └── 📄 MemberAnnouncements.jsx
│   │   │   │   ├── 📁 approvedBookings/
│   │   │   │   │   └── 📄 ApprovedBookings.jsx
│   │   │   │   ├── 📁 confirmedBookings/
│   │   │   │   │   └── 📄 ConfirmedBookings.jsx
│   │   │   │   ├── 📁 memberProfile/
│   │   │   │   │   └── 📄 MemberProfile.jsx
│   │   │   │   ├── 📁 paymentHistory/
│   │   │   │   │   └── 📄 PaymentHistory.jsx
│   │   │   │   ├── 📁 pendingBookings/
│   │   │   │   │   └── 📄 PendingBookings.jsx
│   │   │   │   └── 📄 MemberDashboard.jsx
│   │   │   ├── 📁 paymentPage/
│   │   │   │   └── 📄 PaymentPage.jsx
│   │   │   ├── 📁 userDashboard/
│   │   │   │   ├── 📁 announcements/
│   │   │   │   │   └── 📄 Announcements.jsx
│   │   │   │   ├── 📁 userProfile/
│   │   │   │   │   └── 📄 UserProfile.jsx
│   │   │   │   └── 📄 UserDashboard.jsx
│   │   │   └── 📄 DashBoard.jsx
│   │   ├── 📁 error/
│   │   │   └── 📄 Error.jsx
│   │   ├── 📁 home/
│   │   │   ├── 📄 About.jsx
│   │   │   ├── 📄 CoachesTrainers.jsx
│   │   │   ├── 📄 FacilitiesAmenities.jsx
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 Location.jsx
│   │   │   ├── 📄 MembershipPlans.jsx
│   │   │   ├── 📄 NewsletterCTA.jsx
│   │   │   ├── 📄 Promotions.jsx
│   │   │   ├── 📄 SportsBanner.jsx
│   │   │   └── 📄 SportsPrograms.jsx
│   │   ├── 📁 login/
│   │   │   └── 📄 LogIn.jsx
│   │   └── 📁 signup/
│   │       └── 📄 SignUp.jsx
│   ├── 📁 router/
│   │   └── 📄 Router.jsx
│   ├── 🎨 App.css
│   ├── 📄 App.jsx
│   ├── 🎨 index.css
│   └── 📄 main.jsx
├── 📖 README.md
├── 📄 eslint.config.js
├── 🌐 index.html
├── 📄 note.txt
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 useCurrentUser.js
└── 📄 vite.config.js
---