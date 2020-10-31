import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { AppContext } from "./Context";

const Home = () => {
  const { openModal, openSidebar } = useContext(AppContext);

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars className="bars" />
      </button>
      <button className="btn" onClick={openModal}>
        show modal
      </button>
    </main>
  );
};

export default Home;
