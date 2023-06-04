import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ onClose, isOpen, image }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClose, false);
    return () => document.removeEventListener('keydown', handleClose, false);
  }, [handleClose]);

  const handleClose = e => {
    const element = e.target;
    if (element.className === 'overlay' || e.key === 'Escape') {
      onClose();
    }
  };

  return (
    isOpen &&
    createPortal(
      <aside>
        <div className="overlay" onClick={handleClose}>
          <div className="modal">
            <img src={image} alt="pic" />
          </div>
        </div>
      </aside>,
      document.body
    )
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
