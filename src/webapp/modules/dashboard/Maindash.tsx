import React from 'react'
import Header from './components/header';
import HeaderButtons from './components/headerButtons';
import Myticket from './components/Myticket';
import Events from './components/events';
const Maindash:React.FC = () => {
  return (
    <div style={{padding:'1.5rem'}}>
        <Header/>
        <HeaderButtons/>
        <Myticket/>
        {/* <Events/> */}
    </div>
  )
}

export default Maindash;