import React, { Component } from 'react';

import GridItem from "./grid_item.component";

class Grid extends Component {
	//render single <GridItem /> (used in map function)
	renderItem(i) {
		const gridItems = this.props.route.gridItems;
		let id = i;
		return (
			<GridItem
				item={gridItems[i]}
				key={id}
			/>
		)
	}

	//map gridItems to individual <GridItem />'s - also
	generateGrid() {
		//if filter type is "latest" (aka view all) return all
		if(this.props.route.filterBy == "content stream") {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				return this.renderItem(i)
			});
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

	render() {
		const filterBy = this.props.route.filterBy;

		return (
			<div>
				<h1 className="grid-header" data-filterBy={filterBy}>{filterBy}</h1>
				<section className="grid-list">
					{this.generateGrid()}
				</section>
			</div>
		)
	}
}

export default Grid;
