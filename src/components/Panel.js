import React from 'react';
import { Link  } from 'react-router';
import Highlight from 'react-highlighter';

export default class Panel extends React.Component {
	handleClick = (event) => {
		this.props.onClick(this.props.data);
	}
	render() {
		let hidden = this.props.hidden ? 'hidden' : '';
		let slim = this.props.slim ? 'slim' : '';
		let active = this.props.active ? 'active' : '';
		return (
			<div 
				class={`panel ${hidden} ${slim} ${active}`}
				onClick={this.handleClick}	
			>
				<p>
					<Highlight search={this.props.highlight}>{this.props.heading}</Highlight>
				</p>
			</div>						
		);	
	}	
} 
