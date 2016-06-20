import React from 'react';
import { Link } from 'react-router';

export default class Photo extends React.Component {
	render() {
		const { post, index, comments } = this.props;
		return (
			<figure class="grid-figure">
				<div class="grid-photo-wrap">
					<Link to={`/view/${post.code}`}>
						<img src={post.display_src} alt={post.caption} class='grid-photo' />
					</Link>
				</div>

				<figcaption>
				<p>{post.caption}</p>
				<div class="control-buttons">
					<button class="likes" onClick={this.props.increment.bind(null, index)}> &hearts; {post.likes} </button>
					<Link class="button" to={`/view/${post.code}`}>
						<span class="comment-count"><span class="speech-bubble"></span>
							{comments[post.code] ? comments[post.code].length : 0}	
						</span>
					</Link>
				</div>
				</figcaption>
			</figure>
		);
	}
}
