import React from 'react';
import Sidebar from '../components/Sidebar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/mainSidebar';

class MainSidebar extends React.Component {
	render() {
		let selectedFields, selectedFieldClick, tabNames, inputChange;
		let panelFieldSelect, search, panelFields, panelStyle, style;
		let settings = this.props.settings;
		tabNames = ['Language', 'Category'];
		if (this.props.settings.sidebarTab === 'Language') {
			let languages = this.props.languages;
			panelFieldSelect = this.props.mainSidebarLanguageFieldSelect;
			selectedFields = [{
				heading: settings.language.name,
				key: settings.language.key,
				data: settings.language.name,
			}];
			for (let i = 0; i < languages.length; i++) {
				if (!languages[i].hidden) {
					panelFields.push({
						heading: languages[i].name,
						key: languages[i].key,
						data: languages[i]
					});
				}
			}
		}	else {
			let words = this.props.words;
			panelFieldSelect = this.props.mainSidebarFilterFieldSelect;
			selectedFieldClick = this.props.mainSidebarFilterSelectedFieldClick;
			selectedFields = [{
				heading: settings.filter.discipline,
				key: settings.filter.discipline,
				data: {
					currentFilter: settings.filter,
					type: 'discipline',
				}
			}]
			if (!settings.filter.subject) {
				selectedFields.push({
					heading: settings.filter.subject,
					key: settings.filter.subject,
					data: {
						currentFilter: settings.filter,
						type: 'subject',
					}
				});
			}
			for (let i = 0; i < words.length; i++) {
				if (!words[i].hidden) {
					panelFields.push({
						heading: words[i].word,
						key: words[i].id,
						data: {
							words[i],
							currentFilter: settings.filter,	
						}
					});
				}
			}
		}

		return (
			<Sidebar
				tabSelect={this.props.sidebarTabSelect}
				currentTab={this.props.settings.sidebarTab}
				selectedFields={selectedFields}
				selectedFieldClick={selectedFieldClick}
				tabNames={tabNames}
				inputChange={this.props.mainSidebarInputChange}
				panelFieldSelect={panelFieldSelect}
				panelFields={panelFields}
				search={this.props.search.mainSidebarInput}
				panelStye={'slim'}
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
