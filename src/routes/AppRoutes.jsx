
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Login from "@/pages/Login";
import Dashboard from "@/pages/admin/Dashboard";
import Profile from "@/pages/admin/profile";
import Settings from "@/pages/admin/Settings";

// --- สร้างคอมโพเนนต์ทั้งหมดที่จำเป็น ---

const MainLayout = () => (
  <div>
    <h1>Welcome to My App</h1>
    <nav>{/* Main navigation links go here */}</nav>
    <hr />
    <Outlet /> {/* <-- จุดสำคัญสำหรับแสดงผลหน้าลูก */}
  </div>
);

const AdminLayout = () => (
  <div>
    <h2>Admin Section</h2>
    <nav>{/* Admin navigation links go here */}</nav>
    <hr />
    <Outlet /> {/* <-- Outlet สำหรับหน้า Admin */}
  </div>
);


// --- ส่วนหลักของ Routes ---

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. ใช้ MainLayout ที่มี Outlet เป็น Layout หลัก */}
        <Route path="/" element={<MainLayout />}>
          
          {/* หน้าแรกของ MainLayout */}
          <Route index element={<Home />} />

          {/* Public Routes */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />

          {/* Protected Routes (Nested inside MainLayout) */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* Catch-all Route อยู่นอกสุด */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;