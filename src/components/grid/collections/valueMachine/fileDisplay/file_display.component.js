import React, { Component } from 'react';

import Loader from './../../../../common/loader.component'

class FileDisplay extends Component {
	constructor() {
		super();
	}

	render() {
		const imgSrc = this.props.imgSrc;

		return (
			<div className="file-display">
				<Loader
					duration={2000}
				>
					<div className="file-display-image">
						<img src={imgSrc} alt="Your Upload" />
					</div>
					<div className="file-display-actions">
						<a className="like-button">
							Heart SVG
						</a>
					</div>
				</Loader>
			</div>
		)
	}
}

export default FileDisplay;
