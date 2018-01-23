import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'animate.css/animate.min.css';

import Nav from './components/Nav';
import Main from './components/Main';
import Healthcare from './components/Healthcare';
import Legal from './components/Legal';
import Marketing from './components/Marketing';
import Footer from './components/Footer';

class App extends Component {
	state = {
		iframeFullScreen: false
	};
	componentDidMount() {
		document.addEventListener(
			'webkitfullscreenchange',
			this.toggleFullScreen.bind(this)
		);
		document.addEventListener(
			'mozfullscreenchange',
			this.toggleFullScreen.bind(this)
		);
	}
	toggleFullScreen() {
		this.setState({ iframeFullScreen: !this.state.iframeFullScreen });
	}
	render() {
		const { iframeFullScreen } = this.state;
		return (
			<BrowserRouter>
				<div className="App">
					<div>
						<Nav iframeFullScreen={iframeFullScreen} />
					</div>
					<Switch>
						<Route exact path="/" component={Main} />
						<Route path="/healthcare" component={Healthcare} />
						<Route path="/legal" component={Legal} />
						<Route path="/marketing" component={Marketing} />
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
