export function searchWordBlur() {
	return {
		type: 'SEARCH_WORD_BLUR'
	}
}

export function searchWordFocus() {
	return {
		type: 'SEARCH_WORD_FOCUS'
	}
}

export function searchWordInputChange(searchWordInput) {
	return {
		type: 'SEARCH_WORD_INPUT_CHANGE',
		searchWordInput
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

