import React, { Component} from 'react';
import { Tasks } from "../collections/tasks.js";

export default class TaskForm extends Component{

	addTask(event){
		event.preventDefault();
		var task = event.target.task.value;
		Meteor.call('addTask', task); 
		event.target.task.value = '';
	}

	render(){
		return(
			<form className="new-task" onSubmit={this.addTask.bind(this)}>
	            <input
	              className="form-control bottom"	
	              type="text"
	              name="task"
	              placeholder="Type tasks" />
	        </form>
		);
	}

}