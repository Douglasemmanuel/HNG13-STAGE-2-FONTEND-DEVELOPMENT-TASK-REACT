import React from 'react'
import RegisterForm from '../modules/auth/components/registerform';
import Header from '../../website/component/Header';
import Footer from '../../website/component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const RegisterScreen:React.FC = () => {
  return (
     <div className="d-flex flex-column min-vh-100">
          <main className="flex-grow-1">
            <Header/>
            <div style={{marginLeft:"1rem" , marginRight:'1rem'}}>
           <RegisterForm/>
           </div>
          </main>
          <Footer />
        </div>
  
  )
}

export default RegisterScreen ;