// src/components/Layout.jsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./common/Navbar";

export default function Layout() {
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark(!dark);

  return (
    <div className={dark ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}
