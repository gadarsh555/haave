import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Nav.css';

class Nav extends Component {
	openBurger() {
		var node = ReactDOM.findDOMNode(this.refs.Burger);
		node.classList.toggle('change');
	}

	render() {
		return (
			<nav>
				<img src={require('../img/haave.png')} />
				<div className="ul-container">
					<ul className="horizontal">
						<a href="#Services">
							<li>Services</li>
						</a>
						<a href="#Articles">
							<li>Articles</li>
						</a>
						<a href="#">
							<li>Healthcare</li>
						</a>
						<a href="#">
							<li>Join Us</li>
						</a>
						<a href="#">
							<li>Start a Project</li>
						</a>
					</ul>
				</div>
				<div
					id="ham-container"
					onClick={event => this.openBurger()}
					ref="Burger"
				>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
					<div className="vi-container">
						<ul className="vertical">
							<li>
								<a href="#Services">Services</a>
							</li>
							<li>
								<a href="#Articles">Articles</a>
							</li>
							<li>
								<a href="#">Healthcare</a>
							</li>
							<li>
								<a href="#">Join Us</a>
							</li>
							<li>
								<a href="#">Start a Project</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
