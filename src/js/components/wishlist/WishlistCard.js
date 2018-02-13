import React from 'react';
export default class WishlistCard extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cardItem: this.props.cardItem
		}
	}
	render(){
		return (
			<div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 wishlist-card-column">
				<div className="card">{this.state.cardItem}</div>
			</div>
		);
	}
}