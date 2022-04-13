import logo from './logo.svg';
import './App.css';
import {  Routes, Route,Outlet } from "react-router-dom";
import {Login} from './Components/Login'
import {Register} from './Components/Register';
import "./Components/Card.css"
import { Card } from "./Components/Card"
import { useSelector } from 'react-redux';




function Protect()
{
    const sto=useSelector((store)=>store.login.token)

   return sto?<Outlet/>:<Login/>
    
}




function App() {
 

   


return (
  
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        
         <Route element={<Protect/>}>
         <Route path='/getrestaurent' element={<Card/>} />
         </Route>

</Routes>

)

}

export default App;
