import axios from "axios"

export const PRODUCT_STATUS="PRODUCT_STATUS"
export const ADD_PRODUCT="ADD_PRODUCT"



export const product_status=(payload)=>({type:PRODUCT_STATUS,payload})
export const add_product=(payload)=>({type:ADD_PRODUCT,payload})




export const getproduct=()=>(dispatch)=>{

    dispatch(product_status("loading"))

    axios.get("http://localhost:3004/restaurent")
    .then( (res)=>{dispatch(add_product(res.data))})
    .catch((err)=>console.log(err,"errrrr"))

}






