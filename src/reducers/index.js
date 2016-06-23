import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';
import searchWordReducers from './searchWordReducers';

const RootReducer = combineReducers({posts, comments, searchWordReducers, routing: routerReducer});

export default RootReducer;
