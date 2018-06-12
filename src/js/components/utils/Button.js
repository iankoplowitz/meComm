import React from 'react';

export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			buttonText: this.props.text,
			styles: 'button ' + this.props.className
		};
	}
	render(){
		return (
			<div className={this.state.styles} onClick={this.props.callback}>
  				{this.state.buttonText}
  			</div>
		);
	}
}