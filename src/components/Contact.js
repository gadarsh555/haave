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
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</form>
					<div className="map">
						<iframe
							frameBorder="0"
							title="google map"
							src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB82gAD8C6O3UWiNwGcgPhCMTP9zNzS4D8&q=1644+Platte+St+%23400,+Denver,+CO+80202"
						/>
					</div>
				</div>
			</div>
		);
	}
}
// AIzaSyB82gAD8C6O3UWiNwGcgPhCMTP9zNzS4D8
export default Contact;
