import { PRODUCT_STATUS, ADD_PRODUCT } from "./action"


 



const init_state={

    product_status:false,
    product:[]



}



export const Productreducer=(store=init_state,{type,payload})=>{

  switch (type) {
      case PRODUCT_STATUS:
          
          return {...store,product_status:payload}
  
          case ADD_PRODUCT:
              return {...store,product:payload}
      default:
         return store
  }



}