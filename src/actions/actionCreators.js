export function searchWordInputChange(input) {
	return {
		type: 'SEARCH_WORD_INPUT_CHANGE',
		input
	};
}

export function increment(index ) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
}

export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment,
	};
}

export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		index,
		postId,
	};
}

