// Input-values for panel:
// key*: Needed by React. Must be unique ID. Not needed when only one panel is
// 	created.
// heading*: Main field name inside panel.
// highlight: Highlighting of heading if search param is included.
// onClick: Action function for when a panel is clicked.
// data*: Data that is passed to the action function.
// slim: Styling for panel.
// active: Active styling for panel.

import React from 'react';
import { Link  } from 'react-router';
import Highlight from 'react-highlighter';

export default class Panel extends React.Component {
	handleClick = (event) => {
		this.props.onClick(this.props.data);
	}
	render() {
		let hidden = this.props.hidden ? 'hidden' : '';
		let active = this.props.active ? 'active' : '';
		return (
			<div 
				class={`panel ${this.props.style} ${hidden} ${active}`}
				onClick={this.handleClick}	
			>
				<Highlight search={this.props.highlight}>{this.props.heading}</Highlight>
			</div>						
		);	
	}	
} 
