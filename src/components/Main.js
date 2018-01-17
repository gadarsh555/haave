import React, { Component } from 'react';
import '../styles/Main.css';

import Header from './Header';
import Services from './Services';
import Articles from './Articles';
import CaseStudy from './CaseStudy';
import Slides from './Carousel';
import Contact from './Contact';

class Main extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<div id="main-container">
				<header className="App-header">
					<video
						className="video-background"
						src={require('../img/motionBackground.mp4')}
						autoPlay
						loop
					/>
					<Header />
				</header>
				<div id="Services">
					<Services />
				</div>
				<div id="Articles">
					<Articles />
				</div>
				<div id="CaseStudy">
					<CaseStudy />
				</div>
				<div>
					<Slides />
				</div>
				{/* <div id="Contact">
					<Contact />
				</div> */}
			</div>
		);
	}
}

export default Main;
