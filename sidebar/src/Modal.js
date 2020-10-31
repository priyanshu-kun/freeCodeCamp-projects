import React, { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext } from "./Context";
const Modal = () => {
  const { toogleModal, closeModal } = useContext(AppContext);

  return (
    <div
      className={`${
        toogleModal ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
