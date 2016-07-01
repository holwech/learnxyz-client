function settings(state = {}, action) {
	switch (action.type) {
		case 'LANGUAGE_SELECT':
			console.log(action.language);
			let newState = Object.assign({}, state, {
				language: action.language
			});
			return newState;
	}
	return state;
}

export default settings
