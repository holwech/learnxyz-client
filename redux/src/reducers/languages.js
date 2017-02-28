function languages(state = [], action) {
	switch (action.type) {
		case 'MAIN_SIDEBAR_INPUT_CHANGE':
			let newState = Object.assign([], state, []);
			let regex = new RegExp(action.input, 'i');
			newState.forEach((value, index, array) => {
				if (value.name.match(regex) === null) {
					array[index]['hidden'] = true;
				}	else {
					array[index]['hidden'] = false;
				}
			});
			return newState;
	}
	return state;
}

export default languages;
