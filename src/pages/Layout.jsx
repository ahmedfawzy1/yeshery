import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";

export default function Layout() {
  return (
    <>
      <Outlet></Outlet>
      <Footer />
      <Cart />
    </>
  );
}
