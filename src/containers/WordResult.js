import React from 'react';

import Panel from '../components/LPanel';
import { Link  } from 'react-router';

export default class WordResult extends React.Component {
	render() {
		return (
			<div class='col-12 results'>
			{this.props.words.map((val) =>
				<Link to={`/${val.id}/`} key={val.id}>
					<Panel 
						heading={val.word}
						hidden={val.hidden}
						highlight={this.props.search.searchWordInput} 
					/> 
				</Link>
			)}	
			</div>
		);
	};
}
