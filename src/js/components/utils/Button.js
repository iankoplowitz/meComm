import React from 'react';

export default class Button extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			buttonText: this.props.text
		};
	}
	render(){
		return (
			<div className="button" onClick={this.props.callback}>
  				{this.state.buttonText}
  			</div>
		);
	}
}