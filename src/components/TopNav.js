import React from 'react';
import { Link  } from 'react-router';

export default class TopNav extends React.Component {
	render() {
		let inFocus = this.props.inFocus ? 'searchFocus' : '';
		return (
			<div id='top-navbar'>
				<div class='navbar row'>
					<div class='col-6 empty'></div>
					<input type='text' class={`search-input col-12 ${inFocus}` }
						onChange={this.props.handleChange} 
						onFocus={this.props.onFocus}
						onBlur={this.props.onBlur}
					/>
					<div class="col-4"></div>
					<h1 class='logo col-2 right'>
						<Link to='/'>
							LearnXYZ
						</Link>
					</h1>
				</div>
			</div>
		);	
	}	
} 
