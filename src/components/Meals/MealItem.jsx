import React from 'react';
import { MealForm } from './MealForm';
import classes from './MealItem.module.css'

export const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealForm />
        </div>
    </li>
  )
}
