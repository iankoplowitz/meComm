import React from 'react';
import '../../../css/signup.css';
import { Col, Button, Form, FormGroup, Input } from 'reactstrap';
import {BrowserRouter as Router} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
var apiEndpoint = 'http://192.168.1.183:3001/meComm/users';
export default withRouter(class Signup extends React.Component{
	constructor(props){
		super(props);
		this.onSubmit = this.handleSubmit.bind(this);
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: ''
		}
		this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
		this.handleLastNameChange = this.handleLastNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}
	handleFirstNameChange(event){
		this.setState({
			firstName: event.target.value
		})
	}
	handleLastNameChange(event){
		this.setState({
			lastName: event.target.value
		})
	}
	handleEmailChange(event){
		this.setState({
			email: event.target.value
		})
	}
	handlePasswordChange(event){
		this.setState({
			password: event.target.value
		})
	}
	handleSubmit(e) {
		e.preventDefault();
		
	    var serviceCall = fetch(apiEndpoint, { 
	    	method: 'POST',
	    	headers: {
	    		'Accept': 'application/json',
	    		'Content-Type': 'application/json'
	    	},
	    	body: JSON.stringify({
	    		firstName: this.state.firstName,
	    		lastName: this.state.lastName,
	    		email: this.state.email,
	    		password: this.state.password
	    	})
	    })
	    .then(function(response) {
	    	console.log("Successfully created new account!");
	    	console.log(response);
	    	return true;
	    	
	    });

    	if(serviceCall){
    		this.props.history.push('/dashboard');
    	}
}
	render(){
		return (
			<div className="row">
				<div className="col-lg-2"></div>
				<div className="col-lg-8">
					<div className="row">
						<div className="col-md-12">
							<div className="signup-container">

		          				<div className="row form-row">
		          					<div className="col-md-3"></div>
		          					<div className="col-md-6">
		          						<Form onSubmit={this.onSubmit}>
									        <FormGroup row>
									          <Col sm={6}>
									            <Input name="firstName" id="firstName" placeholder="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange}/>
									          </Col>
									          <Col sm={6}>
									            <Input name="lastName" id="LastName" placeholder="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange}/>
									          </Col>
									        </FormGroup>
									        <FormGroup row>								          
									          <Col sm={12}>
									            <Input type="eail" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}/>
									          </Col>
									        </FormGroup>
									        <FormGroup row>								          
									          <Col sm={12}>
									            <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
									          </Col>
									        </FormGroup>
									        
									        <FormGroup check row>
									          <Col sm={12}>
									            <Button>Sign Up!</Button>
									          </Col>
									        </FormGroup>
									      </Form>
		          					</div>
		          					<div className="col-md-6"></div>
		          				</div>	          				

							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-2"></div>
			</div>
		);
	}
})





