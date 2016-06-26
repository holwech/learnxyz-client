import React from 'react';
import { Link  } from 'react-router';

import TopNav from '../components/TopNav';

export default class Main extends React.Component {
	searchInputChange = (event) => {
		this.props.searchWordInputChange(event.target.value);
	}
	render() {
		return (
			<div>
				<TopNav 
					handleChange={this.searchInputChange}
					onFocus={this.props.searchWordFocus}
					onBlur={this.props.searchWordBlur}
					inFocus={this.props.searchWord.focus}
				/>	
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);	
	}	
} 
