import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from '../../store/reducers/counterReducer'
import { getCounterValue } from '../../store/reducers/selectors/getCounterValue/getCounterValue'

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
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
