import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("ProductSlice/fetchProducts", async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})
export const fetchProductType = createAsyncThunk("ProductSlice/fetchProductType", async(url)=>{
    const res = await fetch(url);
    const data = await res.json();
    return data;
})

export const ProductSlice = createSlice({
    name:"ProductSlice",
    initialState:[],
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            return action.payload
        })
        builder.addCase(fetchProductType.fulfilled, (state, action)=>{
            return action.payload;
        })
    }
})
export default ProductSlice.reducer;