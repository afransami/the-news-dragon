
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container className="mx-auto w-50">
        <h3>Please Register</h3>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and Conditions" />
        </Form.Group>
        <Button className='w-' variant="primary" type="submit">
          Register
        </Button><br />
        <Form.Text className="text-secondary">            
        Already have an account? <Link to='/login'>Login</Link>
            
          </Form.Text>
        <Form.Text className="text-danger">
            
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;<h1>This is register</h1>