import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        products: productSlice,
    }


});

console.log(store)

export default store;