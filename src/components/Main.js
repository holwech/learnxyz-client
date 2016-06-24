import React from 'react';
import { Link  } from 'react-router';

import TopNav from './TopNav';

export default class Main extends React.Component {
	searchInputChange = (event) => {
		this.props.searchWordInputChange(event.target.value);
	}
	render() {
		return (
			<div>
				<TopNav handleChange={this.searchInputChange} />	
				<p>{this.props.searchWord.searchWordInput}</p>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);	
	}	
} 
