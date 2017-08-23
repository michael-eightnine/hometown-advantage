import React, { Component } from 'react';

class Loader extends Component {
	constructor() {
		super();
		this.state = {
			loadingComplete: false
		}
	}

	componentDidMount() {
		const waitTime = this.props.duration + 350;
		setTimeout(() => {
			this.setState({loadingComplete: true});
		}, waitTime);
	}

	render() {
		const duration = this.props.duration + "ms";
		const spinnerOffset = -this.props.duration + "ms";
		const styles = {
			showLoaded: {
				animation: "showLoaded .35s ease-out 1",
				animationFillMode: "forwards"
			},
			loaderComponent: {
				animation: "hideLoader .35s linear 1",
				animationFillMode: "forwards",
				animationDelay: duration
			},
			spinner: {
				animation: `spinner ${duration} linear 2`,
				animationDirection: "alternate-reverse",
				animationFillMode: "forwards",
				transformOrigin: "center center"
			},
			spinner2: {
				animation: `spinner ${duration} linear 2`,
				animationDirection: "alternate-reverse",
				animationFillMode: "forwards",
				animationDelay: spinnerOffset,
				transformOrigin: "center center"
			}
		}
		const childComponents = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       style: styles.showLoaded
     })
    );

		return (
			<div className="loader-component">
				{!this.state.loadingComplete &&
					<div className="loader-inner" style={styles.loaderComponent}>
						<div className="spinner" style={styles.spinner}>
			      </div>
						<div className="spinner" style={styles.spinner2}>
			      </div>
					</div>
				}
				{this.state.loadingComplete &&
					childComponents
				}
			</div>
		)
	}
}

export default Loader;
