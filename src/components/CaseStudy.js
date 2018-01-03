import React, { Component } from 'react';
import '../styles/CaseStudy.css';

class CaseStudy extends Component {
	render() {
		return (
			<div id="case-container">
				<div id="case-title">
					<img src={require('../img/circle.png')} alt="circle" />
					<h3>Case Study Highlights</h3>
					<hr />
				</div>
			</div>
		);
	}
}

export default CaseStudy;
