// style: Classes for styling the main component
// heading*: Panel heading
// key*: For multiple similar children
// hidden: For hiding the element
// highlight: Highlighing of heading

import React from 'react';
import { Link  } from 'react-router';
import Highlight from 'react-highlighter';

export default class Panel extends React.Component {
	render() {
		let style = this.props.style ? this.props.style : '';
		let hidden = this.props.hidden ? 'hidden' : '';
		let active = this.props.active ? 'active' : '';
		return (
			<div class={`panel ${style} ${hidden}`}>
				<div class="heading">
					<Highlight search={this.props.highlight}>
						{this.props.heading}
					</Highlight>
				</div>
			</div>
		);	
	}
} 
