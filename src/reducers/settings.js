function settings(state = {}, action) {
	switch (action.type) {
		case 'LANGUAGE_SELECT':
			console.log(action.language);
			let newState = Object.assign({}, state, {
				language: action.language
			});
			return newState;
		case 'SIDEBAR_TAB_SELECT':
			return Object.assign({}, state, {
				sidebarTab: action.sidebarTab
			})
	}
	return state;
}

export default settings
