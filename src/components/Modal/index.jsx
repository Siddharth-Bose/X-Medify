import React from "react";
import Modal from "react-modal";
import styles from "./Modal.module.css";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, title, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <button className={styles.closeButton} onClick={onRequestClose}>
          &times;
        </button>
      </div>
      <div className={styles.body}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
