import React from 'react';
import Sidebar from '../components/Sidebar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class MainSidebar extends React.Component {
	headingSelector = 'discipline';
	keySelector = 'discipline';
	headingSelector = 'discipline';
	keySelector = 'discipline';
	render() {
		// Good luck understanding this part...
		let selectedFields, inputChange, fields, selectedFieldHeadings;
		let headingSelector, keySelector, fieldSelect, selectedFieldClick;
		if (this.props.settings.sidebarTab === 'Language') {
			selectedFields = [this.props.settings.language];
			selectedFieldHeadings = [this.props.settings.language.name];
			fieldSelect = this.props.mainSidebarLanguageFieldSelect;
			fields = this.props.languages;	
			headingSelector = 'name';
			keySelector = 'key'
		} else {
			selectedFields = [this.props.settings.filter];
			selectedFieldHeadings = [this.props.settings.filter.discipline];
			selectedFieldClick = this.props.mainSidebarSelectedFieldClick;
			fieldSelect = this.props.mainSidebarFilterFieldSelect;
			fields = this.props.settings.filters;
			if (this.props.settings.filter.discipline === 'All'){
				headingSelector = 'discipline';
				keySelector = 'discipline';
			} else {
				for (let i = 0; i < fields.length; i++) {
					if (fields[i].discipline === selectedFieldHeadings[0]) {
						fields = fields[i].subjects;
						break;
					}
				}
				if (this.props.settings.filter.subject) {
					console.log(this.props.settings.filter.subject);
					selectedFieldHeadings[1]  = this.props.settings.filter.subject;
				}
				headingSelector = 'subject';
				keySelector = 'subject';
			}
		}
		return (
			<Sidebar
				tabSelect={this.props.sidebarTabSelect}
				currentTab={this.props.settings.sidebarTab}
				tabNames={['Language', 'Category']}
				selectedFields={selectedFields}
				selectedFieldHeadings={selectedFieldHeadings}
				selectedFieldClick={selectedFieldClick}
				inputChange={this.props.mainSidebarInputChange}		
				fieldSelect={fieldSelect}
				showAmount={20}
				search={this.props.search.mainSidebarInput}
				fields={fields}
				headingSelector={headingSelector}
				keySelector={keySelector}
				panelStyle={'slim'}
			/>
		);
	}
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

MainSidebar = connect(mapStateToProps, mapDispatchToProps)(MainSidebar);

export default MainSidebar;
