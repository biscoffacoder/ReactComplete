import React from 'react';
import image from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
   
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Foodzo</h1>
                <HeaderCartButton onClickCartButton = {props.onClickCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="Meals" />
            </div>
        </React.Fragment>
    )
}

export default Header
