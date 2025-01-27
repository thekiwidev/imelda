import React from "react";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { Toaster } from "react-hot-toast";

const Layout: React.FC = () => {
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#ACEF92",
            color: "#000",
          },

          // Default options for specific types
          success: {
            duration: 4000,
          },
        }}
      />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
