// Input values for Sidebar:
// tabSelect*: Action function for clicking tab. Should be 1,2,3,4,6,8 or 12
// 	values or shit gets fucked up and things will look ugly.
// currentTab*: Current selected tab.
// selectedField*: Current selected field.
// selectedFieldHeading*: Heading of selected field.
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
		let selectedField = this.props.selectedField;
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
				<Panel 
					heading={this.props.selectedFieldHeading}
					style={this.props.panelStyle}
					data={selectedField}
					active={true}
				/>
				<br />
				<PanelList
					fieldSelect={this.props.fieldSelect}
					showAmount={this.props.showAmount}
					selectedField={selectedField}
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
