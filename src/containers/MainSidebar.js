import React from 'react';
import Sidebar from '../components/Sidebar';

export default class MainSidebar extends React.Component {
	render() {
		let selectedField, inputChange, fields, selectedFieldHeading;
		let headingSelector, keySelector, fieldSelect;
		if (this.props.settings.sidebarTab === 'Language') {
			selectedField = this.props.settings.language;
			selectedFieldHeading = this.props.settings.language.name;
			fieldSelect = this.props.mainSidebarLanguageFieldSelect;
			fields = this.props.languages;	
			headingSelector = 'name';
			keySelector = 'key'
		} else {
			selectedField = this.props.settings.filter;
			selectedFieldHeading = this.props.settings.filter.discipline;	
			fieldSelect = this.props.mainSidebarCategoryFieldSelect;
			fields = this.props.settings.filters;
			headingSelector = 'discipline';
			keySelector = 'discipline';
		}
		return (
			<Sidebar
				tabSelect={this.props.sidebarTabSelect}
				currentTab={this.props.settings.sidebarTab}
				tabNames={['Language', 'Category']}
				selectedFieldHeading={selectedFieldHeading}
				selectedField={selectedField}
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
