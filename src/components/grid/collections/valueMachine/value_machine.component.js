import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import FileUpload from './fileUpload/file_upload.component';
import FileDisplay from './fileDisplay/file_display.component';

class ValueMachine extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
			validUpload: true
		}
		this.setTargetFile = this.setTargetFile.bind(this)
	}

	setTargetFile(files) {
		const file = files[0];
    const imageType = /^image\//;

    if (!imageType.test(file.type)) {
      console.log('no image -- throw invalid upload');
			this.setState({validUpload: false})
			return false;
    }
		else {
			this.setState({validUpload: true})
		}

		const self = this;
    const reader = new FileReader();
    reader.onload = function(upload) {
        self.setState({
            image: upload.target.result
        });
    };
    reader.readAsDataURL(file);
	}

	render() {
		const imgSrc = this.state.image;
		return (
			<section className="value-machine">
				<ReactCSSTransitionGroup
					transitionName="upload-fade"
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}>
					{imgSrc == null ?
						<FileUpload
							onDrop={this.setTargetFile}
						/> : null
					}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
					transitionName="display-fade"
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}>
					{imgSrc != null ?
						<FileDisplay
							imgSrc={imgSrc}
						/>
						: null
					}
				</ReactCSSTransitionGroup>
			</section>
		)
	}
}

export default ValueMachine;