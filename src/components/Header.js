import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-logo">Lauren</div>
      <div className="Header-menu">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <button>Resume</button>
      </div>
    </div>
  );
}
