import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function form() {
    return (
    <Form>
        <Form.Group className="row mb-3" controlId="formBasicName">
            <Form.Label className='col-sm-12 col-4'>Name</Form.Label>
            <Form.Control className='col-sm-12 col-8' type="name" placeholder="Enter name" />
        </Form.Group>
      
      <Form.Group className="row mb-3" controlId="formBasicGender">
        <Form.Label className='col-sm-12 col-4'>Gender</Form.Label>
        <Form.Control className='col-sm-12 col-8' type="gender"/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="row mb-3" controlId="formBasicEmail">
        <Form.Label className='col-sm-12 col-4'>Email address</Form.Label>
        <Form.Control className='col-sm-12 col-8' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      
      <Form.Group className="row mb-3" controlId="formBasicMobile">
        <Form.Label className='col-sm-12 col-4'>Mobile</Form.Label>
        <Form.Control className='col-sm-12 col-8' type="number" placeholder="+266 67156614" />
      </Form.Group>

      <Form.Group className="row mb-3" controlId="formBasicCustomerID">
        <Form.Label className='col-sm-12 col-4'>Customer ID</Form.Label>
        <Form.Control className='col-sm-12 col-8' type="text" placeholder="**********4" />
      </Form.Group>
      <Form.Group className="row mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Cancel
      </Button>
      <Button variant="success" type="submit">
        Save
      </Button>
    </Form>
    )
}