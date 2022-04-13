import { useState } from "react"
import { useDispatch } from "react-redux"

import { register } from "../Redux/Login/action"


export const Register=()=>{
const [name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const dispatch=useDispatch()
 

function registerhandler(){

  dispatch(register({username:name,email:email,password:password}))

}

return (

<div>


<input type="text"placeholder="name"  onChange={(e)=>{setname(e.target.value)}}/>
<input type="text" placeholder="emailaddress" onChange={(e)=>{setemail(e.target.value)}}/>
<input type="text" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}/>
<button disabled={!name||!email||!password} onClick={registerhandler}>Register</button>
</div>

)

}