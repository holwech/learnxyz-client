import React from 'react';

import Panel from './Panel';

export default class Results extends React.Component {
	render() {
		return (
			<div class="word-list">
			{this.props.words.map((val) =>
					<Panel 
						key={val.id}
						word={val.word}
						hidden={val.hidden}
						highlight={this.props.highlight} 
					/> 
			)}	
			</div>
		);
	};
}
