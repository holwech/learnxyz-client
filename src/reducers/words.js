function words(state = [], action) {
	let newState;
	switch (action.type) {
		case 'SEARCH_WORD_INPUT_CHANGE':
			newState = Object.assign([], state, []);
			let regex = new RegExp(action.searchWordInput, 'i');
			newState.forEach((value, index, array) => {
				if (value.word.match(regex) === null) {
					array[index]['hidden'] = true;
				}	else {
					array[index]['hidden'] = false;
				}
			});
			return newState;
		case 'MAIN_SIDEBAR_FILTER_FIELD_SELECT':
			newState = Object.assign([], state, []);
			for (let i = 0; i < newState.length; i++) {
				if (action.filter.type === 'discipline') {
					if (newState[i].discipline === action.filter.currentFilter.discipline) {
						newState[i]['hidden'] = false;
					} else {
						newState[i]['hidden'] = true;
					}
				} else {
					if (newState[i].subject === action.filter.currentFilter.subject &&
							newState[i].discipline === action.filter.currentFilter.discipline) {
						newState[i]['hidden'] = false;
					} else {
						newState[i]['hidden'] = true;
					}
				}
			}
		case 'MAIN_SIDEBAR_SELECTED_FIELD_CLICK':	
	}
	return state;
}

export default words
