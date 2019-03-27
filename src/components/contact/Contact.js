import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
	state = {
		name: '',
		email: '',
		subject: '',
		msj: ''
	};

	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		const data = {
			email: this.state.email,
			name: this.state.name,
			subject: this.state.subject,
			msj: this.state.msj
		};

		axios
			.post('http://api.felixavelar.com/api/admin/contact', data)
			.then((res) => {
				this.setState({
					email: "",
					name: "",
					subject: "",
					msj: ""
        });
        console.log(res);
			})
			.catch((err) => console.error(err));
	};

	render() {
		const { name, email, subject, msj } = this.state;
		return (
			<div id="contact">
				<div className="container">
					<h1 className="text-center mt-4">Let's get in touch!</h1>
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
								name="msj"
								placeholder="Message"
								value={msj}
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
		);
	}
}

export default Contact;
