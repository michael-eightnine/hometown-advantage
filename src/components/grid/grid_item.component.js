import React from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import GridPlaceholder from './grid_placeholder.component.js'

function GridItem(props) {
	const itemTitle = props.item.title;
	const itemMedia = props.item.previewMedia;
	const itemId = itemTitle.replace(/\s+/g, '-').toLowerCase();
	const itemType = props.item.type;
	const itemDate = props.item.date;
	const itemDescription = props.item.previewText;
	return (
		<LazyLoad
			height={250}
			placeholder={<GridPlaceholder />}>
			<Link
				to={"/" + itemId}
				className="grid-list-item">
					<div className="grid-list-item-image">
						<img src={itemMedia} alt="d" />
					</div>
					<div className="grid-list-item-copy">
						<h3 className="grid-list-item-copy-header">
							{itemTitle}
						</h3>
						<div className="grid-list-item-copy-description">{itemDescription}</div>
						<div className="grid-list-item-copy-footer">
							<span className="tag">{itemType}</span>
							<span className="date">{itemDate}</span>
						</div>
					</div>
			</Link>
		</LazyLoad>
	)
}

export default GridItem;
