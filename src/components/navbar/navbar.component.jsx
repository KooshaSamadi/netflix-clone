import React, { useEffect, useState } from "react";
import "./navbar.styles.scss";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const scrollTransition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollTransition);
    return () => {
      window.removeEventListener("scroll", scrollTransition);
    };
  });
  return (
    <nav className={`navbar ${show && "navbar_black"}`}>
      <div className="navbar_content">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
          className="navbar_logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          alt="avatar"
          className="navbar_avatar"
          onClick={() => {
            navigate("/profile");
          }}
        />
      </div>
    </nav>
  );
};
