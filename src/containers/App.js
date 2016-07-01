import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

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

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
