import React, { Component, Fragment } from 'react';
import './styles/App.css';
//React Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Navbar />
					<div id="main">
						<Switch>
							<Route exact path="/" component={Landing} />
							{/* <Route exact path="/about" component={About} /> */}
							<Route exact path="/portfolio" component={Portfolio} />
							{/* <Route exact path="/contact" component={Contact} /> */}
						</Switch>
					</div>
				</Fragment>
			</Router>
		);
	}
}

export default App;
