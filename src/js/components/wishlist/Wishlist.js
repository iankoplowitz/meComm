import React from 'react';
import WishlistCard from './WishlistCard.js';
import axios from 'axios';

export default class Wishlist extends React.Component{
	constructor(props){
		console.log("constructor");
		super(props);
		this.state = {
			wishlistItems: []
		};
		this.url = 'http://localhost:3001/meComm/userItems';
		this.loadWishlistItemsFromServer = this.loadWishlistItemsFromServer.bind(this);		
	}
	componentDidMount() {
		console.log("component mounting");
		this.loadWishlistItemsFromServer();
		setInterval(this.loadCommentsFromServer, 2000);
	}
	loadWishlistItemsFromServer() {
		console.log("loading wishlist items");
 		axios.get(this.url)
 			.then(res => {
 				var withlistItemObjects = [];
 				var keys = Object.keys(res.data[0].items);
				console.log(keys);	
				for (var i = 0; i < keys.length; i++) {
					withlistItemObjects.push(<WishlistCard key={keys[i]} cardItem={res.data[0].items[keys[i]]} />);
				}
				withlistItemObjects.push(<NewCard key="newCard" onClick={() => this.addWishlistItem()} />);
 				this.setState({ wishlistItems: withlistItemObjects});
 			})
 	}
	addWishlistItem(){
		var newWishlist = [<WishlistCard />];
		newWishlist.push(this.state.wishlistItems.slice());
		this.setState({
			wishlistItems: newWishlist
		});
	}
	render(){
		console.log("render");
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