const InitalValue={
    Movies:[]
    }
    export default function CartReducer (state=InitalValue,action){
    
    switch(action.type){
        case "ADD_TO_CART":
            return{
                Movies :[
                    ...state.Movies,{
                        movie:action.movie,
                       
                    }
                ],
    
    
            }
            
            case "REMOVEFROMCART":
                const item_index=action.payload;
                const newState={...state};
                newState.Movies.splice(item_index,1);
                
                return newState;
                
        default:  
            return state
    }
    }