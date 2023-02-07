import React from "react";
import { Link } from "react-router-dom";
import Home from "../Pages/Home/Home";
import   "./Bread.css";
import { useState } from "react";
import { Dispatch } from "redux";
import { AddtoCart, Remove } from "../Store/Action/Action";
import { useDispatch } from "react-redux";



function BreadCrum(props){
  const [count,setCount]=useState("1")
  const dispatch=useDispatch()

    const my_selected=props.ele
    const Adding=(e)=>{
      if(e.target.className=="fa-regular fa-star text-light fw-bold fs-3"){
          dispatch(AddtoCart(my_selected,count))
          setCount(parseInt(count)+1)
          e.target.className="fa-regular fa-star text-warning fw-bold fs-3"
      }
    }
 
    return(
        <>
          <nav  aria-label="breadcrumb">
            <ol className="breadcrumb">
                <button  className="btn btn-dark mt-1 me-3"  ><i onClick={(e)=>Adding(e)} className="fa-regular fa-star text-light fw-bold fs-3"></i></button>
                <li className="breadcrumb-item  mt-2"><Link className=" item1 fs-6 fw-bold text-secondary"  to={'/'}>Home</Link></li>
                <li className="breadcrumb-item active mt-2 text-warning fs-6 fw-bold" aria-current="page">{props.value2}</li>
                <li className="breadcrumb-item active mt-2 text-warning fs-6 fw-bold" aria-current="page">{props.value3}</li>

            </ol>
          </nav>
        </>
    )
}
export default BreadCrum