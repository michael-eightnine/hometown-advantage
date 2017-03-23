import React, { Component } from 'react';

class FileDisplay extends Component {
	constructor() {
		super();
	}

	render() {
		const imgSrc = this.props.imgSrc;

		return (
			<div className="file-display">
				<div className="file-display-loader">
					<div className="spinner">
		      </div>
					<div className="spinner">
		      </div>
				</div>
				<div className="file-display-image show-loaded">
					<img src={imgSrc} alt="Your Upload" />
				</div>
			</div>
		)
	}
}

export default FileDisplay;
