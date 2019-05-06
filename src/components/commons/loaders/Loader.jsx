import React from 'react';
import DoubleRingLoader from './DoubleRingLoader';
import './Loader.scss';

const Loader = () => {
	return (
		<div id="loader" className="d-flex justify-content-center align-items-center">
			<div>
				<DoubleRingLoader />
				<span>.</span>
				<p className="mt-4">
					Loading
          <span className="dot1">.</span>
					<span className="dot2">.</span>
					<span className="dot3">.</span>
				</p>
			</div>
		</div>
	);
};

export default Loader;
