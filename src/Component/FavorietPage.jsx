import { useDispatch, useSelector } from 'react-redux';
import { Remove } from '../Store/Action/Action';
import React from 'react';
function FavorietPage(props) {


    const dispatch=useDispatch()


    const deleting=(index)=>{
        dispatch(Remove(index))
        
     }


  return (
    <>
    <div className="mv gy-2 bg-black text-light text-center position-relative">
       <div className="position-relative " style={{height:"100%"}}>
        <img  className='w-100' style={{height:"300px"}} src={props.images}/>
        <h3  style={{textAlign:"center" , height:"50px"}} className="pb-2 pt-2 fs-5">{props.titles}</h3>
        <button className='btn btn-danger mb-4 text-white fs-5' onClick={()=>deleting(props.index)}>Remove</button>
      </div>
    </div>
    </>
    
  );
}

export default FavorietPage;