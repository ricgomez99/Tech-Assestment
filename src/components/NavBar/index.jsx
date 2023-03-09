import React from "react";
import "./navBar.css";
import { useState } from "react";

export default function NavBar() {
  const links = [
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
    { name: "LOREM IPSUM", path: "/" },
  ];

  const [isOpen, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <span className="logo">
        <img src="/header.png" alt="logo" />
      </span>
      <div className={`items ${isOpen && "open"}`}>
        <div className="socialMedia">
          <img className="socialImg" src="/linkedin.png" alt="linkedin" />
          <img className="socialImg" src="/facebook.png" alt="facebook" />
          <img className="socialImg" src="/instagram.png" alt="instagram" />
        </div>
        {links?.map((link, index) => (
          <a className="link" rel="navLinks" href={link.path} key={index}>
            {link.name}
          </a>
        ))}
      </div>
      <div className={`toggle ${isOpen && "open"}`} onClick={handleClick}>
        <div className="bar"></div>
      </div>
    </div>
  );
}
