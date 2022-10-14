import React from "react";
import "./header.css";
import Button from "./Button";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-logo">Lauren</div>
      <div className="Header-menu">
        <ul>
          <li>About</li>
          <li>Experience</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
        <Button text="Resume" size="small" />
      </div>
    </header>
  );
}
