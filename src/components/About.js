import React from "react";
import "./about.css";

export default function About() {
  return (
    <section className="About">
      <div className="About-text">
        <h2>About Me</h2>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React.
        </p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="About-technologies">
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
          <ul>
            <li>Typescript</li>
            <li>Next JS</li>
            <li>Graph QL</li>
          </ul>
        </div>
      </div>
      <div className="About-image">
        <img src="/profile.png" alt="lauren profile" />
      </div>
    </section>
  );
}
