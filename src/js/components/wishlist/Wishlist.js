import React from 'react';
import WishlistCard from './WishlistCard.js';
import axios from 'axios';
import { Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
var apiEndpoint = 'http://192.168.1.183:3001/meComm/userItems';

export default class Wishlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			wishlistItems: []
		};
		this.loadWishlistItemsFromServer = this.loadWishlistItemsFromServer.bind(this);		
	}
	componentDidMount() {
		this.loadWishlistItemsFromServer();
		setInterval(this.loadCommentsFromServer, 2000);
	}
	loadWishlistItemsFromServer() {
 		axios.get(apiEndpoint)
 			.then(res => {
 				var withlistItemObjects = [];
				for (var i = 0; i < res.data.length; i++) {
					withlistItemObjects.push(<WishlistCard key={res.data[i]._id} cardItem={res.data[i].name} />);
				}
				withlistItemObjects.push(<NewCard key="newCard" actionFunction={this.loadWishlistItemsFromServer} onClick={() => this.addWishlistItem()} />);
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
		return (
			<div className="row wishlist">
				{this.state.wishlistItems}	
			</div>
		);
	}
}
class NewCard extends React.Component{
	constructor(props){
		super(props);
		this.callbackFunction = props.actionFunction;
		this.state = {
			modal: false,
			itemName: ''
		}
		this.toggle = this.toggle.bind(this);
	}
	toggle() {
    	this.setState({
      		modal: !this.state.modal
    	});
  	}
  	submitNewItem(){
  		//console.log(document.getElementById('newItemInput').value);
  		var newItemFromInput = document.getElementById('newItemInput').value;
  		axios.post(apiEndpoint, {'name': newItemFromInput})
  		.then(
  			window.location.reload()
  		)
		.catch(err => {
			console.error(err);
		});
  	}
	render(){
		return (
			<div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wishlist-card-column">
				<div className="wishlist-card new-wishlist-card">
					<i className="fa fa-plus fa-4 btn btn-primary" data-toggle="modal" aria-hidden="true" onClick={this.toggle}></i>

	        		<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
	          			<ModalHeader toggle={this.toggle}>Add an item to your wishlist!</ModalHeader>
	          			<form>
	          				<input
				                type='text'
				                placeholder='Update name...'
				                id="newItemInput"/>
	          			</form>
	          			<button type="button" onClick={this.submitNewItem}>Click Me!</button>
	        		</Modal>
				</div>
			</div>
		);
	}
}