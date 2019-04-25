import React, { Component } from 'react';
import projects from './projects';
import Card from './Card';
import Loader from '../commons/Loader';

class Portfolio extends Component {

	state = { 
		isLoading: true
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({isLoading: false});
		}, 1500);
	}

	render() {
		const projects_items = projects.map((project, i) => (
			<Card key={i} project={project}/>
		));

		let loaderComponent = null; 
		if(this.state.isLoading) {
			loaderComponent = <Loader />
		}

		return (
			<div id="portfolio">
				<div className="container">
					{ projects_items }
				</div>
				{ loaderComponent }
			</div>
		);
	}
}

export default Portfolio;
