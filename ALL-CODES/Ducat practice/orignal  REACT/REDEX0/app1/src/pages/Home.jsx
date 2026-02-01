import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment,incrementByAmount } from '../redux/conterSlice'

export default function Home() {
     const{count} = useSelector(state=>state.counter)
        const dispatch = useDispatch()
  return (
    <div>
        <h2>this is home page!</h2>
        <h3>
          <button onClick={()=>dispatch(decrement())}>-</button>
          {count}
          <button onClick={()=>dispatch(increment())}>+</button>
          <button onClick={()=>dispatch(incrementByAmount(5))}>Increment By Amount</button>
          </h3>
    </div>
  )
}
