import React, { useState } from 'react'

export default function UserForm() {
    const [user,setUser]= useState({
        name:"",city:"",email:""
    })
     function handleChange(e ){
        setUser({...user,[e.target.name]:e.target.value})
     }
    async function handleSumbit(e){
        e.preventDefault()
        try {
             const res= await fetch(`http://localhost:6789/api/v1/nodejs/add`,{
             method:"POST",
             headers:{
                "Content-Type":"application/json"
             },
             body:JSON.stringify(user)
            
            })
             console.log(res)

        } catch (error) {
            console.log(error)
        }
     }
  return (
    <div>
      <h1>User form</h1>
        <form  onSubmit={handleSumbit}>
            <label htmlFor="">name</label>
            <input type="text"
              name="name"
              value={user.name}
             onChange={handleChange} />
            <br /><br />

             <label htmlFor="">email</label>
            <input type="email" 
            name="email"
            value={user.email}
            onChange={handleChange}
            /> <br /><br />

             <label htmlFor="">city</label>
            <input type="text" 
             name="city"
             value={user.city}
            onChange={handleChange}
            
            /> <br /><br />

            <button>Submit</button>
        </form>
    </div>
  )
}
