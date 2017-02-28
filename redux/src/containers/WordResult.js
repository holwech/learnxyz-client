import React from 'react';
import Panel from '../components/LPanel';
import { Link  } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/TopNav';

class WordResult extends React.Component {
	applyFilter = (value) => {
		return !value.hidden;
	}
	render() {
		let words = this.props.words.filter(this.applyFilter);
		return (
			<div class='col-12 results'>
			{words.map((val) => {
				let filterTags = [val.discipline];
				if (val.subject) {
					filterTags[1] = val.subject;
				}
				<Link to={`/${val.id}/`} key={val.id}>
					<Panel 
						heading={val.word}
						hidden={val.hidden}
						highlight={this.props.search.searchWordInput} 
					/> 
				</Link>
				})}	
			</div>
		);
	};
}


// Map reducer state to props
function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments,
		words: state.words,
		languages: state.languages,
		search: state.search,
		settings: state.settings
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);	
}

WordResult = connect(mapStateToProps, mapDispatchToProps)(WordResult);

export default WordResult;
