import React, { Component } from 'react';
import '../styles/Main.css';

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
					<div className="Header-content">
						<div className="Header-middle animated fadeIn">
							<h1>Intelligent Insights</h1>
							<h1>Data-driven Decisions</h1>
							<p>
								Helping leaders solve complex problems using advanced Natural
								Language Processing, Machine & Deep Learning to generate
								revenue, reduce costs and move audiences.
							</p>
						</div>
					</div>
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
				<div id="contact-nav">
					<div id="Contact">
						<Contact />
					</div>
				</div>
			</div>
		);
	}
}

export default Main;
