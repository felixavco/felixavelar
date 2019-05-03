import React, { Component } from 'react';
import Logo from '../../img/logo.png';
//Router
import { NavLink, Link } from 'react-router-dom';

export default class Navbar extends Component {
	state = {
		navClass: false,
		menu: [
			{ name: 'Home', path: '/' },
			// { name: 'About', path: '/about' },
			{ name: 'Portfolio', path: '/portfolio' },
			// { name: 'Contact', path: '/contact' }
		]
	};

	btnMenu = () => this.setState({ navClass: !this.state.navClass });

	render() {
		const { navClass, menu } = this.state;

		const menuItems = menu.map((e, i) => (
			<li className="animated fadeInDown" key={i} onClick={this.btnMenu}>
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
							<img className="animated rollIn" src={Logo} alt="Felix Avelar's Logo" />
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
