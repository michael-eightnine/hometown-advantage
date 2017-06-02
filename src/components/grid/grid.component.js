import React, { Component } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import {CSSTransitionGroup as ReactCSSTransitionGroup} from 'react-transition-group'

import GridItem from "./grid_item.component";
import GridPromo from "./grid_promo.component";
import GridModal from "./grid_modal.component";
import GridPlaceholder from './grid_placeholder.component.js'
import StreamFooter from './stream/stream_footer.component.js'

// import ValueMachine from './collections/valueMachine/value_machine.component'
import CollectionBtn from './collections/collection_btn.component.js'

import GridOptions from "../../data/options.data";

class Grid extends Component {
	constructor() {
		super();
		this.state = {
			activeItem: null,
			collectionComponents: {
				// ValueMachine: ValueMachine
			}
		}
		this.updateActiveItem = this.updateActiveItem.bind(this);
	}

	//render single <GridItem /> or <GridPromo /> (used in map function)
	renderItem(i, isPromo) {
		const gridItems = this.props.route.gridItems;
		let id = i;
		return (
			<LazyLoad
				key={id}
				offset={100}
				placeholder={<GridPlaceholder />}>
				{isPromo === true ?
					<GridPromo
						item={gridItems[i]}
					/>
					:
					<GridItem
						item={gridItems[i]}
						onClick={this.updateActiveItem}
					/>
				}
			</LazyLoad>
		)
	}

	generateGrid() {
		//if filter type is "content stream" (aka view all) return all
		if(this.props.route.filterBy == "content stream") {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				if(!item.noStream) {
					return this.renderItem(i, item.isPromo)
				}
			});
			return gridDOM;
		}
		//else only return those that match type
		else {
			const gridDOM = this.props.route.gridItems.map((item, i) => {
				if(item.type == this.props.route.filterBy && !item.isPromo) {
					return this.renderItem(i)
				}
			});
			return gridDOM;
		}
	}

	updateActiveItem(item) {
		this.setState({activeItem: item});
	}

	componentDidMount() { forceCheck(); }
	componentDidUpdate() { forceCheck(); }

	render() {
		const filterBy = this.props.route.filterBy;
		const activeItem = this.state.activeItem;
		const isCollection = this.props.route.isCollection;
		const isGridCollection = this.props.route.isGridCollection;
		const CollectionComponent = this.state.collectionComponents[this.props.route.collectionComponentName];

		return (
			<div>
				<h1 className="grid-header" data-filterBy={filterBy}>{filterBy}</h1>
				{isGridCollection === true &&
					<section className="grid-list">
						{this.generateGrid()}
						{isCollection ? <CollectionBtn /> : null}
						{filterBy == "content stream" ? <StreamFooter /> : null}
					</section>
				}
				{isGridCollection === true &&
					<ReactCSSTransitionGroup
	          transitionName="modal-fade"
	          transitionEnterTimeout={350}
	          transitionLeaveTimeout={350}>
						{activeItem != null ? <GridModal item={activeItem} onClick={this.updateActiveItem} /> : null}
					</ReactCSSTransitionGroup>
				}
				{isGridCollection === false &&
					<section className="grid-list grid-list--is-component">
						<CollectionComponent />
					</section>
				}
			</div>
		)
	}
}

export default Grid;
