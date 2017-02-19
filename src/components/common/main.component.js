import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router';

class Main extends Component {
	render() {
		return (
			<div className="app-wrap">
				<header>
					<div className="logo">
						<Link to="/">
							<img src={logo} alt="warning" />
						</Link>
					</div>
					<nav>
						<Link to="/" activeClassName="active">Latest</Link>
						<Link to="/svg" activeClassName="active">SVG</Link>
						<Link to="/video" activeClassName="active">Video</Link>
						<Link to="/about" activeClassName="active">About</Link>
					</nav>
				</header>

				<div className="view-wrap">
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Main;
