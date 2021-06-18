import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = (props) => {
    const contextValue = useContext(CartContext);
    console.log(contextValue);
    const cartItems = contextValue.items.reduce((curValue, item)=>{
        return curValue+item.amount;
    },0)
    return (
        <button className={classes.button} onClick={props.onClickCartButton}>
            <span className={classes.icon}>
                <CartIcon />

            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>
                {cartItems}
            </span>
        </button>
    )
}

export default HeaderCartButton
