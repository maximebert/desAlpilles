import {createSlice} from "@reduxjs/toolkit";


 const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        addProduct:(state, {payload}) => {
            state.push(payload)

        },
        deleteProduct: (state, {payload}) => {
          return state.filter((prod) => prod.title !== payload)
        },
        },
    },
);

export default cartSlice.reducer;
export const { addProduct, deleteProduct } = cartSlice.actions