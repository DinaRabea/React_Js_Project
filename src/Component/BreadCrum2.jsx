import React from "react";
import { Link } from "react-router-dom";


function BreadCrum(props){
    return(
        <>
          <nav  aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item  mt-2"><Link className=" item1 fs-6 fw-bold text-secondary"  to={'/'}>Home</Link></li>
                <li className="breadcrumb-item active mt-2 text-warning fs-6 fw-bold" aria-current="page"><Link className=" item1 fs-6 fw-bold text-secondary" to={'show/:id'}>{props.value2}</Link></li>
                <li className="breadcrumb-item active mt-2 text-warning fs-6 fw-bold" aria-current="page">{props.value3}</li>

            </ol>
          </nav>
        </>
    )
}
export default BreadCrum