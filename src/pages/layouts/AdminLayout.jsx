import React from "react";

const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Section</h2>
      <nav>{/* Admin navigation links go here */}</nav>
      <hr />
      <Outlet /> {/* <-- Outlet สำหรับหน้า Admin */}
    </div>
  );
};

export default AdminLayout;
