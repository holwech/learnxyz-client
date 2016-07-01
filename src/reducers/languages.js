function languages(state = [], action) {
	switch (action.type) {
		case 'SEARCH_LANGUAGE_CHANGE':
			let newState = Object.assign([], state, []);
			let regex = new RegExp(action.languageInput, 'i');
			newState.forEach((value, index, array) => {
				let key = undefined;
				for (let first in value) {
					key = first;
				}
				if (value[key].name.match(regex) === null) {
					array[index][key]['hidden'] = true;
				}	else {
					array[index][key]['hidden'] = false;
				}
			});
			return newState;
	}
	return state;
}

export default languages;
