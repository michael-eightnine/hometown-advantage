import React, { Component } from 'react';
import {CSSTransitionGroup as ReactCSSTransitionGroup} from 'react-transition-group'

import FileUpload from './fileUpload/file_upload.component';
import FileDisplay from './fileDisplay/file_display.component';
import AffirmComplete from './affirmComplete/affirm_complete.component'

class ValueMachine extends Component {
	constructor() {
		super();
		this.state = {
			image: null,
			complete: false
		}
		this.setTargetFile = this.setTargetFile.bind(this);
		this.setAffirmComplete = this.setAffirmComplete.bind(this);
	}

	setTargetFile(targetFile) {
		const file = targetFile;
		const self = this;
    const reader = new FileReader();

    reader.onload = function(upload) {
        self.setState({
            image: upload.target.result
        });
    };
    reader.readAsDataURL(file);
	}

	setAffirmComplete() {
		this.setState({complete: true})
	}

	render() {
		const imgSrc = this.state.image;
		const complete = this.state.complete;
		const valueMachineClass = complete ? "value-machine value-machine-complete" : "value-machine";
		return (
			<section className={valueMachineClass}>
				<ReactCSSTransitionGroup
					transitionName="affirm-fade"
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}>
					{imgSrc == null && !complete ?
						<FileUpload
							onDrop={this.setTargetFile}
						/> : null
					}
				</ReactCSSTransitionGroup>
				<ReactCSSTransitionGroup
					transitionName="affirm-fade"
					transitionEnterTimeout={350}
					transitionLeaveTimeout={350}>
					{imgSrc != null && !complete ?
						<FileDisplay
							imgSrc={imgSrc}
							onComplete={this.setAffirmComplete}
						/>
						: null
					}
				</ReactCSSTransitionGroup>
				{complete ?
					<AffirmComplete />
					: null
				}
			</section>
		)
	}
}

export default ValueMachine;
