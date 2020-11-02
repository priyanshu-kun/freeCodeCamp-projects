import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./Context";

const Submenu = () => {
  const [column, setColumns] = useState("col-2");

  const {
    isSubmenuOpen,
    location,
    page: { page, links }
  } = useGlobalContext();

  const container = useRef();

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    setColumns(`col-${links.length}`);
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${column}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
