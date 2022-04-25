import { createSlice } from "@reduxjs/toolkit";
//import {useNavigate} from 'react-router-dom'
//const navigate = useNavigate();
const initialState = {
    cartitems: [],
    cartTotalQuantity:0,
    cartTotalAmt:0,
}  ;

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action){
            
          const itemIndex = state.cartitems.findIndex((item) => item.id === action.payload.id);

          if(itemIndex >= 0){
              state.cartitems[itemIndex].qnty +=1;
          }else{
              const tempProduct = {...action.payload, qnty: 1};
              state.cartitems.push(tempProduct)
          }
            // return [...state, action.payload]

            // but we can This way at this condition too
            

            //state.push(action.payload);
        },
        remove(state, action){
            
           const cartItems =  state.cartitems.filter((item) => item.id !== action.payload);
           state.cartitems = cartItems;

        },
        removeOne(state, action){
            const removeitemIndex = state.cartitems.findIndex((item) => item.id === action.payload.id);
            //state[removeitemIndex].qnty -= 1;
                if(state.cartitems[removeitemIndex].qnty > 1){
                   
                    state.cartitems[removeitemIndex].qnty -= 1;
                }else  if(state.cartitems[removeitemIndex].qnty === 1){
                   console.log("works")
                    const cartItems =  state.cartitems.filter((item) => item.id !== action.payload.id);
                     state.cartitems = cartItems;
                    
                }

        },
        removeAll(state, action){
             state.cartitems = [];
        },
        getTotal(state, action){
            let {total, quantity} = state.cartitems.reduce((cartTotal, cartItem)=> {
                const {price, qnty} = cartItem;
                const itemTotal = price * qnty;

                cartTotal.total += itemTotal;
                cartTotal.quantity += qnty;

                return cartTotal;
            }, 
            {
                total: 0,
                quantity: 0,
            }
            );
            state.cartTotalAmt = total;
            state.cartTotalQuantity = quantity;
           
        },
    }
})

export const {add, remove, removeOne, removeAll, getTotal} = cartSlice.actions;
export default cartSlice.reducer;