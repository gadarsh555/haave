import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Services from './components/Services';
import Articles from './components/Articles';
import CaseStudy from './components/CaseStudy';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Nav />
				</div>
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
			</div>
		);
	}
}

export default App;
