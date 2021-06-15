import React from 'react'
import classes from './MealsSummary.module.css'
const MealsSummary = () => {
    return (
        <section className= {classes.summary}>
            <h2>Delicious Meals ordered and delivered</h2>
            <p>
                Order now at exciting discounts
            </p>
            <p>
                Prepared with care and top hygiene standards
            </p>
        </section>
    )
}

export default MealsSummary
