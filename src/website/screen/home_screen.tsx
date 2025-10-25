import React from 'react'
import Header from '../component/Header'
import Main from '../component/Main'
import Footer from '../component/Footer'
import Content from '../component/Content' ;
import 'bootstrap/dist/css/bootstrap.min.css';
const HomeScreen:React.FC = () => {
  return (
   
    <div className="d-flex flex-column min-vh-100">
      <main className="flex-grow-1">
         <Header/>
      <Main/>
      <Content/>
      </main>
      <Footer />
    </div>
  )
}

export default HomeScreen