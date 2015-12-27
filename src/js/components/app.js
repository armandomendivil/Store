'use strict';

/*
 * Import modules
 */
import React from 'react';
import Home from './home/home';
import About from './home/about';
import Template from './app-template';
import { Router, Route, IndexRoute } from 'react-router';


export default () => {
	return (
		<Router>
			<Route path="/" component={Template}> // Layout
				<IndexRoute component={Home}/> // Index default page
				<Route path="about" component={About} />
			</Route>
		</Router>
	);
}