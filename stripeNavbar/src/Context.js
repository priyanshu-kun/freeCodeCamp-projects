import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSideBarOpen, setSideBar] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: "", links: [] });

  const sideBarOpen = () => {
    setSideBar(true);
  };
  const sideBarClose = () => {
    setSideBar(false);
  };
  const SubmenuOpen = (text, coordinates) => {
    const page = sublinks.find((link) => {
      return link.page === text;
    });
    setPage(page);
    setLocation(coordinates);
    setSubmenuOpen(true);
  };
  const SubmenuClose = () => {
    setSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSideBarOpen,
        isSubmenuOpen,
        sideBarOpen,
        sideBarClose,
        SubmenuOpen,
        SubmenuClose,
        location,
        page
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
