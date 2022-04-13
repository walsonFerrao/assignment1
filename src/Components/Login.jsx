import { useState } from "react"
import { useDispatch } from "react-redux"
import {login,addtoken} from '../Redux/Login/action'
import { useNavigate } from "react-router"


export const Login=()=>{

const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const dispatch=useDispatch()
const navigate=useNavigate()


function handlelogin()
{

        
            fetch('http://localhost:1080/login', {
                method: 'POST', // or 'PUT'
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password}),
              })
              .then(response => response.json())
              .then(data => {
                dispatch(addtoken(data.token))
                console.log('Success:', data);
                navigate("/getrestaurent")
              })
              .catch((error) => {
                console.error('Error:', error);
              });
        
          
        
        

}




return(
<div>
<input type="text" placeholder="email" onChange={(e)=>{setemail(e.target.value)}}/>
<input type="text" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}/>
<button   disabled={!email||!password} onClick={handlelogin}>login</button>


if dont have a account have an account  <a href="/signup">click here to signup</a>

</div>




)
}