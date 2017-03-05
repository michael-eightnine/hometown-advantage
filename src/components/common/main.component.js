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
			navActive: false
		}
		this.handleSubmenuClick = this.handleSubmenuClick.bind(this);
		this.handleNavClick = this.handleNavClick.bind(this);
	}

	handleSubmenuClick() {
		this.setState({submenuActive: !this.state.submenuActive});
		if(this.state.navActive == true)
			this.setState({navActive: false});
	}

	handleNavClick() {
		this.setState({navActive: !this.state.navActive});
	}

	generateCollectionLinks() {
		const collectionLinks = CollectionList.map((item, i) => {
			let linkRef = "/collections/" + item.replace(/\s+/g, '-').toLowerCase();
			return (
				<li key={i} className="submenu-item">
					<Link to={linkRef} activeClassName="active-link" className="submenu-item-link" onClick={this.handleSubmenuClick}>{item}</Link>
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
						<Link to="/">
							<img src={indentity} alt="Hometown Advantage" className="identity" />
							<img src={wordmark} alt="Hometown Advantage" className="wordmark" />
						</Link>
					</div>
					<div className={this.state.navActive ? "header-item header-item-toggle nav-active" : "header-item header-item-toggle"}>
						<div className="nav-toggle" onClick={this.handleNavClick}>
							<span></span>
							<span></span>
						</div>
					</div>
					<ul className={this.state.submenuActive ? "nav header-item submenu-active" : "nav header-item"}>
						<li className="nav-item">
							<Link to="/" activeClassName="active-link" className="nav-item-link" onClick={this.handleNavClick}>Stream</Link>
						</li>
						<li className="nav-item has-submenu">
							<div onClick={this.handleSubmenuClick} className="submenu-toggle nav-item-link">Collections</div>
							<ul className={this.state.submenuActive ? "submenu active" : "submenu"}>
								<li className="submenu-header">
									Collections
								</li>
								{this.generateCollectionLinks()}
							</ul>
							<div className="submenu-close"><img src={closeIcon} alt="warning" onClick={this.handleSubmenuClick} /></div>
						</li>
						<li className="nav-item">
							<Link to="/" activeClassName="active-link" className="nav-item-link" onClick={this.handleNavClick}>The&nbsp;.Advantage</Link>
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
