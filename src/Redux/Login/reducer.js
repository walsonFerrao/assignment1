

import { LOGINDETAILS,TOKEN } from "./action";


const  init_state={

loginstatus:false,
token:false

}

export const Loginreducer=(store=init_state,action)=>{

switch (action.type) {
    case LOGINDETAILS:
        return {...store,logindetails:action.payload}
       case TOKEN:
           return {...store,token:action.payload}

    default:
      return  store;
}




}