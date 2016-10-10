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

export function mainSidebarLanguageFieldSelect(language) {
	return {
		type: 'MAIN_SIDEBAR_LANGUAGE_FIELD_SELECT',
		language
	}
}

export function mainSidebarFilterFieldSelect(filter) {
	return {
		type: 'MAIN_SIDEBAR_FILTER_FIELD_SELECT',
		filter
	}
}

export function mainSidebarFilterSelectedFieldClick(selectedFilter) {
	return {
		type: 'MAIN_SIDEBAR_SELECTED_FIELD_CLICK',
		selectedFilter
	}
}
