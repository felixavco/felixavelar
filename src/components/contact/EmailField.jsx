import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../utils/isEmpty';
import { inputError, inputSuccess, msgError, msgSuccess } from './messageStyles';

function EmailField({ email, setEmail, emailMessage, setEmailMessage }) {

	useEffect(
		() => {
			if (validateEmail(email)) {
				setEmailMessage({ text: '', error: false, animation: false });
			}
		},
		[ email ]
	);

	const validateEmail = (email_val) => {
		const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return regex.test(email_val);
	};



	const onEmailBlur = () => {
		if (isEmpty(email)) {
			setEmailMessage({ text: 'Email is required!', error: true, animation: true });
		} else if (!validateEmail(email)) {
			setEmailMessage({ text: 'Invalid email format!', error: true, animation: true });
		}
	};

	return (
		<div className="form-group">
			<div className="Register_form-email-input-cont">
				<input
					style={emailMessage.error ? inputError : email === '' ? null : inputSuccess}
					type="text"
					className={`form-control animated faster ${emailMessage.animation ? null : ''}`}
					onAnimationEnd={() => setEmailMessage({ ...emailMessage, animation: false })}
					placeholder="Email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value.trim().toLowerCase())}
					onBlur={onEmailBlur}
				/>
			</div>
			<small className="form-text" style={emailMessage.error ? msgError : email === '' ? null : msgSuccess}>
				{emailMessage.text}
			</small>
		</div>
	);
}

EmailField.propTypes = {
	email: PropTypes.string.isRequired, 
	setEmail: PropTypes.func.isRequired, 
	emailMessage: PropTypes.object.isRequired, 
	setEmailMessage: PropTypes.func.isRequired
};

export default EmailField;
