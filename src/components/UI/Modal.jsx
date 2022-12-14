import React from 'react';
import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

export const BackDrop = props => {
    return <div className={classes.backdrop}>
        
    </div>
}
export const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement = document.getElementById('overlays')
export const Modal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<BackDrop />, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}
