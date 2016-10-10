function settings(state = {}, action) {
	let newState;
	switch (action.type) {
		case 'MAIN_SIDEBAR_LANGUAGE_FIELD_SELECT':
			return Object.assign({}, state, {
				language: action.language
			});
		case 'MAIN_SIDEBAR_FILTER_FIELD_SELECT':
			newState = Object.assign({}, state, {});
			if (state.filter.discipline === 'All') {
				newState.filter.discipline = action.filter.discipline;
			} else {
				newState.filter.subject = action.filter.subject;
			}
			return newState;
		case 'SIDEBAR_TAB_SELECT':
			return Object.assign({}, state, {
				sidebarTab: action.sidebarTab
			})
		case 'MAIN_SIDEBAR_SELECTED_FIELD_CLICK':
			newState = Object.assign({}, state, {});
			console.log(newState);
			if (state.filter.discipline !== 'All' && !state.filter.subject) {
				newState.filter.discipline = 'All';
			} else {
				delete newState.filter.subject;
			}
			return newState;
	}
	return state;
}

export default settings
