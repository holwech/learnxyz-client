import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import words from './words';

const RootReducer = combineReducers({posts, comments, words, routing: routerReducer});

export default RootReducer;
