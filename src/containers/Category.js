import React from 'react';

import Panel from '../components/Panel';


export default class Languages extends React.Component {
	handleChange = (event) => {
		this.props.onChange(event.target.value);
	}
	languageSelect = (data) => {
		this.props.languageSelect(data);
	}
	render() {
		let showAmount = 15;
		let renderedAmount = 0;
		let keySelected = {'en': {'name': 'English', 'nativeName': 'English'}};
		let val = this.props.settings.language;
		for (let first in val) {
			keySelected = first;
		}
		return (
			<div class='col-4 sidebar-left '>
				<input type='text' class='input-small' onChange={this.handleChange}/>
				<Panel 
					key={keySelected}	
					heading={val[keySelected].name}
					highlight={this.props.search.languageInput}	
					slim={true}
					onClick={this.languageSelect}
					data={val}
					active={true}
				/>
				<br />
				{this.props.languages.map((val, index) => {
					let key = undefined;
					for (let first in val) {
						key = first;
					}
					let hidden = val[key].hidden;
					if (hidden !== true) { renderedAmount++; }
					if (showAmount < renderedAmount || key === keySelected) { hidden = true; }
					return <Panel 
						key={key}	
						heading={val[key].name}
						hidden={hidden}
						highlight={this.props.search.languageInput}	
						slim={true}
						onClick={this.languageSelect}
						data={val}
					/>
				})}
			</div>
		);
	};
}
