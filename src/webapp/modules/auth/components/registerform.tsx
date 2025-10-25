import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
const RegisterForm:React.FC = () => {
  return (
     <Form>
        <Row>
        <Col>
         <Form.Label>First Name</Form.Label>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
         <Form.Label>Last Name</Form.Label>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  )
}

export default RegisterForm;