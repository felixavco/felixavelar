import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ color = '#fff', isActive, children }) => {
	const [modalActive, setModalActive] = useState(isActive);
  
  useEffect(() => {
    setModalActive(isActive)
  }, [isActive])

	return (
		<div className={`modal-component ${modalActive ? 'modal-component-active' : ''}`}>
			<div style={{ background: color }} className="modal-component-content">
				{children}
				<button >Close</button>
			</div>
		</div>
	);
};

Modal.propTypes = {
	color: PropTypes.string,
	isActive: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
};

export default Modal;
