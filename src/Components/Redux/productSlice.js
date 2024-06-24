import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items: [],
    total:0
}
localStorage.getItem("items")!==null?
initialState.items=JSON.parse(localStorage.getItem('items')):
initialState.items=[];
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload)
            localStorage.setItem('items',JSON.stringify(state.items))
        }, removeFromCart: (state, action) => {
            const ItemId = action.payload.id;
            let removed = false;
            state.items = state.items.filter(item => {
                if ( !removed && item.id === ItemId) {
                    removed = true;
                    return false;
                }
                return true
            })
            localStorage.setItem('items',JSON.stringify(state.items))
        },calcTotal:(state)=>{
            let total= 0;
            state.items.forEach((item)=>{
                total+=item.price;
            })
            state.total=Math.round(total);
        }
    }
})