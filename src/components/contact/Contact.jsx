import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from './TextField';
import EmailField from './EmailField';
import ReCAPTCHA from 'react-google-recaptcha';
import isEmpty from '../../utils/isEmpty';
const site_key = '6Le-xqEUAAAAAJM-k1sStqJp5YVKgQz4jHND2DA7';

function Contact() {
	const [name, setName] = useState('');
	const [nameMessage, setNameMessage] = useState({});
	const [email, setEmail] = useState('');
	const [emailMessage, setEmailMessage] = useState({});
	const [subject, setSubject] = useState('');
	const [subjectMessage, setSubjectMessage] = useState({});
	const [message, setMessage] = useState('');
	const [msgMessage, setMsgMessage] = useState({});
	const [isHuman, setIsHuman] = useState(false);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isSending, setIsSending ] = useState(false);
	//* If there is no Errors this enables the submit button
	const [ areFieldsValid, setAreFieldsValid ] = useState(false);

	useEffect(
		() => {
			//* Checks if all Fields are not empty
			if (!isEmpty(name) && !isEmpty(email) && !isEmpty(subject) && !isEmpty(message)) {
				//* Checks if there is no errors to enable submit button
				if (nameMessage.error || emailMessage.error || subjectMessage.error || msgMessage.error) {
					setAreFieldsValid(false);
				} else {
					setAreFieldsValid(true);
				}
			}
		},
		[ nameMessage, emailMessage, subjectMessage, msgMessage ]
	);

	const onFormSubmit = e => {
		e.preventDefault();
		const data = { email, name, subject, message };

		axios
			.post('https://comp-api.herokuapp.com/api/admin/send-mail', data)
			.then(res => {
				setEmail("");
				setName("");
				setSubject("")
				setMessage("")
				console.log(res);
			})
			.catch(err => console.error(err));
	};

	return (
		<div id="contact ">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-5 mx-auto">
						<h2 className="text-center mt-4">Let's get in touch!</h2>
						<small style={{color: "#aaa"}}>All Fields are required</small>

						<form onSubmit={onFormSubmit}>
							<TextField
								textValue={name}
								setTextValue={setName}
								message={nameMessage}
								setMessage={setNameMessage}
								placeholder="Name"
								inputName="name"
								isEmptyErrMsg="Please enter your name!"
								lengthValErrMsg="Name must have between 3 to 50 chars"
								length={{ min: 3, max: 50 }}
								capitalizeInput={true}
							/>

							<EmailField
								email={email}
								setEmail={setEmail}
								emailMessage={emailMessage}
								setEmailMessage={setEmailMessage}
							/>

							<TextField
								textValue={subject}
								setTextValue={setSubject}
								message={subjectMessage}
								setMessage={setSubjectMessage}
								placeholder="Subject"
								inputName="subject"
								isEmptyErrMsg="Subject is required!"
								lengthValErrMsg="Name must have between 10 to 60 chars"
								length={{ min: 10, max: 60 }}
							/>

							<TextField
								textValue={message}
								setTextValue={setMessage}
								message={msgMessage}
								placeholder="Enter your message..."
								setMessage={setMsgMessage}
								inputName="message"
								isEmptyErrMsg="Please enter your message"
								lengthValErrMsg="The message must have between 25 to 500 chars"
								length={{ min: 25, max: 500 }}
								textArea={true}
							/>

							<div className="mx-auto mb-3 d-flex justify-content-center">
								<ReCAPTCHA sitekey={site_key} onChange={(value) => setIsHuman(value)} />
							</div>

							<div className="contact-btn-cont d-flex justify-content-center">
								<button className="btn btn-info">
									Send&nbsp;<i className="far fa-paper-plane" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
