import React from 'react'
import Header from './components/header';
import HeaderButtons from './components/headerButtons';
const Maindash:React.FC = () => {
  return (
    <div style={{paddingLeft:'2rem' , paddingRight:'2rem'}}>
        <Header/>
        <HeaderButtons/>
    </div>
  )
}

export default Maindash;