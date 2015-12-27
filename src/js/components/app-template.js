import React from 'react';
import Navbar from './nav-bar/nav-bar';

export default (props) => {
	return (
		<div className="container">
			<Navbar></Navbar>
			{props.children}
		</div>
	)
}