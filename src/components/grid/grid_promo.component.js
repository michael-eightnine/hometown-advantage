import React from 'react';
import { Link } from 'react-router';

function GridPromo(props) {
	const linkRef = "/collections/" + props.item.type.replace(/\s+/g, '-').toLowerCase();
	const label = props.item.promoType;
	const title = props.item.title;
	const itemCount = props.item.itemCount;
	const itemCta = props.item.cta;
	return (
			<Link to={linkRef} className="grid-list-item grid-list-promo" title={itemCta}>
				<div className="promo-content">
					<h4 className="promo-content-label">{label}</h4>
					<h3 className="promo-content-title">{title}</h3>
					<div className="promo-content-count"><span>{itemCount}</span></div>
					<button className="promo-content-btn btn btn-standard">{itemCta}</button>
				</div>
			</Link>
	)
}

export default GridPromo;
