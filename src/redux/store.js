import { configureStore} from "@reduxjs/toolkit";
import cartSliceReducer from "./cartRedux";

export default configureStore({
  reducer: {
    cart: cartSliceReducer,
  }
})
