import React, { useState, useEffect } from "react";
import "./Nav.css";
const Nav = () => {
  const [handleShow, sethandleShow] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        sethandleShow(true);
      } else {
        sethandleShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav  ${handleShow && "nav_handleshow"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="netflixlogo"
      ></img>

      <i class="fas fa-user-alt  nav_avatar"></i>
    </div>
  );
};

export default Nav;
