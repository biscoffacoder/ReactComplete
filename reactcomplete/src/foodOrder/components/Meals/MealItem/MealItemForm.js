import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
    const quantityInputRef = useRef();
    const [qtyError, setQtyError] = useState(false);
    const itemState = props.itemValue;
    console.log(itemState);
   
    
    const submitHandler = event => {
        event.preventDefault();
        console.log(quantityInputRef)
        const cartQuantity = quantityInputRef.current.value;
        const quantity = +cartQuantity;

        if (quantity < 1 || quantity > 5) {
            setQtyError(true);
            return;
        } else {
            setQtyError(false);
        }

        props.onAddToCart(quantity);


    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={quantityInputRef}
                label="Amount"
                input={{
                    type: 'number',
                    id: itemState.id,
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button > + Add</button>
            {qtyError && <p>Please enter a valid amount [1-5]</p>}
        </form>
    )
}

export default MealItemForm
