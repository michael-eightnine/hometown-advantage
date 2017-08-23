import React, { Component } from 'react';

import Loader from './../../../../common/loader.component';
import ActionBar from './action_bar.component';
import HeartOverlay from './../../../../../svg/affirmation/heartOverlay.svg';

class FileDisplay extends Component {
	constructor() {
		super();
		this.state = {
			beenLiked: false
		}
		this.handleHeartClick = this.handleHeartClick.bind(this);
	}

	handleHeartClick() {
		this.setState({beenLiked: true})
		setTimeout(() => {
			this.props.onComplete();
		}, 1750);
	}

	render() {
		const imgSrc = this.props.imgSrc;
		const beenLiked = this.state.beenLiked;

		return (
			<div className="file-display">
				<Loader
					duration={2000}
				>
					<div className="file-display-image">
						<img src={imgSrc} alt="Your Upload" onDoubleClick={() => this.handleHeartClick()} />
						{beenLiked &&
							<div className="heart-overlay">
								<img src={HeartOverlay} alt="liked" />
							</div>
						}
					</div>
					<div className="file-display-actions">
						<ActionBar
							onLike={this.handleHeartClick}
							beenLiked={beenLiked}
						/>
					</div>
				</Loader>
			</div>
		)
	}
}

export default FileDisplay;
