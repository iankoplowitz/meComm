import ReactDOM from 'react-dom';
import React from 'react';
import './assets/css/bootstrap.min.css';
import './css/index.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import Header from './js/components/shared/Header.js';
import Footer from './js/components/shared/Footer.js';
import Wishlist from './js/components/wishlist/Wishlist.js';
import Signup from './js/components/signup/Signup.js';

ReactDOM.render(
	<div className="wishlist-container">
		<Header />
		<div className="row">
			<div className="col-lg-2"></div>
			<div className="col-lg-8">
				<Wishlist />
			</div>
			<div className="col-lg-2"></div>
  		</div>
  		<Footer />
  	</div>,
  	document.getElementById('root')
);