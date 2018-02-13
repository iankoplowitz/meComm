import React from 'react';

export default class PageBody extends React.Component{
	constructor(props) {
	    super(props);
	  }

	render(){
		return (
			<div class="row footer">
				<div class="col-lg-12">
					<div class="row">
						<div class="col-lg-2"></div>
						<div class="col-lg-8">
							{this.props.children}
						</div>
						<div class="col-lg-2"></div>
					</div>
		      	</div>
	      	</div>
		);
	}
}