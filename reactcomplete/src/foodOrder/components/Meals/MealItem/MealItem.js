import React from 'react'
import classes from './MealItem.module.css'
const MealItem = (props) => {
    const price = `$ ${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3> {props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                Form
            </div>
        </li>
    )
}

export default MealItem
