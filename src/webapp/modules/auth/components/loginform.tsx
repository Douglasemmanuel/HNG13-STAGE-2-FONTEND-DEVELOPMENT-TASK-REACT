import React from 'react'
import { Form, Row, Col , Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
 import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema} from "../validations/loginValidation";
import type { LoginFormData }  from "../validations/loginValidation";
import { useNavigate } from 'react-router-dom';
import {  toast } from "react-toastify";
const Loginform:React.FC = () => {
     const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });
  const navigate = useNavigate() ;
 const onSubmit = (data: LoginFormData) => {
    // If there are no errors, trigger a success toast
    toast.success("🎉 Login successful! Welcome back.", {
      position: "top-center",
      autoClose: 2500,
       style:{
         width: "500px",          
    maxWidth: "90%",
      }
    });
    console.log("Login Data:", data);
    reset();
    navigate('/dashboard')
  };

  // If validation fails, show a toast error for any schema violation
  const onError = () => {
    // Show only one toast error at a time
    const firstError =
      errors.email?.message ||
      errors.password?.message ||
      "Please check your inputs";

    toast.error(`${firstError}`, {
      position: "top-center",
      autoClose: 2500,
      style:{
         width: "400px",          
    maxWidth: "90%",
      }
    });
  };
  return (
     <div style={{
        marginTop:'6rem'
     }}>
        <h1 style={{textAlign:'center' }}>Login-Screen</h1>
       
           <Row className="justify-content-center" >
      <Col xs={12} sm={10} md={6} lg={4}  >
        <Form onSubmit={handleSubmit(onSubmit , onError)}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
            {...register("email")}
            isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            placeholder="Password"
             {...register("password")}
                isInvalid={!!errors.password}
             />
               <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
          </Form.Group>
           <div className="d-grid">
          <Button 
          variant="primary" 
          type="submit" 
          size="sm"
          style={{ padding: "6px 14px", fontSize: "0.9rem" }}
          >
            Login
          </Button>
        </div> 
        </Form>
      </Col>
    </Row>
     <div style={{marginTop:'2rem'}}></div>
     </div>
  )
}

export default Loginform