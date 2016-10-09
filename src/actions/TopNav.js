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
