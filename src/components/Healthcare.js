import React, { Component } from 'react';
import '../styles/Healthcare.css';

class Healthcare extends Component {
	render() {
		return (
			<div id="healthcare-container">
				<div id="healthcare-title">
					<img src={require('../img/health.png')} />
					<h3>Healthcare</h3>
					<hr />
				</div>
				<div className="healthcare-description">
					<h5>
						The healthcare landscape is evolving at the most rapid pace in
						history, and it‘s a challenge to keep pace. Historically, healthcare
						organizations have functioned without the benefit of deep data
						analytics guiding the way. That has now changed – Haave can lead you
						to the forefront of healthcare analytics.
					</h5>
				</div>
			</div>
		);
	}
}

export default Healthcare;
