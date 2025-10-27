import React from 'react'
import { Form, Row, Col , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
 import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema} from "../validations/loginValidation";
import type { LoginFormData }  from "../validations/loginValidation";
import { useNavigate , Link } from 'react-router-dom';
import {  toast } from "react-toastify";
import { useLogin } from '../hooks/login_hooks';
import { useState } from 'react';
import { useCurrentUser } from '../hooks/user_hooks';
const Loginform:React.FC = () => {
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });
      const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
 
   const navigate = useNavigate();
   const { login } = useLogin();
   const { setCurrentUser } = useCurrentUser();
 // State for field errors
 const [errorsState, setErrorsState] = useState<Partial<LoginFormData>>({});
 
 const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault(); // prevent page reload
 
     // Reset errors
     setErrorsState({});
 
     const data:LoginFormData = {
         email,
         password,
     };
 
     // Manual validation
     const newErrors: Partial<LoginFormData> = {};
     
     if (!email) newErrors.email = "Email is required";
     if (!password) newErrors.password = "Password is required";
    
 
     if (Object.keys(newErrors).length > 0) {
         setErrorsState(newErrors); // show errors under the fields
         return;
     }
 
     // Call signup hook
     const result = login(data);
 
     if (result.success) {
       
         toast.success("🎉 Login Successful.", {
             position: "top-center",
             autoClose: 2500,
             style: { width: "500px", maxWidth: "90%" },
         });
          setCurrentUser(result.user);
          navigate("/dashboard");
         console.log("Form Data:", data);
 
         // Reset state
      
         setEmail("");
         setPassword("");
        
         setErrorsState({});
 
        
     } else {
         toast.error(" Email and Password  dont match", {
             position: "top-center",
             autoClose: 2500,
             style: { width: "400px", maxWidth: "90%" },
         });
     }
 };
 
 

 
  return (
     <div style={{
        marginTop:'6rem'
     }}>
        <h1 style={{textAlign:'center' }}>Login-Screen</h1>
       
           <Row className="justify-content-center" >
      <Col xs={12} sm={10} md={6} lg={4}  >
        <Form onSubmit={handleFormSubmit}>
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
            <Row >
             <Col xs={11} sm={12} md={12}>
               <Button 
                 variant="primary" 
                 type="submit" 
                 size="sm"
                 className="w-100 py-2"
                 style={{ fontSize: "0.95rem" }}
               >
                 Login
               </Button>
             </Col>
           </Row>
        </Form>
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
    Don't have an account?{" "}
    <Link to="/signup" style={{ textDecoration: "none", fontWeight: "bold" }}>
      Sign Up
    </Link>
  </p>

      </Col>
    </Row>
     <div style={{marginTop:'2rem'}}></div>
     </div>
  )
}

export default Loginform