import React, { useState } from 'react'
import Sidebar from './Sidebar'
import { toast } from 'sonner'

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("auth"))
  const [edit, setEdit] = useState(false)
  const [editUser, setEditUser] = useState(user)

  function handleEdit(e) {
    e.preventDefault()
    setEdit(true)
  }

  async function handleUpdate(e) {
    e.preventDefault()
    try {
      console.log("ok")
      const res = await fetch(`http://localhost:3000/users/${editUser.id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editUser)
      })
      if (res.status === 200) {
        toast.success(` User Updated successfully!`)

        setEdit(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex'>
      <Sidebar />
      <div>
        <div className='bg-gray-100 w-screen flex flex-col md:flex-row'>
          <div className='p-4 w-full md:w-1/3'>
            <form className='bg-white  p-4 space-y-2' >
              <h1 className='font-semibold mb-3 text-xl'>
                User Profile
              </h1>

              <div>
                <label htmlFor="" className='mb-2'>Username</label>
                <input type="text" className='border p-2 w-full rounded'
                  // placeholder='name'
                  name="name"
                  disabled={!edit}
                  value={editUser.name}
                  onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="" className='mb-2'>E-mail</label>
                <input type="text" className='border p-2 w-full rounded'
                  // placeholder='name'
                  name="E-mail"
                  disabled={!edit}
                  value={editUser.email}
                  onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                />
              </div>

              {
                edit && <div>
                  <label htmlFor="" className='mb-2'>Password</label>
                  <input type="text" className='border p-2 w-full rounded'
                    name="Passord"
                    disabled={!edit}
                    autoComplete='off'
                    onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
                    placeholder='enter password'
                  />
                </div>
              }

              <div>
                {
                  edit
                    ? <div className='space-x-10'>
                      <button className='bg-green-600 text white py-2 px-5 rounded mt 3 '
                        onClick={handleUpdate}
                      >
                        Save
                      </button>
                      <button className='bg-red-700 text white py-2 px-5 rounded mt 3 '
                      >
                        Cancel
                      </button>
                    </div>
                    : <button className='bg-sky-500  text white py-2 px-5 rounded mt 3 ' edit profile
                      onClick={handleEdit}
                    >
                      Edit profile
                    </button>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

