import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TextField from './TextField';
import EmailField from './EmailField';

function Contact() {
	const [name, setName] = useState('');
	const [nameMessage, setNameMessage] = useState({});
	const [email, setEmail] = useState('');
	const [emailMessage, setEmailMessage] = useState({});
	const [subject, setSubject] = useState('');
	const [subjectMessage, setSubjectMessage] = useState({});
	const [message, setMessage] = useState('');
	const [msgMessage, setMsgMessage] = useState({});

	const onFormSubmit = e => {
		e.preventDefault();
		const data = { email, name, subject, message };

		axios
			.post('https://comp-api.herokuapp.com/api/admin/send-mail', data)
			.then(res => {
				this.setState({
					email: '',
					name: '',
					subject: '',
					message: ''
				});
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

							<div className="contact-btn-cont w-50 mx-auto">
								<button className="btn btn-info btn-block ">
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
