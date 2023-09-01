 import classes from './Modal.module.css';

 function Modal({children, onHideModal}) {
    return(
        <>
            <div className={classes.backdrop} onClick={onHideModal} />
            <dialog open={true} className={classes.modal}>{children}</dialog>
        </>
    );
 }

 export default Modal