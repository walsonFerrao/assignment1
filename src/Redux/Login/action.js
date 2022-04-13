import { useNavigate } from "react-router"

export const LOGINDETAILS="LOGINDETAILS"
export const TOKEN="TOKEN"



// action creator


export const logindetails=(payload)=>({type:LOGINDETAILS,payload})
export const addtoken=(payload)=>({type:TOKEN,payload})



export const register=(payload)=>(dispatch)=>{

 


    fetch('http://localhost:1080/register', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(response => response.json())
      .then(data => {
       
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  

}







