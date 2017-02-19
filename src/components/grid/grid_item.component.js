import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import GridPlaceholder from './grid_placeholder.component.js'

function GridItem(props) {
	const itemTitle = props.item.title;
	const itemMedia = props.item.previewMedia;
	const itemId = itemTitle.replace(/\s+/g, '-').toLowerCase();
	const itemType = props.item.type;
	return (
		<LazyLoad
			height={250}
			placeholder={<GridPlaceholder />}>
			<Link
				to={"/" + itemId}
				className="grid-list-item">
					<h3>{itemTitle}</h3>
					<img src={itemMedia} alt="d" />
					<span>{itemType}</span>
			</Link>
		</LazyLoad>
	)
}

export default GridItem;
