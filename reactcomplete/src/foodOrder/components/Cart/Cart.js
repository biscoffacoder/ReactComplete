import React, { useContext } from 'react';
import CartContext from './../../store/cart-context';
import Modal from './../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
const Cart = (props) => {
    const cartContextValue = useContext(CartContext);
    const removeHandler = (id) => { 
        console.log(id, 'From CART removeHadn;er' )
        cartContextValue.removeItem(id);
    }
    const addHandler = (item) => { 
        cartContextValue.addItem(item);
    }

    const cartItems = <ul className={['classes.cart--items']}>
        {cartContextValue.items.map((item) => {
            return <CartItem
                key={item.id}
                name={item.name} 
                amount={item.amount} 
                price={item.price}
                onAdd={addHandler.bind(null,item)}
                onRemove={removeHandler.bind(null,item.id)} 
                />
        })}
    </ul>;

    const totalAmount = +cartContextValue.totalAmount.toFixed(2);
    
    const hasItems = cartContextValue.items.length > 0;
    


    return (
        <Modal onCloseHandler={props.onCloseCart}>
            {cartItems}
            <div className={classes.total}>
                <span>
                    Total Amount
                </span>
                <span>
                    $ {totalAmount}
                </span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
