import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cartSlice", 
    initialState:[],
    reducers:{
        add(state, action){
            let founded = state.find((ele)=>{
                return ele.id === action.payload.id;
            }) 
            if(founded){
                founded.quantity++;
            }else{
                const clonedProduct = {...action.payload, quantity:1}
                state.push(clonedProduct);
            }
        },
        deleteProduct(state, action){
            if(action.payload.quantity === 1){
                return state.filter((ele)=>{
                    return ele.id !== action.payload.id
                })
            }else{
                return state.map((ele)=>{
                    return ele.id === action.payload.id ? {...ele ,quantity: ele.quantity - 1} : ele;
                })
            }
        },
        clear(state){
            return state=[];
        }
    }
})

export default cartSlice.reducer;
export const {add, deleteProduct, clear} = cartSlice.actions;