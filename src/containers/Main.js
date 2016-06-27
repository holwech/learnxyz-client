import React from 'react';
import { Link  } from 'react-router';

import TopNav from '../components/TopNav';
import Languages from '../containers/Languages';

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
					inFocus={this.props.search.wordFocus}
				/>	
				<div class='row'>
					<Languages />	
					<div class='col-1 empty'></div>
					{React.cloneElement(this.props.children, this.props)}
				</div>
			</div>
		);	
	}	
} 
