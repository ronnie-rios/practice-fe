import { useState, useReducer, createContext } from 'react';

const initialCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (type ==='ADD_TO_CART') {
        const updatedCart = state.items.concat(action.payload);
        const updatedTotal = state.totalAmount + action.payload.price * action.payload.amount
        return {
            items: updatedCart,
            totalAmount: updatedTotal
        }
    } else if (type === 'REMOVE_FROM_CART'){

    }
    return initialCartState
}

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {}
});

//PROVIDER
export const CartProvider = props => {
   const [cartState, dispatchCart] = useReducer(cartReducer, initialCartState);
    
    const addItemToCart = (item) => {
        dispatchCart({ type: 'ADD_TO_CART', payload: item })
    }
    const removeItemFromCart = (id) => {
        dispatchCart({ type: 'REMOVE_FROM_CART', id: id })

    }
    
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

