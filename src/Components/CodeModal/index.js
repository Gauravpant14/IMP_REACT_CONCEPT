import React from "react";

const CodeModal = ({ isActive, closeModal, code }) => {
  //   console.log(isActive, closeModal);
  return (
    <div className={`modal ${isActive ? "is-active" : ""}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <code>{code()}</code>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => closeModal(false)}
      ></button>
    </div>
  );
};

export default CodeModal;
