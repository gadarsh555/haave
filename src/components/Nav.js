import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/Nav.css';

class Nav extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	//
	// getInitialState() {
	// 	return { bar1: 'bar1', bar2: 'bar2', bar3: 'bar3' };
	// }

	openBurger() {
		// var burger = this.refs.Burger.children;
		// console.log(burger);
		var node = ReactDOM.findDOMNode(this.refs.Burger);
		node.classList.toggle('change');
	}

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
				<div
					id="ham-container"
					onClick={event => this.openBurger()}
					ref="Burger"
				>
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
				</div>
			</nav>
		);
	}
}

export default Nav;
