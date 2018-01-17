import React, { Component } from 'react';
import '../styles/Healthcare.css';
import '../styles/Marketing.css';
import '../styles/Powerpoint.css';

class Marketing extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div id="healthcare-container" className="animated fadeInUp">
				<div id="healthcare-title">
					<img src={require('../img/join.png')} alt="join.png" />
					<h3>Marketing</h3>
					<hr />
				</div>
				<div className="marketing-description">
					<div className="powerpoint">
						<iframe
							src="https://docs.google.com/presentation/d/e/2PACX-1vQCXcsirjzc0TgHrWyT1Nnapyii7Qp8PGIW7cTSxUN_aKI7TTFVW3wfDm6a31tLOUgOFshGa3LFNj92/embed?start=false&loop=false&delayms=3000"
							frameborder="0"
							width="100%"
							height="500"
							allowfullscreen="true"
							mozallowfullscreen="true"
							webkitallowfullscreen="true"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Marketing;
