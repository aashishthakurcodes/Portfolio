import { createSlice } from '@reduxjs/toolkit';

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItems:(state,action)=>{
            state.items.pop()
        },
        clearItems:(state)=>{
            state.items=[]
        }
    }
})

export const {addItems,clearItems,removeItems}=cartSlice.actions;
export default cartSlice.reducer;