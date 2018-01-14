import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import Healthcare from './components/Healthcare';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<div>
						<Nav />
					</div>
					<Switch>
						{/* <Route exact path="/" component={Main} /> */}
						<Route exact path="/haave" component={Main} />
						<Route path="/haave/healthcare" component={Healthcare} />
					</Switch>
					<div id="Footer">
						<Footer />
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
