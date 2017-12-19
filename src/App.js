import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div>
					<Nav />
				</div>
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
			</div>
		);
	}
}

export default App;
