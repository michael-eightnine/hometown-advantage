import React, { Component } from 'react';
import logo from '../../assets/wordmark.svg';
import { Link } from 'react-router';

class Main extends Component {
	constructor() {
		super();
		this.state = {
			navActive: false
		}
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({navActive: !this.state.navActive});
	}

	render() {
		return (
			<div className="app-wrap">
				<header>
					<div className="header-item header-item-viewing-label">
						Viewing: <span>{this.props.route.filterBy}</span>
					</div>
					<div className="header-item header-item-logo">
						<Link to="/">
							<img src={logo} alt="warning" />
						</Link>
					</div>
					<div
						className={this.state.navActive ? "header-item header-item-toggle active" : "header-item header-item-toggle "}>
						<div className="nav-toggle" onClick={this.handleClick}>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
					<nav>
						<div className="nav-subsection">
							<h4>Posts</h4>
							<Link to="/" activeClassName="active" onClick={this.handleClick}>Latest</Link>
							<Link to="/svg" activeClassName="active" onClick={this.handleClick}>SVG</Link>
							<Link to="/drawing" activeClassName="active" onClick={this.handleClick}>Drawing</Link>
							<Link to="/video" activeClassName="active" onClick={this.handleClick}>Video</Link>
						</div>
						<div className="nav-subsection">
							<h4>Other</h4>
							<Link to="/about" activeClassName="active" onClick={this.handleClick}>About</Link>
						</div>
					</nav>
				</header>

				<div className="view-wrap">
					<div className="width-container">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}

export default Main;
