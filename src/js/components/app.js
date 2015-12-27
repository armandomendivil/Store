'use strict';

/*
 * Import modules
 */
import React from 'react';
import Home from './home/home';
import About from './home/about';
import Cart from './cart/app-cart';
import CatalogDetail from './product/app-catalogdetail';
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';


export default () => {
	return (
		<Router>
			<Route path="/" component={Template}> // Layout
				<IndexRoute component={Home}/> // Index default page
				<Route path="about" component={About} />
				<Route path="cart" component={Cart} />
				<Route path="item/:item" component={CatalogDetail} />
			</Route>
		</Router>
	);
}