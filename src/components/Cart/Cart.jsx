import React from 'react'
import { Modal } from '../UI/Modal';
import classes from './Cart.module.css';

export const Cart = (props) => {
  const cartItems = <ul className={classes[`cart-items`]}>{[{ id: '1', name: 'sushi', amount: 2, price: 10}].map(item => <li>{item.name}</li>)}</ul>
  
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
        <div>
          <span>Total Amount</span>
          <span>33</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose} >close</button>
          <button className={classes.button}>order</button>
        </div>
    </Modal>
  )
}
