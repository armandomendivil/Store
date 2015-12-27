'use strict';

/*
 * Import modules
 */
import React from 'react';

// Initialize variables
let date = new Date();
let year = date.getFullYear().toString();

// Footer component
export default class Footer extends React.Component {
	render() {
		return (
			<div className="container">
		    <hr/>
		    <footer>
		        <div className="row">
		            <div className="col-lg-12">
		                <p>Copyright &copy; Your Website { year }</p>
		            </div>
		        </div>
		    </footer>
		  </div>
		);
	}
}