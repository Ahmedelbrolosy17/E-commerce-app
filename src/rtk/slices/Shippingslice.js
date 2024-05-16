import { createSlice } from "@reduxjs/toolkit";


export const ShippingSlice = createSlice({
    name:"ShippingSlice",
    initialState:[],
    reducers:{
        setProducts(state, action){
            return action.payload;
        }
    }
})

export default ShippingSlice.reducer;
export const {setProducts} = ShippingSlice.actions;