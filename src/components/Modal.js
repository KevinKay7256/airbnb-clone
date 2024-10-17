import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../actions/modalAction";
import "./Modal.css";

const Modal = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { openClose, content } = modal;
  let modalInlineStyle;
  if (openClose === "open") {
    modalInlineStyle = {
      display: "block",
    };
  } else {
    modalInlineStyle = {
      display: "none",
    };
  }
  const closeModalHandler = () => {
    dispatch(openModal("close", ""));
  };
  return (
    <div className="site_modal" style={modalInlineStyle}>
      <div className="modal_content">
        <div className="col right">
          <span onClick={closeModalHandler} className="close">
            &times;
          </span>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;
