import React from 'react'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
const Loginform:React.FC = () => {
  return (
     <div style={{
        marginTop:'10rem'
     }}>
        <h1 style={{textAlign:'center' }}>Login-Screen</h1>
        <div style={{marginTop:'2rem'}}></div>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
     </div>
  )
}

export default Loginform