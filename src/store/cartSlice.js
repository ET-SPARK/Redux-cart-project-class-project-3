import { createSlice } from "@reduxjs/toolkit";


const cartSclice = createSlice({
    name: 'cart',
    initialState: {
        itemList: [],
        totalQuantity: 0,
        showCart: false,
        changed: false
    },
    reducers: {
        replaceData(state, action) {
            state.totalQuantity = action.payload.totalPrice;
            state.itemList = action.payload.itemList;
        },
        addToCart(state, action) {
            state.changed = true
            const newItem = action.payload;
            const exsitingItem = state.itemList.find((item) => item.id === newItem.id);

            if(exsitingItem) {
                exsitingItem.quantity++;
                exsitingItem.totalPrice += newItem.price;
            }else {
                state.itemList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                });
                state.totalQuantity++;
            }
        },
        removeFromCart(state, action) {
            state.changed = true
            const id = action.payload
            const exsitingItem = state.itemList.find((item) => item.id === id);
            
            if(exsitingItem.quantity === 1) {
               state.itemList = state.itemList.filter((item) => item.id !== id)
               state.totalQuantity--
            }else {
                exsitingItem.quantity--;
                exsitingItem.totalPrice -= exsitingItem.price;
            }
        },
        setShowCart(state) {
            state.showCart = !state.showCart;
        }
    }
})



export const cartActions = cartSclice.actions;

export default cartSclice;