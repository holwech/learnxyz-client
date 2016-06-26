import React from 'react';
import { Link  } from 'react-router';
import Highlight from 'react-highlighter';

export default class Panel extends React.Component {
	render() {
		let hidden = this.props.hidden ? 'hidden' : ''
		return (
			<div class={`panel ${hidden}`}>
				<p>
					<Highlight search={this.props.highlight}>{this.props.word}</Highlight>
				</p>
			</div>						
		);	
	}	
} 
