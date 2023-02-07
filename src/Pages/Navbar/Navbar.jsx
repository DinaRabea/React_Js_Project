import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LanguageContext } from "../../Context/LangContext"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useDispatch ,useSelector} from "react-redux";
import Cart from "../../Component/Cart";

function Navbar(){
    const {theme, setTheme}=useContext(LanguageContext)
    const Count=useSelector((state)=>state.Movies.length)
    const dispatch=useDispatch()

    useEffect(() => {
        const element = document.getElementById('box');
        element.textContent=Count
      }, [Count]);
    return(
        <>
         <nav className="navbar navbar-expand-lg bg-black">
          <div className="container text-center position-relative">
            <Link className="navbar-brand text-light" to="/">Movies</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="Login">Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="Cart">Fav</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="Regist">Registration</Link>
                </li>
                <ul className="position-absolute bottom-0 end-0" >
                <li className="nav-item ps-2"> 
                    <input className=" " type={"checkbox"}  checked={theme === 'dark'} onChange={(e) => {setTheme(e.target.checked ? 'dark' : 'light')}}/>
                    <label className="  fs-4 text-light"><i className="fa-sharp fa-solid fa-lightbulb text-light fs-3"></i></label>
                    <Cart />
                </li> 
                </ul>
               
            </ul>
            </div>
        </div>
    </nav>
        </>
    )
}
export default Navbar