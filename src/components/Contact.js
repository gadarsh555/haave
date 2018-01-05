import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
	render() {
		return (
			<div id="contact-container">
				<div id="contact-title">
					<h3>Contact Us</h3>
					<hr />
				</div>
				<div>
					<form className="form">
						<input className="form-control" placeholder="Name" />
						<input className="form-control" placeholder="Company" />
						<input className="form-control" placeholder="Email" />
						<input className="form-control" placeholder="Phone" />
						<textarea className="form-control" placeholder="Message" />
					</form>
				</div>
				<div className="map" />
			</div>
		);
	}
}

export default Contact;
