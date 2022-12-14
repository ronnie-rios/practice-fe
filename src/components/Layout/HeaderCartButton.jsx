import React from 'react'
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

export default function HeaderCartButton(props) {
  return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon/></span>
        <span>your cart</span>
        <span className={classes.badge}></span>
    </button>
  )
}
