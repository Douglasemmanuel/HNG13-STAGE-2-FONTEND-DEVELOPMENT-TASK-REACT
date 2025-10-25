import React from 'react'
import { Form, Row, Col , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
 import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../validations/registerValidation';
import type {SignupFormData}  from "../validations/registerValidation";
import {  toast } from "react-toastify";
import { useNavigate , Link } from 'react-router-dom';
import { useSignup } from '../hooks/register_hooks';
import { useState } from 'react';
const RegisterForm:React.FC = () => {
     const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema)
      });
      const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { signup } = useSignup();
// State for field errors
const [errorsState, setErrorsState] = useState<Partial<SignupFormData>>({});

const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload

    // Reset errors
    setErrorsState({});

    const data: SignupFormData = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
    };

    // Manual validation
    const newErrors: Partial<SignupFormData> = {};
    if (!firstName) newErrors.firstName = "First Name is required";
    if (!lastName) newErrors.lastName = "Last Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";

    if (Object.keys(newErrors).length > 0) {
        setErrorsState(newErrors); // show errors under the fields
        return;
    }

    // Call signup hook
    const result = signup(data);

    if (result.success) {
        toast.success("🎉 Registration Successful.", {
            position: "top-center",
            autoClose: 2500,
            style: { width: "500px", maxWidth: "90%" },
        });

        console.log("Form Data:", data);

        // Reset state
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrorsState({});

        navigate("/login");
    } else {
        toast.warn("User With this email Exist Already", {
            position: "top-center",
            autoClose: 2500,
            style: { width: "400px", maxWidth: "90%" },
        });
    }
};


        // const onError = () => {
        //     // Show only one toast error at a time
        //     const firstError =
        //      errors.firstName?.message ||
        //       errors.lastName?.message ||
        //       errors.email?.message ||
        //        errors.confirmPassword?.message ||
        //       errors.password?.message ||
        //       "Please check your inputs";
        
        //     toast.error(`${firstError}`, {
        //       position: "top-center",
        //       autoClose: 2500,
        //       style:{
        //          width: "400px",          
        //     maxWidth: "90%",
        //       }
        //     });
        //   };
  return (
      <div style={{
        marginTop:'6rem'
     }}>
    <h1 style={{textAlign:'center' }}>Get Started</h1>
           
               <Row className="justify-content-center" >
          <Col xs={12} sm={10} md={6} lg={4}  >
             <Form onSubmit={handleFormSubmit}style={{ marginTop: '3rem' }}>
      <Row>
        <Col xs={11} sm={6}>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            placeholder="First name"
            {...register('firstName')}
            isInvalid={!!errorsState.firstName}
              value={firstName}
               onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errorsState.firstName}
          </Form.Control.Feedback>
        </Col>
        <Col xs={11} sm={6} className="mt-2 mt-sm-0">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            placeholder="Last name"
            {...register('lastName')}
            isInvalid={!!errorsState.lastName}
                value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            {errorsState.lastName}
          </Form.Control.Feedback>
        </Col>
      </Row>
     <Col xs={11} sm={12}>
       <Form.Group className="mb-3 mt-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register('email')}
          isInvalid={!!errorsState.email}
            value={email}
                onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {errorsState.email}
        </Form.Control.Feedback>
      </Form.Group>
     </Col>
     
 <Col xs={11} sm={12}>
         <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          {...register('password')}
          isInvalid={!!errorsState.password}
          value={password}
                onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {errorsState.password}
        </Form.Control.Feedback>
      </Form.Group>
     </Col>
   
 <Col xs={11} sm={12}>
        <Form.Group className="mb-3" controlId="formGroupConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword')}
          isInvalid={!!errorsState.confirmPassword}
          value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid">
          {errorsState.confirmPassword}
        </Form.Control.Feedback>
      </Form.Group>
     </Col>
    
     <Row >
  <Col xs={11} sm={12} md={12}>
    <Button 
      variant="primary" 
      type="submit" 
      size="sm"
      className="w-100 py-2"
      style={{ fontSize: "0.95rem" }}
    >
      Get Started
    </Button>
  </Col>
</Row>


       
    </Form>
     <p style={{ marginTop: "1rem", textAlign: "center" }}>
        Already have  an account?{" "}
        <Link to="/login" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Login
        </Link>
      </p>
          </Col>
          </Row>
           <div style={{marginTop:'2rem'}}></div>
          </div>
 
  );
}

export default RegisterForm;