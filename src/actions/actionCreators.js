// === Main sidebar
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


// === Navbar
export function searchWordBlur() {
	return {
		type: 'SEARCH_WORD_BLUR'
	}
}

export function searchWordFocus() {
	return {
		type: 'SEARCH_WORD_FOCUS'
	}
}

export function searchWordInputChange(searchWordInput) {
	return {
		type: 'SEARCH_WORD_INPUT_CHANGE',
		searchWordInput
	};
}


// === Crap
export function increment(index ) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
}

export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment,
	};
}

export function removeComment(postId, index) {
	return {
		type: 'REMOVE_COMMENT',
		index,
		postId,
	};
}

