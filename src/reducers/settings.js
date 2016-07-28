function settings(state = {}, action) {
	switch (action.type) {
		case 'MAIN_SIDEBAR_LANGUAGE_FIELD_SELECT':
			return Object.assign({}, state, {
				language: action.field
			});
		case 'MAIN_SIDEBAR_FILTER_FIELD_SELECT':
				let newState = Object.assign({}, state, {});
				if (state.filter.discipline === 'All') {
					newState.filter.discipline = action.field.discipline;
				} else {
					newState.filter.subject = action.field.subject;
				}
				return newState;
		case 'SIDEBAR_TAB_SELECT':
			return Object.assign({}, state, {
				sidebarTab: action.sidebarTab
			})
		case 'MAIN_SIDEBAR_SELECTED_FIELD_CLICK':
				console.log(action.field);
	}
	return state;
}

export default settings
