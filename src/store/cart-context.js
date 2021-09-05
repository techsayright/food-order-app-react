import { createContext } from "react";

console.log("hi i am cart context");
const cartContext= createContext({
    items: [],
    totalAmt: 0,
    addItems:(quantity)=>{},
    removeItems:()=>{}
})

export default cartContext;