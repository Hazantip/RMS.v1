/* eslint-disable import/default */
// Set up your application entry point here...


import React from 'react';
import {render} from 'react-dom';
import Provider from 'react-redux/lib/components/Provider';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from './routes';
import configureStore from './store/configureStore';

require('../favicon.ico'); // Tell webpack to load favicon.ico

import'../styles/main.scss'; // Import main styles

import {syncHistoryWithStore}  from 'react-router-redux';

const store = configureStore();

const history = syncHistoryWithStore(browserHistory, store);

render(
	<Provider store={store}>
		<Router history={history} routes={routes}/>
	</Provider>,
	document.getElementById('app')
);


// src faq:
// with    require(...) - <img src={'../images/stamp.png'} alt=""/> -> relative url from component to file in src/;
// without require(...) - <img src={'/images/stamp.png'} alt=""/>; relative url from root(./dist) -> ['images/','js/','css/','other files']
