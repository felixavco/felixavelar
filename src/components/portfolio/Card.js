import React from 'react';

const Card = ({project}) => {
	const { name, img, github, url, description } = project;
	return (
		<div className="item">
			<div className="item-img-cont">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<img src={img} alt="" />
				</a>
			</div>

			<div className="item-title">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<h3>{name}</h3>
				</a>
			</div>

			<div className="item-description">
				<p>
					{description}
				</p>
			</div>

			<div className="item-icons">
				<a href={github} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-github" />
				</a>
				<a href={url} target="_blank" rel="noopener noreferrer">
					<i className="fas fa-external-link-alt" />
				</a>
			</div>
		</div>
	);
};

export default Card;
