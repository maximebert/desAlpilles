import {createSlice} from "@reduxjs/toolkit";


 const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: null,
    },
    reducers:{
        addProduct:(state, {payload}) => {
            state.products.push(payload)
            state.quantity +=1;
        },
        deleteProduct: (state, { payload }) => {
            state.products.filter((prod) => prod.id !== payload)
            state.quantity -=1
            return state;
        
        },
        },
    },
);

export default cartSlice.reducer;
export const { addProduct, deleteProduct } = cartSlice.actions