import React from "react";
import { FaSun } from "react-icons/fa";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <header className={[styles["primary-header"], styles.flex].join(" ")}>
      <span className={styles.logo}>
        <a href="/">
          Karl <br /> Gunnarsson
        </a>
      </span>
      <nav>
        <ul className={[styles["primary-navigation"], styles.flex].join(" ")}>
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
            <a>Dark mode</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
