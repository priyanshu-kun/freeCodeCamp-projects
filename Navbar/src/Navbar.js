import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter, FaAirbnb } from "react-icons/fa";
// import { GiSquirrel } from "react-icons/gi";
import { links, social } from "./data";
// import logo from './logo.svg'

const Navbar = () => {
  const [toogleLink, setToogleLinks] = useState(false);
  const LinksContainerRefs = useRef(null);
  const LinksRefs = useRef(null);

  useEffect(() => {
    // get links height that determining full container height
    const LinksHeight = LinksRefs.current.getBoundingClientRect().height;
    if (toogleLink) {
      LinksContainerRefs.current.style.height = `${LinksHeight}px`;
    } else {
      LinksContainerRefs.current.style.height = "";
    }
  }, [toogleLink]);

  console.log(toogleLink);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <FaAirbnb className="logo-setup" />
          <button
            className="nav-toggle"
            onClick={() => {
              setToogleLinks(!toogleLink);
            }}
          >
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={LinksContainerRefs}>
          <ul className="links" ref={LinksRefs}>
            {links.map((link) => {
              return (
                <li>
                  <a key={link.id} href={link.url}>
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          <ul className="social-icons">
            {social.map((icon) => {
              return (
                <li key={icon.id}>
                  <a href={icon.url}>{icon.icon}</a>
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
