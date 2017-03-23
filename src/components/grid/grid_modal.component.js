import React from 'react';

function GridModal(props) {
	const itemTitle = props.item.title;
	const itemMedia = process.env.PUBLIC_URL + "/imgContent/" + props.item.previewMedia;
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
