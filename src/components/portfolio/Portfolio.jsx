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
			<Card 
				key={i} 
				index={i + 1}
				project={project} 
				isLoading={this.state.isLoading}
			/>
		));

		let loaderComponent = null; 
		if(this.state.isLoading) {
			loaderComponent = <Loader />
		}

		return (
			<div id="portfolio">
				{ projects_items }
				{ loaderComponent }
			</div>
		);
	}
}

export default Portfolio;
