import React, { Component} from 'react';

export default class TaskSingle extends Component{

	deleteTask(event){
		event.preventDefault();
		Meteor.call('deleteTask', this.props.tasks._id);
	}

	render(){
		return(
			<li className="list-group-item">
				<p><b>{this.props.tasks.task}</b></p> 
				<div className="pull-right">
					<a href="#" onClick={this.deleteTask.bind(this)}><i className="glyphicon glyphicon-remove"></i></a> &nbsp;&nbsp;
					<a href="#"><i className="glyphicon glyphicon-pencil"></i></a>
				</div>
				{this.props.tasks.createdAt.toString()}
			</li>
		);
	}

}