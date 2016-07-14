import React from 'react';


export default class UrlResult extends React.Component {
	render() {
		return (
			<div class='col-12 results'>
				{this.props.params.wordId}
			</div>
		);
	};
}
