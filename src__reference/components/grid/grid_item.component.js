import React from 'react';

function GridItem(props) {
	const itemTitle = props.item.title;
	const itemMedia = process.env.PUBLIC_URL + "/imgContent/" + props.item.previewMedia;
	return (
			<div className="grid-list-item" onClick={() => props.onClick(props.item)}>
				<img src={itemMedia} alt={itemTitle} />
			</div>
	)
}

export default GridItem;
