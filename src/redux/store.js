
   
import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartRedux";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  }
})
