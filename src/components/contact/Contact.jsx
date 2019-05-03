import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	onChangeHandler = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onFormSubmit = e => {
		e.preventDefault();
		const data = {
			email: this.state.email,
			name: this.state.name,
			subject: this.state.subject,
			message: this.state.message
		};

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

	render() {
		const { name, email, subject, message } = this.state;
		return (
			<div id="contact ">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-8 col-lg-6 mx-auto">
							<h2 className="text-center mt-4">Let's get in touch!</h2>
							<form onSubmit={this.onFormSubmit}>
								<div className="form-group">
									<input
										onChange={this.onChangeHandler}
										type="text"
										className="form-control"
										name="name"
										placeholder="Your Name"
										value={name}
									/>
								</div>

								<div className="form-group">
									<input
										onChange={this.onChangeHandler}
										type="email"
										className="form-control"
										name="email"
										placeholder="Your Email Address"
										value={email}
									/>
								</div>

								<div className="form-group">
									<input
										onChange={this.onChangeHandler}
										type="text"
										className="form-control"
										name="subject"
										placeholder="Subject"
										value={subject}
									/>
								</div>

								<div className="form-group">
									<textarea
										onChange={this.onChangeHandler}
										className="form-control"
										name="message"
										placeholder="Message"
										value={message}
									/>
								</div>

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
}

export default Contact;
