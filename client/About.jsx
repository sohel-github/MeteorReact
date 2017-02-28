import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class About extends TrackerReact(Component) {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-6">
						About Page
					</div>
					<div className="col-sm-3"></div>
				</div>
			</div>
		);
	}
}