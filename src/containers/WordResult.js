import React from 'react';

import Panel from '../components/Panel';

export default class WordResult extends React.Component {
	render() {
		return (
			<div class='col-12 results'>
			{this.props.words.map((val) =>
				<Panel 
					key={val.id}
					heading={val.word}
					hidden={val.hidden}
					highlight={this.props.search.searchWordInput} 
				/> 
			)}	
			</div>
		);
	};
}
