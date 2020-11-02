import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import "./styles.css";
import Home from "./Home";
function App() {
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  );
}

export default App;
