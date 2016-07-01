import React from 'react';
import Languages from './Languages';

export default class MainSidebar extends React.Component {
	render() {
		return (
			<div class='col-4 sidebar-left '>
				<nav class='row tab'>
					<div class='col-12 tab-button'>Language</div>		
					<div class='col-12 tab-button'>Category</div>		
				</nav>
				<Languages 
					onChange={this.props.languageInputChange}
					languages={this.props.languages}
					search={this.props.search}
					languageSelect={this.props.languageSelect}
					settings={this.props.settings}
				/>	
			</div>
		);	
	}	
} 
