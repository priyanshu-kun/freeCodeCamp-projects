import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [toogleModal, setToogleModal] = useState(false);
  const [toogleSidebar, setToogleSidebar] = useState(false);

  const openSidebar = () => {
    setToogleSidebar(true);
  };

  const closeSidebar = () => {
    setToogleSidebar(false);
  };
  const openModal = () => {
    setToogleModal(true);
  };

  const closeModal = () => {
    setToogleModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        toogleModal,
        toogleSidebar,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
