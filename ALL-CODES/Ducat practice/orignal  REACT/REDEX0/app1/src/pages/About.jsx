import React from 'react'
import { useSelector } from 'react-redux'

export default function About() {
      const {count,value}= useSelector(state=>state.counter)
  return (
    <div>
        <h2>this is about page !</h2>
        <h3>count:{count}</h3>
        <h3>value:{value}</h3>
      
    </div>
  )
}
