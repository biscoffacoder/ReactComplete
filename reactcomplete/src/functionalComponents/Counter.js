import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    const handleClick = (value) => {
        if (value === 1) {
            setCount((prevCount) => {
                return prevCount + value;
            })
        } else {
            setCountTwo((prevCount) => {
                return prevCount + value;
            })

        }
    }
    const handleClickDecrease = (value) => {
        value === 1 ?
        setCount((prevCount) => {
            return prevCount - value;
        }) :        setCountTwo((prevCount) => {
            return prevCount - value;
        })
        
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => handleClick(1)}>Click to increase the count </button>
            <button onClick={() => handleClickDecrease(1)}>Click to decrease the count </button>
            <button onClick={() => setCount(0)}>Click to reset the count </button>
            <h2>{countTwo}</h2>
            <button onClick={() => handleClick(5)}>Click to increase the count by 5 </button>
            <button onClick={() => handleClickDecrease(5)}>Click to decrease the count by 5 </button>
            <button onClick={() => setCountTwo(0)}>Click to reset the count </button>


        </div>
    )
}

export default Counter
