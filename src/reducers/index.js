import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import words from './words';
import searchWordReducer from './searchWordReducer';

const RootReducer = combineReducers({posts, comments, words, searchWordReducer, routing: routerReducer});

export default RootReducer;
