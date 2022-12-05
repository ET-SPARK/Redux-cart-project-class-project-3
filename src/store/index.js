import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Autth-slice";
import cartSclice from "./cartSlice";
import uiSlice from "./UiSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSclice.reducer,
        ui: uiSlice.reducer
    },
});

export default store;