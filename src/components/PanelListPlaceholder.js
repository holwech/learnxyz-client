import React from 'react';
import Panel from './Panel';


export default class PanelList extends React.Component {
	render() {
		let selectedValue;
		return (
			<div class={`${this.props.style}`}>
				{this.props.panelFields.map((value, index) => {
					return <Panel 
						key={value.key}	
						heading={value.heading}
						hidden={value.hidden}
						highlight={this.props.search}	
						style={this.props.panelStyle}
						onClick={this.props.fieldSelect}
						data={value.data}
					/>
				})}
			</div>
		);
	};
}

PanelList.propTypes = {
	panelFields: React.PropTypes.array.isRequired,
	search: React.PropTypes.string.isRequired,
	fieldSelect: React.PropTypes.func,
	panelStyle: React.PropTypes.
}
