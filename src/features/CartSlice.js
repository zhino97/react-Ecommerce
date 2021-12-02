import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    appendCart: (state, action) => {
      console.log(action.payload);
      state.value.push(action.payload);
    },
    removeCart: (state, action) => {
      state.value.forEach((product, index) => {
        if (product.name === action.payload) {
          state.value.splice(index, 1);
        }
      });
    },
  },
});

export const { appendCart, removeCart } = CartSlice.actions;
export default CartSlice.reducer;
