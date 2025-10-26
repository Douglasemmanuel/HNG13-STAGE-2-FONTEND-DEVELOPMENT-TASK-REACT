import React from 'react'
import LoginScreen from '../webapp/screens/login_screen';
import RegisterScreen from '../webapp/screens/register_screen';
import HomeScreen from '../website/screen/home_screen';
import CreateTicket from '../webapp/modules/dashboard/createTickets';
import AllTickets from '../webapp/modules/dashboard/AllTickets';
import Activeticket from '../webapp/modules/dashboard/Activeticket';
import Maindash from '../webapp/modules/dashboard/Maindash';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import EditTickets from '../webapp/modules/dashboard/EditTickets';
const Movements:React.FC = () => {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/login' element={<LoginScreen/>}/>
    <Route path='/signup' element={<RegisterScreen/>}/>
    <Route path="/create-ticket" element={<CreateTicket />}/>
     <Route path="/active-ticket" element={<Activeticket />}/>
      <Route path="/all-tickets" element={<AllTickets/>}/>
     <Route path="/dashboard" element={<Maindash />} /> 
      <Route path="/edit-ticket" element={<EditTickets/>}/>
   
    </Routes>
   </Router>
   </>
  )
}

export default Movements ;