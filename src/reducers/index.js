import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import words from './words';
import languages from './languages';
import search from './search';
import settings from './settings';

const RootReducer = combineReducers({
	posts,
	comments,
	words,
	languages,
	search,
	settings,
	routing: routerReducer
});

export default RootReducer;
