import React from 'react'
import { Form, Row, Col , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
 import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../validations/registerValidation';
import type {SignupFormData}  from "../validations/registerValidation";
const RegisterForm:React.FC = () => {
     const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema)
      });
    
      const onSubmit = (data:SignupFormData) => {
        console.log("Register Data:", data);
        // handle login logic here
      };
  return (
      <div style={{
        marginTop:'6rem'
     }}>
    <h1 style={{textAlign:'center' }}>Get Started</h1>
           
               <Row className="justify-content-center" >
          <Col xs={12} sm={10} md={6} lg={4}  >
             <Form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '3rem' }}>
      <Row>
        <Col>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="First name"
            {...register('firstName')}
            isInvalid={!!errors.firstName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName?.message}
          </Form.Control.Feedback>
        </Col>
        <Col>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last name"
            {...register('lastName')}
            isInvalid={!!errors.lastName}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lastName?.message}
          </Form.Control.Feedback>
        </Col>
      </Row>

      <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register('email')}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register('password')}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword')}
          isInvalid={!!errors.confirmPassword}
        />
        <Form.Control.Feedback type="invalid">
          {errors.confirmPassword?.message}
        </Form.Control.Feedback>
      </Form.Group>

       <div className="d-grid">
                <Button 
                variant="primary" 
                type="submit" 
                size="sm"
                style={{ padding: "6px 14px", fontSize: "0.9rem" }}
                >
                  Get Started
                </Button>
              </div> 
    </Form>
          </Col>
          </Row>
           <div style={{marginTop:'2rem'}}></div>
          </div>
 
  );
}

export default RegisterForm;