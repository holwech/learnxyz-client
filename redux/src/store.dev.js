import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

import DevTools from './dev/DevTools';

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

const enhancer = compose(
  // Middleware you want to use in development:
//  applyMiddleware(d1, d2, d3),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

const store = createStore(rootReducer, defaultState, enhancer);
export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store; 
