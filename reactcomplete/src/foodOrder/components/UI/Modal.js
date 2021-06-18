import React from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const ModalOverLay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}
const portalEle = document.getElementById('overlay')
const Modal = (props) => {
    return (
        <React.Fragment>

            {ReactDOM.createPortal(<Backdrop onClose={props.onCloseHandler}/>, portalEle)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>, portalEle)}
        </React.Fragment>
    )
}

export default Modal
