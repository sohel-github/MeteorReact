import { Meteor } from 'meteor/meteor';

import '../collections/tasks.js';
import { Tasks } from "../collections/tasks.js";

Meteor.startup(() => {
  // code to run on server at startup
  Meteor.publish('tasks', function(){
  	return Tasks.find({user: this.userId});
  });

});


Meteor.methods({

	addTask(task){

		if(!Meteor.userId()){
			throw new Meteor.Error('Not Authorized');
		}

		Tasks.insert({
			task: task,
			createdAt: new Date(),
			user: Meteor.userId()
		});
	},

	deleteTask(id){
		Tasks.remove(id);
	}

});
