import React, { createContext, useContext, useReducer } from 'react'
const cartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
     switch(action.type){
      case "ADD":
        return [...state,{id:action.id,name:action.name,price:action.price,qty:action.qty,size:action.size,img:action.img }]
      case "Remove":
             let newArr=[...state]
             newArr.splice(action.index,1)
             return newArr; 
      case "UPDATE":
        // console.log("updated......")
           let arr=[...state]
           arr.find((food,index)=>{
            if(food.id===action.id){
              console.log(food.qty,parseInt(action.qty),action.price +food.price)
              arr[index]={...food,qty:parseInt(action.qty)+food.qty,price:action.price + food.price}
            }
            return arr
           })
           return arr
      case "DROP":
        let empArray=[]
        return empArray
      default:
          console.log("Error in Reducer")
     }
}


function CartProvider({children}) {
    const [state,dispatch]=useReducer(reducer,[])
  return (
    <CartDispatchContext.Provider value={dispatch}>
        <cartStateContext.Provider value={state}>
            {children}
        </cartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export default CartProvider;
export const useCart=()=>useContext(cartStateContext);
export const useDispatchCart=()=>useContext(CartDispatchContext);