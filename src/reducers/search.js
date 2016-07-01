function search(state = {searchWordInput: '', languageInputChange: ''}, action) {
	switch (action.type) {
		case 'SEARCH_WORD_INPUT_CHANGE':
			console.log(action.searchWordInput);
			let word = Object.assign({}, state, {
				searchWordInput: action.searchWordInput
			});
			return word;
		case 'SEARCH_WORD_FOCUS':
			return Object.assign({}, state, { wordFocus: true });
		case 'SEARCH_WORD_BLUR':
			return Object.assign({}, state, { wordFocus: false });
		case 'SEARCH_LANGUAGE_CHANGE':
			console.log(action.languageInput);
			return Object.assign({}, state, {
				languageInput: action.languageInput
			});
		default:
			return state;
	}
}

export default search;
