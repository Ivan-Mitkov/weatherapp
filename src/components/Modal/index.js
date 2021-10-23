import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../store/actions";

import styles from "./styles.module.scss";
const Modal = (props) => {
  if (!props.open) return null;

  return ReactDOM.createPortal(
    <React.Fragment>{props.children}</React.Fragment>,
    document.getElementById("portal")
  );
};

const Popup = ({ title,  children }) => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal);
  const { isModalOpen } = modal;

  

  const handleClose = (e) => {
    e.stopPropagation();
    dispatch(closeModal());
  };

  return (
    <Modal open={isModalOpen} onClick={handleClose}>
      <div
        className={
          isModalOpen
            ? [styles.modalContainer, styles.showModal].join(" ")
            : styles.modalContainer
        }
      >
        <div className={styles.modal}></div>
        <div className={styles.modalHeader}>
          {" "}
          <h3>{title}</h3>
          <div className={styles.closeBtn}>
            <div id="close" onClick={handleClose}>
              &#10005;
            </div>
          </div>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.modalChild}>{children}</div>
        </div>
        {/* At the bootom so it can be clicked same z-index as modal */}
        <div className={styles.overlay} onClick={handleClose}></div>
      </div>
    </Modal>
  );
};

export default Popup;
