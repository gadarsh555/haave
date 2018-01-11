import React, { Component } from 'react';
import '../styles/Contact.css';
// Form validation dependencies
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			company: '',
			email: '',
			phone: '',
			message: '',
			nameClass: 'form-control',
			emailClass: 'form-control',
			messageClass: 'form-control'
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		let change;
		switch (event.target.placeholder) {
			case 'Name':
				change = { name: event.target.value };
				break;
			case 'Company':
				change = { company: event.target.value };
				break;
			case 'Email':
				change = { email: event.target.value };
				break;
			case 'Phone':
				change = { phone: event.target.value };
				break;
			case 'Message':
				change = { message: event.target.value };
				break;
			default:
				change = {};
		}
		this.setState(change);
	}
	handleSubmit(event) {
		event.preventDefault();
		// Test Validity of form
		const nameValid = !isEmpty(this.state.name);
		const emailValid = isEmail(this.state.email);
		const messageValid = !isEmpty(this.state.message);
		// Valid Form
		if (nameValid && emailValid && messageValid) {
			fetch('http://localhost:8080/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: this.state.name,
					company: this.state.company,
					email: this.state.email,
					phone: this.state.phone,
					message: this.state.message
				})
			});
			this.setState({
				name: '',
				company: '',
				email: '',
				phone: '',
				message: '',
				nameClass: 'form-control',
				emailClass: 'form-control',
				messageClass: 'form-control'
			});
		} else {
			// Invalid Form
			if (!nameValid) {
				this.setState({ nameClass: 'form-control invalid' });
			}
			if (!emailValid) {
				this.setState({ emailClass: 'form-control invalid' });
			}
			if (!messageValid) {
				this.setState({ messageClass: 'form-control invalid' });
			}
			if (nameValid) {
				this.setState({ nameClass: 'form-control' });
			}
			if (emailValid) {
				this.setState({ emailClass: 'form-control' });
			}
			if (messageValid) {
				this.setState({ messageClass: 'form-control' });
			}
		}
	}
	render() {
		return (
			<div id="contact-container">
				<div id="contact-title">
					<h3>Contact Us</h3>
					<hr />
				</div>
				<div>
					<form className="form" onSubmit={this.handleSubmit}>
						<input
							className={this.state.nameClass}
							placeholder="Name"
							value={this.state.name}
							onChange={this.handleChange}
						/>
						<input
							className="form-control"
							placeholder="Company"
							value={this.state.company}
							onChange={this.handleChange}
						/>
						<input
							className={this.state.emailClass}
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleChange}
						/>
						<input
							className="form-control"
							placeholder="Phone"
							value={this.state.phone}
							onChange={this.handleChange}
						/>
						<textarea
							className={this.state.messageClass}
							placeholder="Message"
							value={this.state.message}
							onChange={this.handleChange}
						/>
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</form>

					<div className="map">
						<iframe
							frameBorder="0"
							title="google map"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDqqGc57PH0Gxmcx6vWppqS3G7O3ti4wqI&q=1644+Platte+St+%23400,+Denver,+CO+80202"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
