import React, { Component, Fragment } from 'react';
import './styles/App.css';
//React Router
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import NotFound from './components/404/NotFound';

class App extends Component {
	render() {
		return (
			<Router>
				<Fragment>
					<Navbar />
					<div id="main">
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route exact path="/contact" component={Contact} />
							<Route exact path="/not-found" component={NotFound} />
							<Redirect to="/not-found" />
						</Switch>
					</div>
					<Footer />
				</Fragment>
			</Router>
		);
	}
}

export default App;
