function searchWord(state = {searchWordInput: ''}, action) {
	switch (action.type) {
		case 'SEARCH_WORD_INPUT_CHANGE':
			console.log(action.searchWordInput);
			let word = Object.assign({}, state, {
				searchWordInput: action.searchWordInput
			});
			return word;
		case 'SEARCH_WORD_FOCUS':
			return Object.assign({}, state, { focus: true });
		case 'SEARCH_WORD_BLUR':
			return Object.assign({}, state, { focus: false });
		default:
			return state;
	}
}

export default searchWord
