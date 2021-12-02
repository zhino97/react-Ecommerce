import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/CartSlice";
import userSlice from "../features/userSlice";
/* When you create a slice, import it here */
// import countReducer from '../features/TestCounterSlice.js'

export const store = configureStore({
  reducer: {
    /* count: countReducer */
    user: userSlice,
    cart: CartSlice,
  },
});
