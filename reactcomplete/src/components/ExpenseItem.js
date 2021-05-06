import React from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    const expDate = new Date();
    const expenses = [{ title: 'Car Insurance', price: '$700' }, { title: 'Medical Bills', price: '$200' },
    { title: 'Movies', price: '$70' }, { title: 'Eating out', price: '$20' }]
    return (
        <div className="expenses">
            {expenses.map((ele) => {
                return (
                    <div className="expense-item">
                        <ExpenseDate date={expDate} />
                        <div className="description">
                            <h2> {ele.title}</h2>
                            <div className="price"> {ele.price}</div>
                        </div>
                    </div>
                )
            })}


        </div >
    )
}

export default ExpenseItem
