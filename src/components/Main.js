import React from 'react';
import { Link  } from 'react-router';

import TopNav from './TopNav';

export default class Main extends React.Component {
	handleSearchInputChange = (event) => {
		console.log(event.target.value);
	}

	render() {
		return (
			<div>
				<TopNav handleChange={this.handleSearchInputChange}/>	
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);	
	}	
} 
