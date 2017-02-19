import React, { Component } from 'react';

class GridDetail extends Component {
	render() {
	 const id = this.props.params.id;

		return (
			<div>
				Grid Detail Content for {id}
			</div>
		)
	}
}

export default GridDetail;
