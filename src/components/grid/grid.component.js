import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import GridItem from "./grid_item.component";
import GridModal from "./grid_modal.component";
import GridPlaceholder from './grid_placeholder.component.js'

import StreamFooter from './stream/stream_footer.component.js'
import CollectionBtn from './collections/collection_btn.component.js'

import GridOptions from "../../data/options.data";

class Grid extends Component {
	constructor() {
		super();
		this.state = {
			activeItem: null
		}
		this.updateActiveItem = this.updateActiveItem.bind(this);
	}

	//render single <GridItem /> (used in map function)
	renderItem(i) {
		const gridItems = this.props.route.gridItems;
		let id = i;
		return (
			<LazyLoad
				key={id}
				offset={50}
				placeholder={<GridPlaceholder />}>
				<GridItem
					item={gridItems[i]}
					onClick={this.updateActiveItem}
				/>
			</LazyLoad>
		)
	}

	shuffleGrid(grid) {
		var currentIndex = grid.length, temporaryValue, randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = grid[currentIndex];
			grid[currentIndex] = grid[randomIndex];
			grid[randomIndex] = temporaryValue;
		}
		return grid;
	}

	generateGrid() {
		//if filter type is "content stream" (aka view all) return all
		if(this.props.route.filterBy == "content stream") {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				if(!item.noStream) {
					return this.renderItem(i)
				}
			});
			if(GridOptions.shuffleGrid)
				return this.shuffleGrid(gridDOM);
			else
				return gridDOM;
		}
		//else only return those that match type
		else {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				if(item.type == this.props.route.filterBy) {
					return this.renderItem(i)
				}
			});
			return gridDOM;
		}
	}

	updateActiveItem(item) {
		this.setState({activeItem: item});
	}

	render() {
		const filterBy = this.props.route.filterBy;
		const activeItem = this.state.activeItem;
		const isCollection = this.props.route.isCollection;

		return (
			<div>
				<h1 className="grid-header" data-filterBy={filterBy}>{filterBy}</h1>
				<section className="grid-list">
					{this.generateGrid()}
					{isCollection ? <CollectionBtn /> : null}
					{filterBy == "content stream" ? <StreamFooter /> : null}
				</section>
				<ReactCSSTransitionGroup
          transitionName="modal-fade"
          transitionEnterTimeout={350}
          transitionLeaveTimeout={350}>
					{activeItem != null ? <GridModal item={activeItem} onClick={this.updateActiveItem} /> : null}
				</ReactCSSTransitionGroup>
			</div>
		)
	}
}

export default Grid;
