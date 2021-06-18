import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from './../../../store/cart-context';
const MealItem = (props) => {
    const cartContextValue = useContext(CartContext);
    const itemState = props.item;
    const price = `$ ${itemState.price.toFixed(2)}`;
    const addToCart = amount=>
    {
        console.log("Inside add to cart of Meal item ", itemState )
        cartContextValue.addItem(
            {
                id:itemState.id,
                name: itemState.name,
                amount:amount,
                price:itemState.price 
            });
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3> {itemState.name}</h3>
                <div className={classes.description}>{itemState.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm itemValue={itemState} onAddToCart={addToCart}/>
            </div>
        </li>
    )
}

export default MealItem
