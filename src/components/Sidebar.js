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
							heading={value.heading}
							key={value.key}
							style={this.props.panelStyle}
							data={value.data}
							active={true}
							onClick={this.props.selectedFieldClick}
						/>
					})}
					<br />
					<PanelList
						fieldSelect={this.props.panelFieldSelect}
						search={this.props.search}
						panelFields={this.props.panelFields}
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
		selectedFieldClick: React.PropTypes.func,
		tabNames: React.PropTypes.array.isRequired,
		inputChange: React.PropTypes.func.isRequired,
		
		//PanelList values
		panelFieldSelect: React.PropTypes.func.isRequired,
		panelFields: React.PropTypes.array.isRequired,
		search: React.PropTypes.string,
		panelStyle: React.PropTypes.string,
		style: React.PropTypes.string
};
