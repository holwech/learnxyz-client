import React from 'react';

import Panel from '../components/Panel';


export default class Languages extends React.Component {
	render() {
		let showAmount = 20;
		return (
			<div class='col-4 sidebar-left '>
				<input type='text' class='input-small' />
				{this.props.languages.lang.map((val, index) => {
					let key = undefined;
					for (let first in val) {
						key = first;
					}
					let hidden = val[key].hidden;
					if (showAmount < index) { hidden = true; }
					return <Panel 
						key={key}	
						heading={val[key].name}
						hidden={hidden}
						highlight={this.props.search.searchWordInput}	
						slim={true}
					/>	
				})}
			</div>
		);
	};
}
