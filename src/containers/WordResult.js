import React from 'react';

import Results from '../components/Results';

export default class WordResult extends React.Component {
	render() {
		return (
				<Results words={this.props.words} highlight={this.props.searchWord.searchWordInput}/>
		);
	};
}
