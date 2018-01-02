import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../styles/CaseStudy.css';

class CaseStudy extends Component {
	render() {
		return (
			<div id="case-container">
				<div id="case-title">
					<img src={require('../img/circle.png')} alt="circle" />
					<h3>Case Study Highlights</h3>
				</div>
			</div>
		);
	}
}

export default CaseStudy;
