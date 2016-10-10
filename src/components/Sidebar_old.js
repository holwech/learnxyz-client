// Input values for Sidebar:
// tabSelect*: Action function for clicking tab. Should be 1,2,3,4,6,8 or 12
// 	values or shit gets fucked up and things will look ugly.
// currentTab*: Current selected tab.
// selectedFields*: Current selected field.
// selectedFieldClick*: Handling of onClick of a selected field
// tabNames*: Array of tab names. Each value must start with captial letter.
// inputChange*: Action function for when search input changes. 
//
// PanelList values:
// fieldSelect*, showAmount*, search, fields*, headingSelector, keySelector 

import React from 'react';
import PanelList from './PanelList';
import Panel from './Panel';

export default class Sidebar extends React.Component {
	tabClick = (tab) => {
		this.props.tabSelect(tab);
	}
	inputChange = (event) => {
		this.props.inputChange(event.target.value);
	}
	render() {
		let currentTab = this.props.currentTab;
		let selectedFields = this.props.selectedFields;
		let columnWidth = 24 / this.props.tabNames.length;
		return (
			<div class='col-4 sidebar-left'>
				<nav class='row tab'>
				{this.props.tabNames.map((value, index) => {
						let active = (value === currentTab) ? 'active' : '';
						return <div
							class={`col-${columnWidth} tab-button ${active}`}
							onClick={this.tabClick.bind(null, value)}
							key={value}
						>
							{value}
						</div>
					}		
				)}
				</nav>
				<div class='body'>
				<input type='text' class='input-small' onChange={this.inputChange}/>
				{this.props.selectedFields.map((value, index) => {
					return <Panel
						heading={this.props.selectedFieldHeadings[index]}
						key={value[this.props.keySelector]}
						style={this.props.panelStyle}
						data={value}
						active={true}
						onClick={this.props.selectedFieldClick}
					/>
				})}
				<br />
				<PanelList
					fieldSelect={this.props.fieldSelect}
					showAmount={this.props.showAmount}
					selectedFields={this.props.selectedFields}
					search={this.props.search}
					fields={this.props.fields}
					headingSelector={this.props.headingSelector}
					keySelector={this.props.keySelector}
					panelStyle={this.props.panelStyle}
					style={''}
				/>
				</div>
			</div>
		);	
	}	
} 

Sidebar.propTypes = {
		tabSelect: React.PropTypes.func.isRequired,
		currentTab: React.PropTypes.string.isRequired,
		selectedFields: React.PropTypes.array.isRequired,
		selectedFieldHeadings : React.PropTypes.array.isRequired,
		selectedFieldClick: React.PropTypes.func,
		tabNames: React.PropTypes.array.isRequired,
		inputChange: React.PropTypes.func.isRequired,
		
		//PanelList values
		fieldSelect: React.PropTypes.func.isRequired,
		showAmount: React.PropTypes.number.isRequired,
		search: React.PropTypes.string,
		fields: React.PropTypes.array.isRequired,
		headingSelector: React.PropTypes.string.isRequired,
		keySelector: React.PropTypes.string.isRequired
};
