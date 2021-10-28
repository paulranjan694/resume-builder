import React from 'react'
import Backdrop from '../backdrop/Backdrop.component';
import './Modal.style.scss'

function Modal({isOpen, children}) {
    return ( 
        isOpen ? 
        <>
            <div className="modal__container">
                {children}
            </div>
        </>
         : null
    )
}

export default Modal
