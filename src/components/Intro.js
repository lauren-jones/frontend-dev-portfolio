import React from "react";
import "./intro.css";
import Button from "./Button";

export default function Intro() {
  return (
    <section className="Intro">
      <h4>Hi, my name is</h4>
      <h2>Lauren Jones.</h2>
      <h3>I build things for the web.</h3>
      <p>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at Upstatement.
      </p>
      <Button text="Check out my course!" size="default" />
    </section>
  );
}
