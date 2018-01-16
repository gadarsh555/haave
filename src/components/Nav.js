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
						<Link to={'/haave/healthcare'}>
							<li>Healthcare</li>
						</Link>
						<Link to={'/haave/legal'}>
							<li>Legal</li>
						</Link>
						<Link to={'/haave/marketing'}>
							<li>Marketing</li>
						</Link>
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
								<Link to={'/haave/healthcare'}>Healthcare</Link>
							</li>
							<li>
								<Link to={'/haave/legal'}>Legal</Link>
							</li>
							<li>
								<Link to={'/haave/marketing'}>Marketing</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Nav;
