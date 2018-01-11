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
				<img src={require('../img/haave.png')} alt="logo" />
				<div className="ul-container">
					<ul className="horizontal">
						<a href="#Services">
							<li>Services</li>
						</a>
						<a href="#Articles">
							<li>News</li>
						</a>
						<a href="#CaseStudy">
							<li>Case Studies</li>
						</a>
						<a href="#Contact">
							<li>Contact Us</li>
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
								<a href="#Articles">News</a>
							</li>
							<li>
								<a href="#CaseStudy">Case Studies</a>
							</li>
							<li>
								<a href="#Contact">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
