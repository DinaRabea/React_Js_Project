import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import BreadCrum from "../../Component/BreadCrum";
function Show(props){

 
   
    const [show,setShow]=useState({})
    const params = useParams()
    const Cid = params.id
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${Cid}`,{
            params: {
    
                api_key: "9b743af1d4fde1d65af33c40dcccce87"
            }
            })
        .then((movie) => setShow(movie.data))
        .catch((err) => console.log(err))
    },[])
 
    return(
        <>
        <BreadCrum  value2={show.title}  ele={show}/>

          <div className="row">
            <div className="col-md-6">
               <div className="item1 pt-3 w-100 position-relative ">
                  <img className=""  style={{width:"500px" , height:"500px"}} src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} />
      
               </div>
            </div>
            <div className="col-md-6 pt-5">
              <div className="item2 w-100 text-center text-secondary">
                <h2>{show.title}</h2>
                <p>{show.overview}</p>
                <p className="btn btn-warning text-secondary ">{show.vote_average}</p>
              </div>
              <div className="row">
                <div className="col-md-6">
                        <p className="ps-5 text-secondary">original_language: {show.original_language}</p>
                </div>
                <div className="col-md-6">
                        <p className="ps-5 text-secondary">original_language: {show.original_title}</p>
                </div>
              </div>
              </div>
        
            </div>
          
                 
        </>
    )
}
export default Show