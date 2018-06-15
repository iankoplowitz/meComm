import React from 'react';
import '../../../css/wishlist.css';
import WishlistCard from './WishlistCard.js';
import Button from '../utils/Button.js';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
var apiEndpoint = 'http://192.168.1.183:3001/meComm';


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
 		axios.get(apiEndpoint + '/userItems')
 			.then(res => {
 				var withlistItemObjects = [];
				for (var i = res.data.length - 1; i >= 0; i--) {
					withlistItemObjects.push(<WishlistCard key={res.data[i]._id} cardKey={res.data[i]._id} cardItem={res.data[i].name} />);
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
  		console.log("submit");
  		var newItemFromInput = document.getElementById('newItemInput').value;
  		axios.post(apiEndpoint + '/addUserItem', {'name': newItemFromInput})
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
	          			<form onSubmit={this.submitNewItem}>
	          				<div className="row form-row">
	          					<div className="col-md-12">
	          						<input autoFocus="autofocus" type='text' placeholder='Enter your new wishlist item...' id="newItemInput" autoComplete="off"/>
	          					</div>
	          				</div>	          				
	          			</form>
	          			<div className="row">
	          				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 form-submit-container">
	          					<Button text="Submit" callback={this.submitNewItem} />	          			
	          				</div>
	          			</div>
	        		</Modal>
				</div>
			</div>
		);
	}
}