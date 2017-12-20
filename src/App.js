import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Services from './components/Services';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Nav />
				</div>
				<header className="App-header">
					<div className="Header-content">
						<h1>Intelligent Insights</h1>
						<h1>Data-driven Decisions</h1>
						<p>
							Helping leaders solve complex problems using advanced machine
							learning to generate revenue, reduce costs and move audiences.
						</p>
						<div>
							<a href="#Services">
								Learn More
								<span>&rarr;</span>
							</a>
						</div>
					</div>
				</header>
				<div>
					<div id="Services">
						<Services />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
