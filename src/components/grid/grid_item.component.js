import React from 'react';

function GridItem(props) {
	const itemTitle = props.item.title;
	const itemMedia = process.env.PUBLIC_URL + "/imgContent/" + props.item.previewMedia;
	// const itemId = itemTitle.replace(/\s+/g, '-').toLowerCase();
	// const itemType = props.item.type;
	// const itemDate = props.item.date;
	// const itemDescription = props.item.previewText;
	return (
			<div className="grid-list-item" onClick={() => props.onClick(props.item)}>
				<img src={itemMedia} alt={itemTitle} />
			</div>
	)
}

export default GridItem;
