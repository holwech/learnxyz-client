function settings(state = {}, action) {
	switch (action.type) {
		case 'MAIN_SIDEBAR_LANGUAGE_FIELD_SELECT':
			return Object.assign({}, state, {
				language: action.field
			});
		case 'MAIN_SIDEBAR_CATEGORY_FIELD_SELECT':
				console.log(action.field);
				return Object.assign({}, state, {
					filter: {
						discipline: action.field.discipline
					}
				});
		case 'SIDEBAR_TAB_SELECT':
			return Object.assign({}, state, {
				sidebarTab: action.sidebarTab
			})
	}
	return state;
}

export default settings
