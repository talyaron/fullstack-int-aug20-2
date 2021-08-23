import React from "react";
import { ToastContainer } from "react-toastify";
import { Routers } from "./components/Routers";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routers />
    </div>
  );
}
