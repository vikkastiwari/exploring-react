import './Toast.css';

const Toast = ({message, type}) => {
    return (
        <div className={`toast-container ${type === 'success' ? 'success' : 'error'}`} id="myToast">
            {message}
        </div>
    );
}

export default Toast;