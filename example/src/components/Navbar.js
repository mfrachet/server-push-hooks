import React from "react";
import "./Navbar.css";

export const Navbar = ({ leftItems = [], rightItems = [] }) => (
  <div className="navbar">
    <div className="navbar-left">
      {leftItems.map((_, index) => (
        <div key={`left-${index}`} className="navbar-item" />
      ))}
    </div>

    <div className="navbar-right">
      {rightItems.map((_, index) => (
        <div key={`right-${index}`} className="navbar-item" />
      ))}
    </div>
  </div>
);
