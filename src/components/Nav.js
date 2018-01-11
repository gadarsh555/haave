import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Nav.css';

class Nav extends Component {
	openBurger() {
		var node = ReactDOM.findDOMNode(this.refs.Burger);
		node.classList.toggle('change');
	}

	render() {
		return (
			<nav>
				<HashLink to={'/'}>
					<img src={require('../img/haave.png')} alt="logo" />
				</HashLink>
				<div className="ul-container">
					<ul className="horizontal">
						<HashLink to={'/#Services'}>
							<li>Services</li>
						</HashLink>
						<HashLink to="/#Articles">
							<li>News</li>
						</HashLink>
						<HashLink to="/#CaseStudy">
							<li>Case Studies</li>
						</HashLink>
						<HashLink to={'/healthcare'}>
							<li>Healthcare</li>
						</HashLink>
						<HashLink to="/#Contact">
							<li>Contact Us</li>
						</HashLink>
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
