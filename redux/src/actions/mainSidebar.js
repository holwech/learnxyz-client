export function sidebarTabSelect(sidebarTab) {
	return {
		type: 'SIDEBAR_TAB_SELECT',
		sidebarTab
	}
}

export function mainSidebarInputChange(input) {
	return {
		type: 'MAIN_SIDEBAR_INPUT_CHANGE',
		input
	}
}

export function mainSidebarLanguageFieldSelect(field) {
	return {
		type: 'MAIN_SIDEBAR_LANGUAGE_FIELD_SELECT',
		field
	}
}

export function mainSidebarFilterFieldSelect(field) {
	return {
		type: 'MAIN_SIDEBAR_FILTER_FIELD_SELECT',
		field
	}
}

export function mainSidebarFilterSelectedFieldClick(field) {
	return {
		type: 'MAIN_SIDEBAR_SELECTED_FIELD_CLICK',
		field
	}
}
