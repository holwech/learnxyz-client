import React from 'react';
import { Link  } from 'react-router';
import Highlight from 'react-highlighter';

export default class Panel extends React.Component {
	render() {
		let hidden = this.props.hidden ? 'hidden' : '';
		let slim = this.props.slim ? 'slim' : '';
		return (
			<div class={`panel ${hidden} ${slim}`}>
				<p>
					<Highlight search={this.props.highlight}>{this.props.heading}</Highlight>
				</p>
			</div>						
		);	
	}	
} 
