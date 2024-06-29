// src/components/ui/Modal.js

import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>&times;</button>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
