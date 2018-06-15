import React from 'react';
import { Route } from 'react-router-dom';
import Header from './js/components/shared/Header.js';
import Footer from './js/components/shared/Footer.js';
import Signup from './js/components/signup/Signup.js';
import Wishlist from './js/components/wishlist/Wishlist.js';

const SignupComponent = () => (
	<div>
		<Signup />
	</div>
);

const WishlistComponent = () => (
	<div>
		<Wishlist />
	</div>
);

export default class App extends React.Component{
	render(){
		return(
			<div className="mecomm-container">
				<Header />
				<Route exact path="/" component={SignupComponent} />		
				<Route exact path="/dashboard" component={WishlistComponent} />
				<Footer />
			</div>
		)
	}
}