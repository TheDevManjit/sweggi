import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

import React from 'react'

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
    </>

  )
}


