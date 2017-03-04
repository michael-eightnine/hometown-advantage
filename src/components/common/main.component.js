import React, { Component } from 'react';
import { Link } from 'react-router';

import indentity from '../../svg/identity.svg';
import closeIcon from '../../svg/close.svg';

import CollectionList from '../../data/collection.data'

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

	generateCollectionLinks() {
		const collectionLinks = CollectionList.map((item, i) => {
			let linkRef = "/collections/" + item.replace(/\s+/g, '-').toLowerCase();
			return (
				<li key={i} className="submenu-item">
					<Link to={linkRef} className="submenu-item-link" onClick={this.handleClick}>{item}</Link>
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
							<img src={indentity} alt="warning" />
						</Link>
					</div>
					<ul className={this.state.navActive ? "nav header-item submenu-active" : "nav header-item"}>
						<li className="nav-item">
							<Link to="/" activeClassName="active-link" className="nav-item-link">Stream</Link>
						</li>
						<li className="nav-item has-submenu">
							<div onClick={this.handleClick} className="submenu-toggle nav-item-link">Collections</div>
							<ul className={this.state.navActive ? "submenu active" : "submenu"}>
								<li className="submenu-header">
									Collections
								</li>
								{this.generateCollectionLinks()}
							</ul>
							<div className="submenu-close"><img src={closeIcon} alt="warning" onClick={this.handleClick} /></div>
						</li>
						<li className="nav-item">
							<Link to="/" activeClassName="active-link" className="nav-item-link">The&nbsp;.Advantage</Link>
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
