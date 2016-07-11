import React from 'react';
import Languages from './Languages';

export default class MainSidebar extends React.Component {
	tabClick = (tab) => {
		this.props.sidebarTabSelect(tab);
	}
	render() {
		let sidebarTab = this.props.settings.sidebarTab;
		let languageActive = (sidebarTab == 'Language') ? 'active' : ''; 
		let categoryActive = (sidebarTab == 'Catergory') ? 'active' : ''; 
		return (
			<div class='col-4 sidebar-left '>
				<nav class='row tab'>
					<div
						class={`col-12 tab-button ${languageActive}`}
						onClick={this.tabClick.bind(null, 'Language')}
					>
						Language
					</div>		
					<div
						class={`col-12 tab-button ${categoryActive}`}
						onClick={this.tabClick.bind(null, 'Catergory')}
					>
						Category
					</div>		
				</nav>
				{
					<Languages 
						onChange={this.props.languageInputChange}
						languages={this.props.languages}
						search={this.props.search}
						languageSelect={this.props.languageSelect}
						settings={this.props.settings}
					/>	
				}
			</div>
		);	
	}	
} 
