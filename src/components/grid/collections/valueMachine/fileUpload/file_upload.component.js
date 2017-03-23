import React, { Component } from 'react';

class FileUpload extends Component {
	constructor() {
		super();
		this.state = {
			dragActive: false
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

		if(type === "drop") {
			this.setState({dragActive: false});

			const dt = e.dataTransfer;
		  const files = dt.files;
		  this.props.onDrop(files);
		}
		else {
			 this.props.onDrop(this.fileUpload.files)
		}
	}

	forceInputClick(e) {
		this.fileUpload.click();
	}

	render() {
		const dropboxClass = this.state.dragActive ? "dropbox active" : "dropbox";

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
				</div>
				<input type="file" id="fileInput" accept="image/*" style={{display: "none"}}
				onChange={(e) => this.drop(e, "select")}
				ref={(input) => this.fileUpload = input}
			/>
			</div>
		)
	}
}

export default FileUpload;
