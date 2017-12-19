import React, { Component } from 'react';
import '../styles/Nav.css';

class Nav extends Component {
	render() {
		return (
			<nav>
				<img src={require('../img/haave.png')} />
				<div className="ul-container">
					<ul>
						<li>
							<a href="#">Services</a>
						</li>
						<li>
							<a href="#">Healthcare</a>
						</li>
						<li>
							<a href="#">Join Us</a>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
