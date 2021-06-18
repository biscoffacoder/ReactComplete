import React, { useReducer } from 'react';
import CartContext from './cart-context';

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const cartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const updatedTotalAmount = state.totalAmount + action.stateValue.price * action.stateValue.amount;
            console.log(`inside Reducer add to Cart - actionobj- ${action.stateValue.id} and state obj- ${state.items}`)
            const existingIndex = state.items.findIndex((item) => { return item.id === action.stateValue.id });
            const existingValue = state.items[existingIndex];
            let updatedItem;
            let updatedItemArray;

            if (existingValue) {
                updatedItem = {
                    ...existingValue,
                    amount: existingValue.amount + action.stateValue.amount
                }
                updatedItemArray = [...state.items];

                updatedItemArray[existingIndex] = updatedItem;

            } else {
                updatedItemArray = state.items.concat(action.stateValue);

            }
            return {
                items: updatedItemArray,
                totalAmount: updatedTotalAmount
            };
        case REMOVE_FROM_CART:
            console.log(action.stateValue,' id From RemoveCart')

            const existingIndexR = state.items.findIndex((item) => { return item.id === action.stateValue });
            console.log(existingIndexR,' From RemoveCart')
            const existingValueR = state.items[existingIndexR];
            const updatedAmount = (state.totalAmount - existingValueR.price);
            
            let updatedItemR;
            let updatedItemArrayR;

            if (existingValueR.amount === 1) {
                updatedItemArrayR = state.items.filter(item => item.id !== action.stateValue);

            } else {
                updatedItemR = {
                    ...existingValueR,
                    amount: existingValueR.amount - 1
                };
                updatedItemArrayR = [...state.items];
                updatedItemArrayR[existingIndexR] = updatedItemR;
            }
            return {
                items: updatedItemArrayR,
                totalAmount: updatedAmount
            };


        default:
            return cartState;
    }

}
const CartProvider = (props) => {
    const [stateSnapshot, dispatch] = useReducer(cartReducer, cartState);

    const addItemToCart = (item) => {
        console.log('Inside Cart Provider Dispatch Add', item)
        dispatch({ type: ADD_TO_CART, stateValue: item })
    }
    const removeFromCart = (id) => {
        console.log(id, 'from Provider Cart')
        dispatch({ type: REMOVE_FROM_CART, stateValue: id })

    };
    const cartContext = {
        items: stateSnapshot.items,
        totalAmount: stateSnapshot.totalAmount,
        addItem: addItemToCart,
        removeItem: removeFromCart

    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
