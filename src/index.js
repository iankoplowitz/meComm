
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/css/bootstrap.min.css';
import './css/index.css';
import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import WishlistCard from './js/components/wishlist/WishlistCard.js';
import Header from './js/components/shared/Header.js';
import Footer from './js/components/shared/Footer.js';
import axios from 'axios';

class Wishlist extends React.Component{
	constructor(props){
		super(props);
		this.url = 'http://localhost:3001/meComm/userItems';
		this.state = {
			wishlistItems: [<NewCard onClick={() => this.addWishlistItem()} />]
		};
		this.loadCommentsFromServer();
	}
	loadCommentsFromServer() {
 		axios.get(this.url)
 			.then(res => {
 				console.log(res);
 			})
 	}
	addWishlistItem(){
		var newWishlist = [<WishlistCard />];
		newWishlist.push(this.state.wishlistItems.slice());
		this.setState({
			wishlistItems: newWishlist
		})
	}
	render(){
		return (
			<div class="row wishlist">
				{this.state.wishlistItems}
			</div>
		);
	}
}

class NewCard extends React.Component{
	render(){
		return (
			<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 wishlist-card-column">
				<div class="wishlist-card new-wishlist-card">
					<i class="fa fa-plus-circle fa-4" aria-hidden="true" onClick={this.props.onClick}></i>
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<div class="wishlist-container">
		<Header />
		<div class="row">
			<div class="col-lg-2"></div>
			<div class="col-lg-8">
				<Wishlist />
			</div>
			<div class="col-lg-2"></div>
  		</div>
  		<Footer />
  	</div>,
  	document.getElementById('root')
);