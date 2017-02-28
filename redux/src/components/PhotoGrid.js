import React from 'react';
import Photo from  './Photo';

export default class PhotoGrid extends React.Component {
	render() {
		return (
			<div class="photo-grid">
				Im the photogrid
				{this.props.posts.map((post, index) => <Photo {...this.props} key={index} index={index} post={post} />)}				
			</div>
		);	
	}	
} 
