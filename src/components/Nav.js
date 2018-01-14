import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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
				<Link to={'/haave'}>
					<img src={require('../img/haave.png')} alt="logo" />
				</Link>
				<div className="ul-container">
					<ul className="horizontal">
						<HashLink to={'/haave/#Services'}>
							<li>Services</li>
						</HashLink>
						<HashLink to={'/haave/#Articles'}>
							<li>News</li>
						</HashLink>
						<HashLink to={'/haave/#CaseStudy'}>
							<li>Case Studies</li>
						</HashLink>
						<Link to={'/haave/healthcare'}>
							<li>Healthcare</li>
						</Link>
						<HashLink to={'/haave/#Contact'}>
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
								<HashLink to={'/haave/#Services'}>Services</HashLink>
							</li>
							<li>
								<HashLink to={'/haave/#Articles'}>News</HashLink>
							</li>
							<li>
								<HashLink to={'/haave/#CaseStudy'}>Case Studies</HashLink>
							</li>
							<li>
								<HashLink to={'/haave/healthcare'}>Healthcare</HashLink>
							</li>
							<li>
								<HashLink to={'/haave/#Contact'}>Contact Us</HashLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
