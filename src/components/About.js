import React from "react";
import { image } from "../data/data";

function About() {
  <div id="about">
    <h2>About Me</h2>
    <p>Any content of my choice</p>
    <img
      src={image};
      alt="I made this"
    />
  </div>
  return <div>About</div>;
}

export default About;
