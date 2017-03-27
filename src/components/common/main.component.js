import React, { Component } from 'react';
import { Link } from 'react-router';

import indentity from '../../svg/identity.svg';
import wordmark from '../../svg/wordmark.svg';
import closeIcon from '../../svg/close.svg';

import CollectionList from '../../data/collection.data'

class Main extends Component {
	constructor() {
		super();
		this.state = {
			submenuActive: false,
			navActive: false,
			collectionActive: false
		}
	}

	handleSubmenuClick(isToggle) {
		this.setState({submenuActive: !this.state.submenuActive});
		if(isToggle == false)
			this.setState({collectionActive: true});
		if(this.state.navActive == true)
			this.setState({navActive: false});
	}

	handleNavClick(isToggle) {
		this.setState({navActive: !this.state.navActive});
		if(!isToggle)
			this.setState({collectionActive: false});
	}

	generateCollectionLinks() {
		const collectionLinks = CollectionList.map((item, i) => {
			let linkRef = "/collections/" + item.name.replace(/\s+/g, '-').toLowerCase();
			return (
				<li key={i} className="submenu-item">
					<Link to={linkRef} activeClassName="active-link" className="submenu-item-link" onClick={() => this.handleSubmenuClick(false)}>{item.name}</Link>
				</li>
			)
		});
		return collectionLinks;
	}

	render() {
		return (
			<div className="app-wrap">
				<header>
					<div className="header-item header-item-logo">
						<Link to="/" activeClassName="yayo" onClick={() => this.setState({collectionActive: false})}>
							<img src={indentity} alt="Hometown Advantage" className="identity" />
							<img src={wordmark} alt="Hometown Advantage" className="wordmark" />
						</Link>
					</div>
					<div className={this.state.navActive ? "header-item header-item-toggle nav-active" : "header-item header-item-toggle"}>
						<div className="nav-toggle" onClick={() => this.handleNavClick(true)}>
							<span></span>
							<span></span>
						</div>
					</div>
					<ul className={this.state.submenuActive ? "nav header-item submenu-active" : "nav header-item"}>
						<li className="nav-item">
							<Link to="/stream" activeClassName="active-link" className="nav-item-link" onClick={() => this.handleNavClick(false)}>Stream</Link>
						</li>
						<li className="nav-item has-submenu">
							<div
								onClick={() => this.handleSubmenuClick(true)}
								className={this.state.collectionActive ? "submenu-toggle nav-item-link active-link" : "submenu-toggle nav-item-link"}>
								Collections
							</div>
							<ul className={this.state.submenuActive ? "submenu active" : "submenu"}>
								<li className="submenu-header">
									Collections
								</li>
								{this.generateCollectionLinks()}
							</ul>
							<div className="submenu-close"><img src={closeIcon} alt="warning" onClick={() => this.handleSubmenuClick(true)} /></div>
						</li>
						<li className="nav-item">
							<Link to="/the-advantage" activeClassName="active-link" className="nav-item-link" onClick={() => this.handleNavClick(false)}>The&nbsp;<span className="desktop-only">.</span>Advantage</Link>
						</li>
					</ul>
				</header>

				<main className="view-wrap">
					<div className="width-container">
						{this.props.children}
					</div>
				</main>
			</div>
		)
	}
}

export default Main;
