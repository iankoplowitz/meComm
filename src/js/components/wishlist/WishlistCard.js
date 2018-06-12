import React from 'react';
import Button from '../utils/Button.js';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
var apiEndpoint = 'http://192.168.1.183:3001/meComm';
export default class WishlistCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cardItem: this.props.cardItem,
			cardKey: this.props.cardKey,
			modal: false
		}
		this.toggle = this.toggle.bind(this);
		this.removeWishlistItem = this.removeWishlistItem.bind(this);
	}
	toggle() {
    	this.setState({
      		modal: !this.state.modal
    	});
  	}
  	removeWishlistItem(){
  		console.log(this.state.cardKey);

		axios.delete(apiEndpoint + '/removeUserItem/' + this.state.cardKey)
	      .then(res => {
	        console.log('Card deleted');
	        window.location.reload()
	      })
	      .catch(err => {
	        console.error(err);
	      });
  	}
	render(){
		return (
			
				<div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wishlist-card-column">
					<div className="card" onClick={this.toggle}>{this.state.cardItem}</div>
					<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
		      			<ModalHeader toggle={this.toggle}>Item: {this.state.cardItem}</ModalHeader>
		      			<ModalFooter>
		      				<Button text="Delete" color="alert" callback={this.removeWishlistItem}/>
		      			</ModalFooter>
		    		</Modal>
				</div>
				
			
		);
	}
}