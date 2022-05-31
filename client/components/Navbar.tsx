import React from "react";
import { FaSun } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/"></a>
        </li>
        <li>
          <a href="#aboutme"></a>Karl
          <br />
          Gunnarsson{" "}
        </li>
        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="contactme">Contact me</a>
        </li>
        <li>
          <FaSun />
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
