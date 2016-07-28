import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import DevTools from './dev/DevTools';

import './stylesheets/main.scss';

import App from './containers/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import WordResult from './containers/WordResult';
import UrlResult from './containers/UrlResult';


const app = document.getElementById('app');
ReactDOM.render(
	(
	 <Provider store={store}>
	 	<div>
		 <DevTools />
		 <Router history={history}>
			 <Route path='/' component={App}>
				 <IndexRoute component={WordResult}></IndexRoute>
				 <Route path='/:wordId' component={UrlResult} />
			 </Route>
		 </Router>
		</div>
	 </Provider>
	)
,app);
