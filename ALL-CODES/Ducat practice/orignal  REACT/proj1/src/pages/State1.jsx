import React, { useState } from 'react'

export default function State1() {
    const[city, setCity] = useState("DELHI")
  
  return (
    <div>
        <h1>City:{city} </h1>
        <button onClick ={()=>setCity("BIHAR")}>Change</button> <br/>

        <button onClick={()=>alert("hello world")}>Click me</button>
      
    </div>
  )
}
