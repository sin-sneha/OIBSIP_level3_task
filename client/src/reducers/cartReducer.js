export const cartReducer=(state={cartItems : []} , action)=>{

    switch (action.type)
    {
        case 'ADD_TO_CART' : 
        
        //condition to check if item is already present in cart
        const alreadyExists = state.cartItems.find(item=> item._id===action.payload._id)    //here action.payload is item we are gonna add
        if (alreadyExists)
        {
return{
    ...state , 
    cartItems : state.cartItems.map(item=> item._id===action.payload._id ? action.payload : item)
}
        }
        else{
        
        return {
            ...state ,
            cartItems:[...state.cartItems , action.payload]
        }
    }
    case  'DELETE_FROM_CART' : return{

        ...state,
        cartItems : state.cartItems.filter(item =>item._id !==action.payload._id)
    }
        default : return state
    }
}