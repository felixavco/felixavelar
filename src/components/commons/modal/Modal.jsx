import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ color = '#fff', isActive, children, closeModal }) => {
  
	return (
		<div className={`modal-component ${isActive ? 'modal-component-active' : ''}`}>
			<div style={{ background: color }} className="modal-component-content">
				{children}
				<button onClick={closeModal} >Close</button>
			</div>
		</div>
	);
};

Modal.propTypes = {
	color: PropTypes.string,
	isActive: PropTypes.bool.isRequired,
	children: PropTypes.node,
	closeModal: PropTypes.func.isRequired
};

export default Modal;
