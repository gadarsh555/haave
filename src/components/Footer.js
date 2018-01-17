import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
	render() {
		return (
			<div id="footer-container">
				<p className="address">
					<strong>Haave Inc.</strong>
					<br />1644 Platte Street, #400
					<br />Denver, Colorado 80202
				</p>
				<p className="address">contact@haave.io</p>
				<p className="copyright">© Copyright Haave 2018</p>
			</div>
		);
	}
}

export default Footer;
