 import { useNavigate } from 'react-router-dom';
import classes from './Modal.module.css';

 function Modal({children}) {
    const navigate = useNavigate();
    function closeHandler(){
        // .. goes one level up
        navigate('..');
    }
    return(
        <>
            <div className={classes.backdrop} onClick={closeHandler} />
            <dialog open={true} className={classes.modal}>{children}</dialog>
        </>
    );
 }

 export default Modal