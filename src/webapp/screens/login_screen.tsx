import React from 'react'
import Loginform from '../modules/auth/components/loginform';
import Header from '../../website/component/Header';
import Footer from '../../website/component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
const LoginScreen:React.FC = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
          <main className="flex-grow-1">
            <Header/>
            <div style={{marginLeft:"1rem" , marginRight:'1rem'}}>
               <Loginform/>
            </div>
          </main>
          <Footer />
        </div>
  )
}

export default LoginScreen ;