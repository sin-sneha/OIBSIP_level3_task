export const addToCart=(pizza , quantity , varient)=>(dispatch , getState)=>{


// create object of cartitem
var cartItem = {
    name : pizza.name , 
    _id : pizza._id ,
    image : pizza.image ,
    varient : varient ,
    quantity : Number(quantity) ,
    prices : pizza.prices ,
    price : pizza.prices[0][varient]* quantity           //prices of pizza in cart change:its the array to calculate the variable(quantity, varient)

}

if(cartItem.quantity>10)
{
    alert('You cannot add more than 10 quantities')
}
else if(cartItem.quantity<1){
dispatch({type : 'DELETE_FROM_CART', payload : cartItem})

    }
    else{       
//add item and update in cart and localstorage
dispatch({type : 'ADD_TO_CART', payload : cartItem})
}


const cartItems = getState().cartReducer.cartItems
localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}



//delete item and update  in cart and localstorage
export const deleteFromCart=(pizza)=>(dispatch , getState)=>{

    dispatch({type: 'DELETE_FROM_CART' , payload : pizza})
const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))


}