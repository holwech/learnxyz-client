import React from 'react';
import Sidebar from '../components/Sidebar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/mainSidebar';

class MainSidebar extends React.Component {
		return (
			<Sidebar
			/>
		);
	}
} 


// Map reducer state to props
function mapStateToProps(state) {
	return {
		languages: state.languages,
		search: state.search,
		settings: state.settings
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);	
}

MainSidebar = connect(mapStateToProps, mapDispatchToProps)(MainSidebar);

export default MainSidebar;
