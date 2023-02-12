import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

<<<<<<< HEAD
const Backdrop = ({ onClose }) => {
=======
const Backdrop = ({onClose}) => {
>>>>>>> dc4285bc1e7d54dbc155d5ae7c95226ea5639394
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

<<<<<<< HEAD
const Modal = ({ children, onClose }) => {
=======
const Modal = ({ children ,onClose}) => {
>>>>>>> dc4285bc1e7d54dbc155d5ae7c95226ea5639394
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
