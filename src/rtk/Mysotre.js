import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './slices/Products-slice'
import cartSlice from './slices/Cartslice'
import Categoryslice from './slices/CategorySlice'
import ShippingSlice from './slices/Shippingslice'


export const myStore = configureStore({
    reducer:{
        products:ProductSlice,
        soldProducts:cartSlice,
        categories:Categoryslice,
        ShippingPro:ShippingSlice,
    },
  })