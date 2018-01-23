import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

class Nav extends Component {
	openBurger() {
		var node = ReactDOM.findDOMNode(this.refs.Burger);
		node.classList.toggle('change');
	}

	render() {
		const { iframeFullScreen } = this.props;
		return (
			<nav style={iframeFullScreen ? styles.nav : null}>
				<Link to={'/'}>
					<img src={require('../img/haave.png')} alt="logo" />
				</Link>
				<div className="ul-container">
					<ul className="horizontal">
						<Link to={'/healthcare'}>
							<li>Healthcare</li>
						</Link>
						<Link to={'/legal'}>
							<li>Legal</li>
						</Link>
						<Link to={'/marketing'}>
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
								<Link to={'/healthcare'}>Healthcare</Link>
							</li>
							<li>
								<Link to={'/legal'}>Legal</Link>
							</li>
							<li>
								<Link to={'/marketing'}>Marketing</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

const styles = {
	nav: {
		display: 'none'
	}
};

export default Nav;
