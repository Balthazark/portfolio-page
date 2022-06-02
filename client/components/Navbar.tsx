import React from "react";
import { FaSun, FaBars } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";
import {VisuallyHidden} from '@react-aria/visually-hidden'


const Navbar = () => {
  return (
    <header className={[styles["primary-header"], styles.flex].join(" ")}>
      <span className={styles.logo}>
        <a href="/">
          Karl <br /> Gunnarsson
        </a>
      </span>
      <button
        className={styles["mobile-nav-toggle"]}
        aria-controls="primary-navigation"
        aria-expanded="false"
      >
          <FaBars size={30}></FaBars>
        <VisuallyHidden>Menu</VisuallyHidden>
      </button>
      <nav>
        <ul
          id="primary-navigation"
          className={[styles["primary-navigation"], styles.flex].join(" ")}
        >
          <li className={styles["nav-items"]}>
            <a href="#aboutme">About me</a>
          </li>
          <li className={styles["nav-items"]}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles["nav-items"]}>
            <a href="#contactme">Contact me</a>
          </li>
          <li className={styles["nav-items"]}>
            <span>
              <FaSun size={30}></FaSun>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
