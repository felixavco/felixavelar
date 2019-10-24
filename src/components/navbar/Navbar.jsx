import React, { Component } from 'react';
import Logo from '../../img/logo.png';
//Router
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
	state = {
		navClass: false,
		animateLinks: false,
		menu: [
			{ name: 'Home', path: '/' },
// 			{ name: 'Portfolio', path: '/portfolio' },
			{ name: 'Contact', path: '/contact' }
		]
	};

	btnMenu = () => this.setState({ navClass: !this.state.navClass });

	animationEndHandler = () => {
		this.setState({animateLinks: true})
	}

	render() {
		const { navClass, menu } = this.state;

		const menuItems = menu.map((e, i) => (
			<li className={`animated ${this.state.animateLinks ? "fadeInDown" : "d-none"}`} key={i} onClick={this.btnMenu}>
				<NavLink exact activeClassName="active-link" to={e.path}>
					{e.name}
				</NavLink>
			</li>
		));

		return (
			<header>
				<div className="container main ">
					<div className="cont-logo">
						<Link to="/">
							<img onAnimationEnd={this.animationEndHandler} className="animated rollIn" src={Logo} alt="Felix Avelar's Logo" />
						</Link>
					</div>

					<nav className={navClass ? 'menu-active' : ''}>
						<ul>{menuItems}</ul>
					</nav>

					<div onClick={this.btnMenu} className={navClass ? 'btn-menu change' : 'btn-menu'}>
						<div className="bar1" />
						<div className="bar2" />
						<div className="bar3" />
					</div>
				</div>
			</header>
		);
	}
}
