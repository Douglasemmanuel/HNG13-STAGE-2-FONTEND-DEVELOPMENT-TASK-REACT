import React from 'react'
import LoginScreen from '../webapp/screens/login_screen';
import RegisterScreen from '../webapp/screens/register_screen';
import HomeScreen from '../website/screen/home_screen';
import Dashboard from '../webapp/modules/dashboard/dashboard';
import Maindash from '../webapp/modules/dashboard/Maindash';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom'
const Movements:React.FC = () => {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={<HomeScreen/>}/>
    <Route path='/login' element={<LoginScreen/>}/>
    <Route path='/signup' element={<RegisterScreen/>}/>
    <Route path="/dashboard" element={<Dashboard />}>
     <Route index element={<Maindash />} /> 
    </Route>
    </Routes>
   </Router>
   </>
  )
}

export default Movements ;