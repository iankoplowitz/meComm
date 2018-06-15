import ReactDOM from 'react-dom';
import React from 'react';
import './assets/css/bootstrap.min.css';
import './css/index.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import {BrowserRouter as Router, Root, Route} from 'react-router-dom';
import App from './App';

ReactDOM.render(
	<Router>
		<App />
	</Router>
	
  	,document.getElementById('root'));

