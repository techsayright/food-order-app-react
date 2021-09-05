import React, { useReducer } from 'react'
import cartContext from './cart-context'

const initCart ={
    items: [],
    totalAmt: 0
}

const cartReducer = (state, action)=>{
    if(action.type ==="ADD"){
    
        const updatedAmt = state.totalAmt + action.item.price * action.item.quantity;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
          );
          const existingCartItem = state.items[existingCartItemIndex];
          let updatedItems;
      
          if (existingCartItem) {
            const updatedItem = {
              ...existingCartItem,
              quantity: existingCartItem.quantity + action.item.quantity,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
          } else {
            updatedItems = state.items.concat(action.item);
          }
        return{
            items: updatedItems,
            totalAmt: updatedAmt
        }
    }
    else if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmt - existingItem.price;
        let updatedItems;
        if (existingItem.quantity === 1) {
          updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
          const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }
    
        return {
          items: updatedItems,
          totalAmt: updatedTotalAmount
        };
      }
    
    return initCart
}

export default function CartProvider(props) {
    console.log("hi i am cartProvider");

    const [cartVal, dispatchCartVal] = useReducer(cartReducer, initCart);


    const addToCartHandler = (item)=>{
        dispatchCartVal({type: 'ADD', item:item })
        console.log("i am from cartProvider");
    }

    const removeFrmCartHandler = (id)=>{
        dispatchCartVal({type: 'REMOVE', id: id})
    }

    return (
        <cartContext.Provider value={{
            items: cartVal.items,
            totalAmt: cartVal.totalAmt,
            addItems:addToCartHandler,
            removeItems:removeFrmCartHandler
        }}>
            {props.children}
        </cartContext.Provider>
    )
}
