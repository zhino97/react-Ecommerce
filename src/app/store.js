import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartSlice from "../features/CartSlice";
import ecommerceApi from "../features/ecommerceApi.js";
import userSlice from "../features/userSlice";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    user: userSlice,
    cart: CartSlice,

    [ecommerceApi.reducerPath]: ecommerceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(ecommerceApi.middleware);
  },
});

setupListeners(store.dispatch);
