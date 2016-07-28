import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import words from './data/words';
import posts from './data/posts';
import comments from './data/comments';
import languages from './data/languages';
import settings from './data/settings';

const defaultState = {
	posts,
	comments,
	words,
	languages,
	settings
};

const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

export default store; 
