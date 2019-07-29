import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import TextField from './TextField';
import EmailField from './EmailField';
import Loader from '../commons/loaders/Loader';
import Modal from '../commons/modal/Modal';
import Helmet from 'react-helmet';
import Particles from 'react-particles-js';
import ReCAPTCHA from 'react-google-recaptcha';
import mainBg from '../../img/mainBg.jpg';
import isEmpty from '../../utils/isEmpty';
const site_key = '6Le-xqEUAAAAAJM-k1sStqJp5YVKgQz4jHND2DA7';
const URL = 'http://cachadas.felixavelar.com/api/admin/felixavelar-contact';

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
	const [isLoading, setIsLoading] = useState(true);
	const [isSending, setIsSending] = useState(false);
	const [isModalActive, setIsModalActive] = useState(false);
	const [modalColor, setModalColor] = useState('#fff');
	const [modalContent, setModalContent] = useState(null);
	//* If there is no Errors this enables the submit button
	const [areFieldsValid, setAreFieldsValid] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			//* Closes the loader after 1.5s
			setIsLoading(false);
		}, 1500);
	});

	useEffect(
		() => {
			//* Closes the modal after 3s;
			setTimeout(() => {
				setIsModalActive(false);
				setModalContent(null);
			}, 3000);
		},
		[isModalActive]
	);

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
			} else {
				setAreFieldsValid(false);
			}
		},
		[nameMessage, emailMessage, subjectMessage, msgMessage, name, subject, email, message]
	);

	//* Checks if the user reached the char limit on the message input
	useEffect(
		() => {
			if (message.length > 500) {
				setMsgMessage({ text: 'You have reach the char limit of 500', error: true, animation: true });
			} else {
				setMsgMessage({ text: null, error: false, animation: false });
			}
		},
		[message]
	);

	const onFormSubmit = e => {
		e.preventDefault();
		setIsSending(true);
		const data = { email, name, subject, message };

		axios
			.post(URL, data)
			.then(() => {
				setEmail('');
				setName('');
				setSubject('');
				setMessage('');
				setIsSending(false);
				setModalColor('#D5F5E3');
				setModalContent(
					<h3>
						<i className="far fa-smile" /> Your message has been successfully sent
					</h3>
				);
				setIsModalActive(true);
			})
			.catch(err => {
				setIsSending(false);
				setModalColor('#FADBD8');
				setModalContent(
					<div>
						<h3>
							<i className="far fa-frown-open" /> Something went wrong, please try later
						</h3>
						<p>
							{err.toString()}
						</p>
					</div>
				);
				setIsModalActive(true);
				console.error(err.response.data);
			});
	};

	let loaderComponent = null;
	if (isLoading) {
		loaderComponent = <Loader />;
	}

	let button_content;
	if (isSending) {
		button_content = (
			<Fragment>
				Sending...&nbsp;<i className="fas fa-spinner fa-pulse" />
			</Fragment>
		);
	} else {
		button_content = (
			<Fragment>
				Send &nbsp;<i className="far fa-paper-plane" />
			</Fragment>
		);
	}

	const options = {
		particles: {
			number: {
				value: 50
			},
			size: {
				value: 3
			},
			move: {
				speed: 5,
				direction: 'top-right',
				out_mode: 'out'
			}
		},
		interactivity: {
			events: {
				onhover: {
					enable: true,
					mode: 'grab'
				},
				onclick: {
					enable: false,
					mode: 'push'
				}
			}
		}
	};

	return (
		<div id="contact" style={{ backgroundImage: `url(${mainBg})` }}>
			<Helmet>
				<title>Let's get in touch!</title>
			</Helmet>
			<Modal isActive={isModalActive} color={modalColor} closeModal={() => setIsModalActive(false)}>
				{modalContent}
			</Modal>
			<Particles className="particles" params={options} />
			<div className="bg-overlay" />
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-8 col-lg-5 mx-auto form-cont">
						<h2 className="text-center mt-4">Let's get in touch!</h2>
						<small className="form-message">All Fields are required</small>

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
							<small className="msg-counter">
								{message.length}/500
							</small>

							<div className="mx-auto mb-3 d-flex justify-content-center captcha">
								<ReCAPTCHA sitekey={site_key} onChange={value => setIsHuman(value ? true : false)} />
							</div>

							<div className="contact-btn-cont d-flex justify-content-center">
								<button
									className={`send-btn ${areFieldsValid && isHuman ? '' : 'disabled-btn'}`}
									disabled={`${areFieldsValid && isHuman ? '' : 'disabled'}`}
								>
									{button_content}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
			{loaderComponent}
		</div>
	);
}

export default Contact;
