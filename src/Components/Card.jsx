import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"


import { getproduct } from "../Redux/Product/action"




export const Card=()=>{

const data=useSelector((store)=>store.product.product)
const dispatch=useDispatch()

console.log(data)

useEffect(
    ()=>{    dispatch(getproduct());
        
    }

,[])



return(
<>
{data.map((e)=><div><img src={e.img} alt="" /><div>{e.name}</div></div>)}

</>

)

}