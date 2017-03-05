import React from 'react';

function GridModal(props) {
	const itemTitle = props.item.title;
	const itemMedia = process.env.PUBLIC_URL + "/imgContent/" + props.item.previewMedia;
	// const itemId = itemTitle.replace(/\s+/g, '-').toLowerCase();
	// const itemType = props.item.type;
	// const itemDate = props.item.date;
	// const itemDescription = props.item.previewText;
	return (
		<div className="grid-modal" onClick={() => props.onClick(null)}>
			<div className="grid-modal-content">
				<div className="grid-modal-content-text">
					{itemTitle}
				</div>
				<div className="grid-modal-content-image">
					<img src={itemMedia} alt="enlarge" />
				</div>
			</div>
		</div>
	)
}

export default GridModal;
