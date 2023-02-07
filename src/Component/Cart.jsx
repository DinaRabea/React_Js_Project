import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from "react-router-dom";
function Cart(){

    return(<>
      <Link to="Cart">
      <label className="  fs-6 text-warning ms-3 pt-3"><i class="fa-shopping-cart fa-solid fa-lightbulb text-aerning fs-4"id="box"></i></label>
      </Link>
    </>)
}
export default Cart