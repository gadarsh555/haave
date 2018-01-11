import React, { Component } from 'react';
import '../styles/Main.css';

import Services from './Services';
import Articles from './Articles';
import CaseStudy from './CaseStudy';
import Slides from './Carousel';
import Contact from './Contact';

class Main extends Component {
	render() {
		return (
			<div id="main-container">
				<header className="App-header">
					<div className="Header-content">
						<div className="Header-middle">
							<h1>Intelligent Insights</h1>
							<h1>Data-driven Decisions</h1>
							<p>
								Helping leaders solve complex problems using advanced machine
								learning to generate revenue, reduce costs and move audiences.
							</p>
							<div>
								<a href="#Services" className="button">
									<button>Learn More</button>
								</a>
							</div>
						</div>
					</div>
				</header>
				<div>
					<div id="Services">
						<Services />
					</div>
				</div>
				<div>
					<div id="Articles">
						<Articles />
					</div>
				</div>
				<div>
					<div id="CaseStudy">
						<CaseStudy />
					</div>
				</div>
				<div>
					<Slides />
				</div>
				<div id="Contact">
					<Contact />
				</div>
			</div>
		);
	}
}

export default Main;
