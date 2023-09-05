import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

export class Contract extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contractType: 'Tel.',
      message: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = (event) => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };

  render() {
    document.title = 'Contract';
    return (
      <div className='container'>
        <div
          className='row row-content'
          style={{ paddingLeft: '20px', textAlign: 'left' }}>
          <div className='col-12'>
            <h1>Send us feedback</h1>
          </div>
          <div className='col-12 col-md-7'>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor='firstname' md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type='text'
                    name='firstname'
                    value={this.state.firstname}
                    placeholder='First Name'
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='lastname' md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type='text'
                    name='lastname'
                    value={this.state.lastname}
                    placeholder='Last Name'
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='telnum' md={2}>
                  Contract Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type='tel'
                    name='telnum'
                    value={this.state.telnum}
                    placeholder='Tel. Number'
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='email' md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type='email'
                    name='email'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <input
                        type='checkbox'
                        name='agree'
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />
                      <strong>May We contract you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type='select'
                    name='contractType'
                    value={this.state.contractType}
                    onChange={this.handleInputChange}>
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='message' md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type='textarea'
                    name='message'
                    value={this.state.message}
                    rows='12'
                    onChange={this.handleInputChange}></Input>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type='submit' color='primary'>
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contract;
