import React from "react";
import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <nav>{/* Main navigation links go here */}</nav>
      <hr />
      <Outlet /> 
    </div>
  );
};

export default MainLayout;
