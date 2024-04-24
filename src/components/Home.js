import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  <div id="home">
    <h1 style={{ color: "firebrick" }}> Your {name} is a Web Developer from {city}</h1>
  </div>
  return <div>Home</div>;
}

export default Home;
