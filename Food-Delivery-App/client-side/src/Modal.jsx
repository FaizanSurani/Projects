import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  backgroundColor: "rgb(34,34,34)",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  height: "90%",
  width: "90%",
};

const OVERALL_STYLES = {
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,.7)",
  zIndex: 1000,
};

export default function Modal({ children, onClose }) {
  return ReactDom.createPortal(
    <>
      <div style={OVERALL_STYLES} />
      <div style={MODAL_STYLES}>
        <button
          className="bg-red-600 text-xl"
          style={{ marginLeft: "90%", marginTop: "-35px" }}
          onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </>,
    document.getElementById("cart-root")
  );
}
