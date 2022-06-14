import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Overlay.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={()=>props.setClick(!props.clicked)}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal} >
      <div className={classes.content} >{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop setClick={props.setClick} clicked={props.clicked}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={()=>props.setClick(!props.clicked)} >{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;