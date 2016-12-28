/**
 * Created by Khazan on 03/07/2016.
 */
import React from 'react';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';

import App from './containers/App';
import ListViewIntro from './components/ListViewIntro';
import Item from './components/Item';
import NotFoundPage from './components/NotFoundPage';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={ListViewIntro}/>
		<Route path="item" component={Item}/>
		<Route path="*" component={NotFoundPage}/>
	</Route>
);

// TODO: component for testing 3 img sizes, add last screen, image gradient overlay, learn flex, learn canvas
