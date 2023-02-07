import axios from "axios";
import { Dropdown } from "bootstrap";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../Component/Card";

import "./Home.css";



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~calling Home Function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
function Home(){
    const [myMovies , getMovies]=useState([])
    useEffect(()=>{
        let movies= axios.get("https://api.themoviedb.org/3/movie/popular?api_key=9b743af1d4fde1d65af33c40dcccce87")
        .then((movie)=>getMovies(movie.data.results))
        .catch((err)=>console.log(err))
    },[])
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Search by name~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    const [Keyword,setKeyword]=useState("")
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/search/movie",{
            params: {
                api_key: "9b743af1d4fde1d65af33c40dcccce87",
                query: Keyword
            }
            })
            .then((data)=> getMovies(data.data.results))
            .catch((err)=>console.log(err))
        },[Keyword])

    const search=(e)=>{
      setKeyword(e.target.value) 
    }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pagination ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
const [Pagination,setPagination]=useState("1")
useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular",{
        params: {
            api_key: "9b743af1d4fde1d65af33c40dcccce87",
            Page: Pagination
        }
        })
        .then((data)=> setPagination(data.data.results))
        .catch((err)=>console.log(err))
    },[Pagination])

const pagin=(e)=>{
  setKeyword(e.target.value) 
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~calling~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//


return(
        <>
         
          <div className="row">
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ search ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`*/}

            <input onChange={(e)=>search(e)}  className="text-black bg-white btn btn-warning mt-2" type="search" placeholder='search by name' />
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ show ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`*/}
          
            {myMovies.map((movie,index)=>{ 
                return  <div key={index} className="col-md-3 pt-2">
                    <div className="mv gy-2">
                        <Link style={{textDecoration:"none"}} to={`Show/${movie.id}`}><Card images={movie.poster_path} titles={movie.title} votes={movie.vote_average}  /></Link>
                    </div>
                </div>})}
        {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pagination ~~~~~~~~~~~~~~~~~~~~~~~~~~~~`*/}
                <nav aria-label="Page navigation example  ">
                <ul className="pagination justify-content-center align-items-center mt-3">
                <li className="page-item border border-warning active" aria-current="page">
                    <span className="page-link text-dark bg-warning border border-warning" onClick={(e) => pagin(e)}>1</span>
                    </li>
                    <li className="page-item border border-warning"><a className="page-link bg-warning text-dark " href="#" onClick={(e) => pagin(e)}>2</a></li>
                    <li className="page-item border border-warning"><a className="page-link bg-warning text-dark " href="#" onClick={(e) => pagin(e)}>3</a></li>
               </ul>
           </nav>
          </div>
        </>
    )
            
}
export default Home