import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector()

    const onIncrement = () => {

    }

    const onDecrement = () => {
        
    }

    return (
        <div>
            <h1>Value = {value}</h1>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    )
}

export default Counter
