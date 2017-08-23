import React from 'react';

import ThumbsUp from './../../../../../svg/affirmation/thumbsUp.svg';
import CollectionBtn from './../../../collections/collection_btn.component.js'

function AffirmComplete() {
	return (
			<div className="affirm-display">
				<img src={ThumbsUp} alt="GJ!" className="thumbs-up" />
				<h2>!SELF AFFIRMATION! VERY IMPRESSIVE GOOD JOB !GREAT!</h2>
				<CollectionBtn />
			</div>
  );
}

export default AffirmComplete;
