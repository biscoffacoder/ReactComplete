import React from 'react'
import classes from './Cart.module.css'
import Modal from './../UI/Modal';
const Cart = (props) => {
    const cartItems = <ul>
        {[{ id: 'z1', name: 'sushi', amount: 2, price: 12.99 }]
            .map((item) => { return <li>{item.name}</li> })}</ul>;
    return (
        <Modal>
            {cartItems}
            <div className={classes.totalAmount}>
                <span>
                    Total Amount
                </span>
                <span>
                    35.62
                </span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
