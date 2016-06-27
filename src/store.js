import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import words from './data/words';
import posts from './data/posts';
import comments from './data/comments';
import languages from './data/languages';

const defaultState = {
	posts,
	comments,
	words,
	languages
};


const store = createStore(rootReducer, defaultState);
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store; 
