import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import FavorietPage from "../Component/FavorietPage";
import { Remove } from "../Store/Action/Action";
import { useDispatch } from "react-redux";
import BreadCrum2 from "../Component/BreadCrum2";
import Show from "./Show/Show";
function Cart(){

    
        const dispatch=useDispatch()
        const Removing=(index)=>{
            dispatch(Remove(index))
            
        }

           
const MovieItem=useSelector((state)=>state.Movies)
const [movies,setMovies]=useState([])

useEffect(() => {
   setMovies(MovieItem)
  }, [MovieItem.length]);
  
  return(
    <>
    <BreadCrum2 value2={"Show"} value3={"Cart"} />

    <div className="container">
           <div className="row p-5"> 
           {movies.map((ele,index)=>{
            return(
                <div className="col-sm-12 col-md-6 col-lg-4 mb-3 "  key={ele.movie.id}>
                    <FavorietPage  index={index} titles={ele.movie.original_title}  id={ele.movie.id}  images={`https://image.tmdb.org/t/p/w500/${ele.movie.poster_path}`}  />
                </div>
            )
           })}
           </div>
    </div>
    </>
 
)
}
export default Cart