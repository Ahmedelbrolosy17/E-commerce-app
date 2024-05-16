import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchcategories = createAsyncThunk("ProductSlice/fetchcategories", async()=>{
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
})

const Categoryslice = createSlice({
    name:"Categoryslice", 
    initialState:[],
    extraReducers:(builder)=>{
        builder.addCase(fetchcategories.fulfilled, (state, action)=>{
            return action.payload;
        })
    }
})

export default Categoryslice.reducer;