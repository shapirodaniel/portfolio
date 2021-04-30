import React from 'react';
import './Modal.css';

const Modal = ({ children }) => {
	return (
		<div>
			{/* opaque full-page backdrop */}
			<div className={'modalBackdrop'}></div>
			{/* transparent full-page backdrop to situate modal content */}
			<div className={'transparentBlockContainer'}>
				{/* view "window" for modal children */}
				<div className={'centeredModalBlock'}>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
