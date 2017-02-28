import React from 'react';
import { Link  } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/TopNav';

class TopNav extends React.Component {
	searchInputChange = (event) => {
		this.props.searchWordInputChange(event.target.value);
	}
	render() {
		let inFocus = this.props.search.wordFocus ? 'searchFocus' : '';
		return (
			<div id='top-navbar'>
				<div class='navbar row-slim'>
					<div class='col-6 empty'></div>
					<div class='col-12'>
						<input type='text' class={`search-input ${inFocus}` }
							onChange={this.searchInputChange} 
							onFocus={this.props.searchWordFocus}
							onBlur={this.props.searchWordBlur}
						/>
					</div>
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

// Map reducer state to props
function mapStateToProps(state) {
	return {
		search: state.search
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);	
}

TopNav = connect(mapStateToProps, mapDispatchToProps)(TopNav);

export default TopNav;
