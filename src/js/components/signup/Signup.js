import React from 'react';
import '../../../css/login.css';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
export default class Signup extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div className="row">
				<div className="col-md-12">
					<div className="login-container">
						<form>
	          				<div className="row form-row">
	          					<div className="col-md-3"></div>
	          					<div className="col-md-6">
	          						<Form>
								        <FormGroup row>
								          <Col sm={6}>
								            <Input name="firstName" id="firstName" placeholder="First Name" />
								          </Col>
								          <Col sm={6}>
								            <Input name="lastName" id="LastName" placeholder="Last Name" />
								          </Col>
								        </FormGroup>
								        <FormGroup row>								          
								          <Col sm={12}>
								            <Input type="eail" name="email" id="email" placeholder="Email" />
								          </Col>
								        </FormGroup>
								        <FormGroup row>								          
								          <Col sm={12}>
								            <Input type="password" name="password" id="examplePassword" placeholder="Password" />
								          </Col>
								        </FormGroup>
								        
								        <FormGroup check row>
								          <Col sm={12}>
								            <Button>Submit</Button>
								          </Col>
								        </FormGroup>
								      </Form>
	          					</div>
	          					<div className="col-md-6"></div>
	          				</div>	          				
	          			</form>
					</div>
				</div>
			</div>
		);
	}
}





