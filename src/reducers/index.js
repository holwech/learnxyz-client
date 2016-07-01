import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import words from './words';
import languages from './languages';
import search from './search';

const RootReducer = combineReducers({posts, comments, words, languages, search, routing: routerReducer});

export default RootReducer;
