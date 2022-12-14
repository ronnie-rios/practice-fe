import React from 'react'
import img from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';


export default function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>fancy meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img 
                src={img}
                alt='meals header'
            />
        </div>
    </>
  )
}
 