import axios from "axios"
import React from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

function Search(){
    const [Keyword,setKeyword]=useState("")
    const params=useParams;
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/`,{
            params: {
    
                api_key: "9b743af1d4fde1d65af33c40dcccce87",
                query: Keyword
            }
            },[Keyword])
            .then((data)=> setKeyword(data.results))
            .error((err)=>console.log(err))
        })
    return(
        <>
        </>
    )
}
export default Search