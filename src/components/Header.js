import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="Header-content">
				<div className="Header-middle animated fadeIn">
					<h1>Intelligent Insights</h1>
					<h1>Data-driven Decisions</h1>
					<p>
						Helping leaders solve complex problems using advanced Natural
						Language Processing, Machine & Deep Learning to generate revenue,
						reduce costs and move audiences.
					</p>
				</div>
			</div>
		);
	}
}

export default Header;
