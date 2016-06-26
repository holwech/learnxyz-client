function words(state = [], action) {
	switch (action.type) {
		case 'SEARCH_WORD_INPUT_CHANGE':
			let newState = Object.assign([], state, []);
			let regex = new RegExp(action.searchWordInput, 'i');
			newState.forEach((value, index, array) => {
				if (value.word.match(regex) === null) {
					array[index]['hidden'] = true;
				}	else {
					array[index]['hidden'] = false;
				}
			});
			return newState;
	}
	return state;
}

export default words
