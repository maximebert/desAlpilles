import {createSlice} from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: "cart",
    initialState:[],
    reducers:{
        addProduct:(state, action) => {
            state.push(action.payload)
        },
        deleteProduct: (state, action) => {
            state.filter((t) => t.id !== action.payload)
            return state;
        },
        },
    },
);

export default cartSlice;