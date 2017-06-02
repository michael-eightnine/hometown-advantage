import React, { Component } from 'react';
import {CSSTransitionGroup as ReactCSSTransitionGroup} from 'react-transition-group'

import invalidImage from './../../../../../svg/affirmation/noImageFace.svg';

class FileUpload extends Component {
	constructor() {
		super();
		this.state = {
			dragActive: false,
			validUpload: true
		}
	}

	prevent(e) {
		e.stopPropagation();
  	e.preventDefault();
	}
	dragEnter(e) {
		this.prevent(e)
		this.setState({dragActive: true});
	}
	dragOver(e) {
		this.prevent(e)
	}
	dragLeave(e) {
		this.prevent(e)
		this.setState({dragActive: false});
	}

	drop(e, type) {
		this.prevent(e)
		const imageType = /^image\//;
		let targetFile;

		if(type === "drop") {
			this.setState({dragActive: false});
		  targetFile = e.dataTransfer.files[0];
		}
		else {
			 targetFile = this.fileUpload.files[0]
		}

		if (!imageType.test(targetFile.type)) {
			this.showInvalid();
		}
		else {
			this.props.onDrop(targetFile);
		}
	}

	showInvalid() {
		this.setState({validUpload: false})
		setTimeout(() => {
			this.setState({validUpload: true})
		}, 2200)
	}

	forceInputClick(e) {
		this.fileUpload.click();
	}

	render() {
		const dropboxClass = this.state.dragActive ? "dropbox active" : "dropbox";
		const validUpload = this.state.validUpload;

		return (
			<div className={dropboxClass}
				onDragEnter={(e) => this.dragEnter(e)}
				onDragOver={(e) => this.dragOver(e)}
				onDragLeave={(e) => this.dragLeave(e)}
				onDrop={(e) => this.drop(e, "drop")}
			>
				<div className="dropbox-prompt">
					<h3>Drag &amp; Drop an Image</h3>
					<div className="divider">or</div>
					<button className="btn btn-standard btn-block" onClick={(e) => this.forceInputClick(e)}>Select an Image</button>
					<input type="file" id="fileInput" accept="image/*" style={{display: "none"}}
						onChange={(e) => this.drop(e, "select")}
						ref={(input) => this.fileUpload = input}
					/>
				</div>
				<ReactCSSTransitionGroup
					transitionName="error-fade"
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}
				>
					{validUpload !== true &&
						<div className="dropbox-prompt dropbox-error">
							<img src={invalidImage} alt="Invalid Upload" />
							<h3>That's not an image...</h3>
						</div>
					}
				</ReactCSSTransitionGroup>
				<div className="dropbox-guideline">
					Square images &amp; images under 1MB work best...
				</div>
			</div>
		)
	}
}

export default FileUpload;
