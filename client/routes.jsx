import React from 'react';
import {mount} from 'react-mounter';

import { MainLayout } from './layout/MainLayout.jsx';
import App from './App.jsx';
import About from './About.jsx';

FlowRouter.route('/', {
	action(){
		mount( MainLayout, {
			content: (<App />)
		})
	}
});

FlowRouter.route('/about', {
	action(){
		mount( MainLayout, {
			content: (<About />)
		})
	}
});