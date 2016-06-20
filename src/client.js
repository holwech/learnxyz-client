import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';


import './stylesheets/main.scss';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import WordResult from './components/WordResult';


const app = document.getElementById('app');
ReactDOM.render(
	(
	 <Provider store={store}>
		 <Router history={history}>
			 <Route path='/' component={App}>
				 <IndexRoute component={WordResult}></IndexRoute>
			 </Route>
		 </Router>
	 </Provider>
	)
,app);
