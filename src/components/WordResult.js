import React from 'react';

export default class WordResult extends React.Component {
	render() {
		return (
			<div class="word-list">
				Word list
				<p>{this.props.words.map((val) => val.word)}</p>
			</div>
		);
	};
}
