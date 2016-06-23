import React from 'react';
import { Link  } from 'react-router';

import TopNav from './TopNav';

export default class Main extends React.Component {
	searchInputChange = (event) => {
		console.log(event.target.value);
		this.props.searchWordInputChange({searchWordInput: event.target.value});
	}
	render() {
		return (
			<div>
				<TopNav handleChange={this.searchInputChange} />	
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);	
	}	
} 
