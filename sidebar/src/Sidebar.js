import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./Context";
const Sidebar = () => {
  const { toogleSidebar, closeSidebar } = useContext(AppContext);

  return (
    <aside className={`${toogleSidebar ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <img src={logo} className="logo" alt="logo" />
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                <span className="custom-sidebar-icons">{link.icon}</span>{" "}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((icon) => {
          return (
            <li key={icon.id}>
              <a href={icon.url}>
                <span className="custom-social-icons">{icon.icon}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
