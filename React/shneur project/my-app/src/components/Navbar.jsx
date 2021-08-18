import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5">
        רשימת אנשי קשר - פרוייקט שניאור גרינברג
      </Link>
    </nav>
  );
};
