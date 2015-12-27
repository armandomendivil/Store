import React from 'react';
import Navbar from './nav-bar/nav-bar';
import Footer from './footer/footer';

export default (props) => {
	return (
		<div className="container">
			<Navbar></Navbar>
			{props.children}
			<Footer></Footer>
		</div>
	)
}