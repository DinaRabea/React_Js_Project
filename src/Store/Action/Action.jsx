export const AddtoCart=(movie)=>{
    return{
        type:"ADD_TO_CART",
        movie,
  
    }
}

export const Remove=(payload)=>{
    return{
        type:"REMOVEFROMCART",
        payload
    }
}


