import React from 'react';
import WishlistCard from './WishlistCard.js';
import axios from 'axios';

export default class Wishlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			wishlistItems: []
		};
		this.url = 'http://localhost:3001/meComm/userItems';
		this.sampleData = {
		    "_id": {
		        "$oid": "5a824c86734d1d1523da28bc"
		    },
		    "items": {
		        "item_1": "Xbox One X",
		        "item_2": "Necklace"
		    }
		}
		
		var keys = Object.keys(this.sampleData.items);
		for (var i = 0; i < keys.length; i++) {
			this.state.wishlistItems.push(<WishlistCard key={keys[i]} cardItem={this.sampleData.items[keys[i]]} />);
		}
		this.state.wishlistItems.push(<NewCard key="newCard" onClick={() => this.addWishlistItem()} />);
		

		//this.loadWishlistItemsFromServer();
	}
	loadWishlistItemsFromServer() {
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
			<div className="row wishlist">
				{this.state.wishlistItems}
			</div>
		);
	}
}
class NewCard extends React.Component{
	render(){
		return (
			<div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wishlist-card-column">
				<div className="wishlist-card new-wishlist-card">
					<i className="fa fa-plus-circle fa-4" aria-hidden="true" onClick={this.props.onClick}></i>
				</div>
			</div>
		);
	}
}