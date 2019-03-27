import React, { Component } from 'react';
import projects from './projects';
import Card from './Card';

class Portfolio extends Component {

	render() {
		const projects_items = projects.map((project, i) => (
			<Card key={i} project={project}/>
		))
		return (
			<div id="portfolio">
				<div className="container">
					{ projects_items }
				</div>
			</div>
		);
	}
}

export default Portfolio;
