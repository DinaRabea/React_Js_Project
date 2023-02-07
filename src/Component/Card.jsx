import React, { useState } from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Card(props){
  
  

    return(
        <>
          <div className="mv gy-2 bg-black text-light text-center position-relative">
           
                   <img className="w-100 imge" src={`https://image.tmdb.org/t/p/w500${props.images}`} /> 
                   <h6 className="pb-3" style={{textAlign:"center" , height:"50px"}}>{props.titles}</h6>
                   <p className="btn btn-warning">{props.votes}</p>
         </div>
        
        </>
    )
}
export default Card