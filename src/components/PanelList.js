// Input values for PanelList:
// fieldSelect*: Action function for when a field is selected.
// showAmount*: How many panels are to be rendered.
// selectedValue*: Current panel that is selected. Should be a array object.
// search: Value from search input.
// fields*: All data field that are to be rendered into the panels.
// headingSelector*: Key for the heading field.
// keySelector*: Selector for the key.
//


import React from 'react';

import Panel from './Panel';


export default class PanelList extends React.Component {
	render() {
		let selectedValue;
		let showAmount = this.props.showAmount;
		let renderedAmount = 0;
		return (
			<div class={`${this.props.style}`}>
				{this.props.fields.map((val, index) => {
					let hidden = val.hidden;
					if (hidden !== true) { renderedAmount++; }
					if (showAmount < renderedAmount ||
							val[this.props.keySelector] === this.props.selectedField[this.props.keySelector]) {
						hidden = true; 
					}
					return <Panel 
						key={val[this.props.keySelector]}	
						heading={val[this.props.headingSelector]}
						hidden={hidden}
						highlight={this.props.search}	
						style={this.props.panelStyle}
						onClick={this.props.fieldSelect}
						data={val}
					/>
				})}
			</div>
		);
	};
}
