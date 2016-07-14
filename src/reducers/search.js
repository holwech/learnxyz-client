function search(state = {searchWordInput: '', mainSidebarInput: ''}, action) {
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
			if (state.searchWordInput.length === 0) {
				return Object.assign({}, state, { wordFocus: false });
			}
		case 'MAIN_SIDEBAR_INPUT_CHANGE':
			return Object.assign({}, state, {
				mainSidebarInput: action.input
			});
		default:
			return state;
	}
}

export default search;
