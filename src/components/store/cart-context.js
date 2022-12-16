import React from 'react';

export const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: () => {},
    removeItem: () => {}
});

//PROVIDER
export const CartProvider = props => {
    const addItemToCart = (items) => {

    }
    const removeItemFromCart = (id) => {

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

