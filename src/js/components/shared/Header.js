import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
export default class Header extends React.Component{
	constructor(props) {
	    super(props);

	    this.toggleNavbar = this.toggleNavbar.bind(this);
	    this.state = {
	      collapsed: true
	    };
	  }

	  toggleNavbar() {
	    this.setState({
	      collapsed: !this.state.collapsed
	    });
	  }
	render(){
		return (
			<div className="navbar-container">
	        	<Navbar color="faded" light>
	          		<NavbarBrand href="/" className="mr-auto">meComm</NavbarBrand>
	          		
	          		
	        	</Navbar>
	      	</div>
		);
	}
}