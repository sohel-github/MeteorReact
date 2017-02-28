import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { render } from 'react-dom';
import { ReactiveVar } from 'meteor/reactive-var';

import TrackerReact from 'meteor/ultimatejs:tracker-react';

import TaskForm from './TaskForm.jsx';
import TaskSingle from './TaskSingle.jsx';
import AccountUi from './AccountUi.jsx';

import { Tasks } from "../collections/tasks.js";

import './index.html';


Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById('react-view'));
});

Meteor.subscribe('tasks');

export default class App extends TrackerReact(Component) {

	/*constructor(){
		super();
		this.state = {
			subscription: {
				tasks: Meteor.subscribe('tasks');
			}
		}
	}*/

	/*
	For stop Subscription
	componentWillUnmount(){
		this.state.subscription.tasks.stop();
	} */

	taskList(){
		return Tasks.find({}, { sort: { createdAt: -1 } }).fetch();
	}

	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-3"></div>
					<div className="col-sm-6">
						<div className="">
							<div className="pull-left"><h3>My Task</h3></div>
							<div className="pull-right"><AccountUi /></div>
							<div className="clearfix"></div>
						</div>
						<TaskForm />
				        <div id="task-list">
				        	<ul className="list-group">
				        		{ this.taskList().map( (tasks) => {
				        			return <TaskSingle key={tasks._id} tasks={tasks} />
				        		})}
				        	</ul>
				        </div>
					</div>
					<div className="col-sm-3"></div>
				</div>
			</div>
		);
	}

}



