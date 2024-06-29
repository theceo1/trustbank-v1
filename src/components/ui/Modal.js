// src/components/ui/Modal.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={classNames('fixed inset-0 z-50 overflow-auto bg-smoke-light flex')}>
      <div className={classNames('relative p-8 bg-white w-full max-w-md m-auto flex-col flex')}>
        <button onClick={onClose} className="absolute top-0 right-0 p-4">
          <span className="text-xl">&times;</span>
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
